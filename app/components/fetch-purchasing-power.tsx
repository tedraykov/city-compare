"use client"

import { updateCurrentPurchasingPower } from "actions/purchasingPower";
import { Button } from "components/ui/button";
import { useActionState } from "react";

export default function FetchPurchasingPowerIndexes() {
  const [_, formAction, isPending] = useActionState(updateCurrentPurchasingPower, null)
  return (
    <div>
      <h1>Get Purchasing Power Indexes</h1>
      This page gets the purchasing power indexes.
      <form action={formAction}>
        <Button formAction={formAction} isLoading={isPending}>Fetch Local Purchasing Power</Button>
      </form>
    </div>
  );
}
