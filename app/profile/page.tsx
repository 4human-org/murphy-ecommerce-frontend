"use client";

import { useUser, signOut } from "lib/auth";

export default function ProfilePage() {
  const user = useUser();
  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <button className="bg-blue-900 p-4" onClick={signOut}>
          <div className="bg-blue-900 p-4">Logout</div>
        </button>
      ) : (
        <p>Not logged in.</p>
      )}
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : null}
    </div>
  );
}
