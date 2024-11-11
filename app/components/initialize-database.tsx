'use client';

import { initializeDatabase } from "actions/turso";
import { Button } from "components/ui/button";
import { useActionState } from "react";

export default function InitializeDatabase() {
  const [_, formAction, isPending] = useActionState(initializeDatabase, null)
  return (
    <div>
      <h1>Initialize Database</h1>
      <p>
        This page initializes the database.
      </p>
      <form>
        <Button formAction={formAction} isLoading={isPending}>Initialize Database</Button>
      </form>
    </div>
  );
}
