"use client";

import { Suspense } from "react";
import ResultsContent from "../../components/ResultsPage/ResultsContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
