"use client";
import { SessionProvider, useSession } from "next-auth/react";
import ManualLogin from "@/components/LoginPage/ManualLogin";

function LoginPage() {
  const session = useSession();
  
  if (session.status === "authenticated") {
    return <div>LOGGED IN</div>; // Change this to a redirect — to / or /dashboard maybe
  }
  
  return (
    <>
      <ManualLogin />

      {/* Include these once those components are complete. */}
      {/* <LoginSeparator />
      <OAtuhLogin /> */}
    </>
  );
}

export default function Page() {
  return (
    <div>
      <SessionProvider>
        <LoginPage />
      </SessionProvider>
    </div>
  );
}
