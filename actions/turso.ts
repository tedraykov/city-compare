"use server";

import { turso } from "lib/truso";
import { CityStatistics, PPI } from "./types";

export async function initializeDatabase() {
  // Generate turso database
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS cities (
      name TEXT PRIMARY KEY,
      purchasingPowerIndex REAL,
      netSalary REAL
    );
  `);
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS purchasing_power_index (
      city TEXT,
      country TEXT,
      purchasingPowerIndex REAL,
      date TEXT,
      PRIMARY KEY (city, country, date) -- Composite primary key
    );
  `);
}

export async function updatePurchasingPowerIndexes(data: PPI[]) {
  await turso.execute(`
    INSERT INTO purchasing_power_index (city, country, purchasingPowerIndex, date)
    VALUES ${data.map(city => `('${city.name}', '${city.country}', ${city.purchasingPowerIndex}, '${city.date.toUTCString()}')`).join(", ")}
    ON CONFLICT (city, country, date)
    DO UPDATE SET
      purchasingPowerIndex = excluded.purchasingPowerIndex;
  `);
}

export async function updateCities(cities: CityStatistics[]) {
  await turso.execute(
    `INSERT INTO city_statistics (name, country, netSalary, purchasingPowerIndex, date)
     VALUES ${cities.map(city => `('${city.name}', '${city.country}', ${city.purchasingPowerIndex}, ${city.purchasingPowerIndex}, ${city.date})`).join(", ")}
     ON CONFLICT (name) DO UPDATE
     SET purchasingPowerIndex = EXCLUDED.purchasingPowerIndex;
    `
  );
}

export async function getPPIData() {
  const dbData = await turso.execute(`
    SELECT * FROM purchasing_power_index
    ORDER BY date DESC
  `);

  return dbData;
}
