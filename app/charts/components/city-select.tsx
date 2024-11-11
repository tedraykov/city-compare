'use client';
import { Button } from "components/ui/button";
import { Flex } from "components/ui/flex";
import { SelectNative } from "components/ui/select-native";
import { useRouter } from "next/navigation";

export const cities = [
  "Vienna",
  "Athens",
  "Sofia",
  "Brussels",
  "Zagreb",
  "Nicosia",
  "Prague",
  "Copenhagen",
  "Tallinn",
  "Helsinki",
  "Paris",
  "Berlin",
  "Budapest",
  "Dublin",
  "Rome",
  "Riga",
  "Vilnius",
  "Luxembourg",
  "Valletta",
  "Amsterdam",
  "Warsaw",
  "Lisbon",
  "Bucharest",
  "Bratislava",
  "Ljubljana",
  "Madrid",
  "Stockholm",
  "London",
]

export default function CitySelect() {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/charts?city=${e.target.value}`);
  };
  const resetCitites = () => {
    router.push(`/charts`);
  }

  return (
    <Flex row>
      <SelectNative onChange={handleChange}>
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </SelectNative>
      <Button onClick={resetCitites}>Reset</Button>
    </Flex>
  );
}
