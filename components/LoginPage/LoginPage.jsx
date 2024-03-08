"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SECRET_ROUTE } from "lib/routes";
import { signIn, useUser } from "lib/auth";
import LoginForm from "./LoginForm";

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
      <section className="flex flex-col py-12 px-16">
        <div className="text-xl tracking-wide mb-10">Sign In</div>

        <div className="mt-5 mx-5"></div>
        <LoginForm />
      </section>
    </main>
  );
}
