"use server";
import * as cheerio from "cheerio";
import { PPI } from "./types";
import { getPPIData, updatePurchasingPowerIndexes } from "./turso";

const purchsingPowerUrl = "https://www.numbeo.com/cost-of-living/region_rankings_current.jsp?region=150";
const purchasingPowerHistoricalUrl = "https://www.numbeo.com/cost-of-living/region_rankings.jsp?region=150";

async function scrapeData(baseUrl: string, searchParams: { [key: string]: string } = {}) {
  // Fetch data from the purchasing power URL
  const url = new URL(baseUrl);
  // add query parameters
  Object.entries(searchParams).forEach(([key, value]) => url.searchParams.append(key, value));

  const response = await fetch(url);
  return await response.text();

}

function extractPurchasingPowerData(html: string) {
  const $ = cheerio.load(html);

  // Extract the table rows with the purchasing power data
  const rows = $("#t2 tbody tr");
  const cities: PPI[] = [];

  rows.each((_, row) => {
    const cells = $(row).find("td");
    if (cells.length >= 8) {
      const [city, country] = $(cells[1]).text().trim().split(", ");
      const purchasingPowerIndex = parseFloat($(cells[7]).text().trim() || '0');
      cities.push({
        name: city,
        country,
        purchasingPowerIndex,
        date: new Date(),
      });
    }
  });

  return cities;
}

export async function updateCurrentPurchasingPower() {
  const html = await scrapeData(purchsingPowerUrl, { region: "150" });
  const cities = extractPurchasingPowerData(html);
  await updatePurchasingPowerIndexes(cities);
}

function createDate(date: string) {
  const [year, isMid] = date.split("-");
  return new Date(parseInt(year), isMid === "mid" ? 6 : 0);
}

export async function insertHistoricalPurchasingPower() {
  const previousYears = [
    "2024-mid",
    "2024",
    "2023-mid",
    "2023",
    "2022-mid",
    "2022",
    "2021-mid",
    "2021",
    "2020-mid",
    "2020",
    "2019-mid",
    "2019",
    "2018-mid",
    "2018",
    "2017-mid",
    "2017",
    "2016-mid",
    "2016",
    "2015-mid",
    "2015",
    "2014-mid",
    "2014",
  ]

  for (const year of previousYears) {
    const html = await scrapeData(purchasingPowerHistoricalUrl, { region: "150", title: year });
    const cities = extractPurchasingPowerData(html);

    cities.forEach(city => city.date = createDate(year));
    await updatePurchasingPowerIndexes(cities);
  }
}

export async function getPPByCity() {
  const dbData = await getPPIData();
  const cities = dbData.rows.reduce((acc, row) => {
    if (!row.city) {
      return acc;
    }
    if (!acc[row.city as string]) {
      acc[row.city as string] = [];
    }

    acc[row.city as string].push({
      date: new Date(row.date as string),
      purchasingPowerIndex: row.purchasingPowerIndex as number,
      country: row.country as string,
      name: row.city as string,
    });
    return acc;
  }, {} as { [key: string]: PPI[] })

  // Sort the data by date
  Object.values(cities).forEach(city => city.sort((a, b) => a.date.getTime() - b.date.getTime()));

  return cities;
}
