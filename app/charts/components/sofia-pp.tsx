"use client"

import { PPI } from "actions/types"
import { LineChart } from "components/ui/line-chart"

function printDate(date: string) {
  return new Date(date).toISOString().split('T')[0];
}

function convertToTimeseries(data) {
  // Step 1: Flatten the data
  const flattenedData = [];
  for (const city in data) {
    if (data.hasOwnProperty(city)) {
      data[city].forEach(ppi => {
        flattenedData.push({ ...ppi, city, date: new Date(ppi.date) });
      });
    }
  }

  // Step 2: Extract unique dates
  const uniqueDates = [...new Set(flattenedData.map(entry => entry.date.toISOString()))];

  // Step 3: Create timeseries entries
  const timeseries = uniqueDates.map(date => {
    const entry = { date };
    flattenedData.forEach(({ city, purchasingPowerIndex, date: entryDate }) => {
      if (entryDate.toISOString() === date) {
        entry[city] = purchasingPowerIndex;
      }
    });
    return entry;
  });

  return timeseries;
}

function normalizeDataWithSofiaAsReference(data) {
  // Identify Sofia's PPI
  const sofiaPPI = data.Sofia;
  if (!sofiaPPI) {
    throw new Error("Sofia's PPI is missing from the data");
  }

  // Normalize each city's PPI relative to Sofia
  const normalizedData = { date: printDate(data.date) };
  for (const city in data) {
    if (city !== 'date') {
      normalizedData[city] = (data[city] / sofiaPPI) * 100;
    }
  }

  return normalizedData;
}

export default function SofiaPP({ data }: { data: { [key: string]: PPI[] } }) {
  let chartData = convertToTimeseries(data);
  chartData = chartData.map(normalizeDataWithSofiaAsReference);

  const cities = Object.keys(chartData[chartData.length - 1]).filter(city => city !== "date");

  return (<LineChart
    className="h-[800px]"
    data={chartData}
    index="date"
    categories={cities}
    showLegend={true}
    onValueChange={(v) => console.log(v)}
    xAxisLabel="Month"
    yAxisLabel="Spend Category"
  />
  )
}
