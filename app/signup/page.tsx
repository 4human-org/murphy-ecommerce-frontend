"use client";
import { Suspense } from "react";
import SignInPage from "../../components/SignInPage/SignInPage";

export default function Page() {
  return (
    <Suspense>
      <SignInPage />
    </Suspense>
  );
}
