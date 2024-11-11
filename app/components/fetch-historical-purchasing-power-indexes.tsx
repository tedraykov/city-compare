'use client';
import { insertHistoricalPurchasingPower } from "actions/purchasingPower";
import { Button } from "components/ui/button";
import { useActionState } from "react";

export default function FetchHistoricalPurchasingPowerIndexes() {
  const [_, formAction, isPending] = useActionState(insertHistoricalPurchasingPower, null)
  return (
    <div>
      <h1>Get Historical Purchasing Power Indexes</h1>
      This page gets the historical purchasing power indexes.
      <form>
        <Button formAction={formAction} isLoading={isPending}>Fetch Historical Purchasing Power</Button>
      </form>
    </div>
  );
}
