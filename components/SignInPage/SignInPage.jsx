"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SECRET_ROUTE } from "lib/routes";
import { signUp, useUser } from "lib/auth";
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
    const firstName = form.firstName.value 
    const lastName = form.lastName.value 
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const isAdmin = false;

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return;
    }

    const data = {firstName, lastName, email, isAdmin}

    try {
      await signUp(email, password)
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