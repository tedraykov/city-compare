import { Flex } from "components/ui/flex";
import SofiaPP from "./components/sofia-pp";
import { Heading } from "components/ui/heading";
import { getPPByCity } from "actions/purchasingPower";
import CitySelect from "./components/city-select";

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

export default async function ChartsPage(props: { searchParams: Promise<{ [key: string]: string }> }) {
  const params = await props.searchParams;
  console.log(params.city);

  let ppData = await getPPByCity()

  if (params.city) {
    // Keep only the selected city and sofia
    ppData = {
      Sofia: ppData.Sofia,
      [params.city]: ppData[params.city]
    }
  }


  return (
    <Flex className="max-w-screen-lg mx-auto">
      <Flex row>
        <Heading>PPI Capitals Compared to Sofia</Heading>
        <CitySelect />
      </Flex>
      <SofiaPP data={ppData} />
    </Flex>
  );
}
