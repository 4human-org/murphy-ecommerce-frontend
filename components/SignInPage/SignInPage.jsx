"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SECRET_ROUTE } from "lib/routes";
import { signIn, useUser } from "lib/auth";
import SignInForm from "./SignInForm";
import SignInSeparator from "./SignInSeparator";
import AlternativeSignups from "./AlternativeSignups";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = useUser();

  const continueTo = searchParams?.get("continueTo") ?? SECRET_ROUTE;

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const rememberMe = form.rememberMe.checked;

    try {
      await signIn(email, password, rememberMe);
      router.replace(continueTo);
    } catch (error) {
      window.alert(error);
    }
  }

  if (user) {
    router.replace(continueTo);
    return null;
  }

  return (
    <main className="flex">
      <section className="flex flex-row px-16 py-12">
        <SignInForm handleSubmit={handleSubmit} />
        <SignInSeparator />
        <AlternativeSignups />
      </section>
    </main>
  );
}
