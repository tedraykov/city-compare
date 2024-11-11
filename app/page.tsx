import { Flex } from "components/ui/flex";
import InitializeDatabase from "./components/initialize-database";
import GetPurchasingPowerIndexes from "./components/fetch-purchasing-power";
import FetchHistoricalPurchasingPowerIndexes from "./components/fetch-historical-purchasing-power-indexes";

export default function Home() {
  return (
    <Flex>
      <GetPurchasingPowerIndexes />
      <InitializeDatabase />
      <FetchHistoricalPurchasingPowerIndexes />
    </Flex>
  );
}
