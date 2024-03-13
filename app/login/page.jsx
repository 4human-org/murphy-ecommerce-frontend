"use client";
import { Suspense } from "react";
import LoginPage from "../../components/LoginPage/LoginPage";

export default function Page() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
