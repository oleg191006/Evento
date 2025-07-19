"use client";

import H1 from "@/shared/components/H1/H1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      <H1>{error.message}</H1>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
