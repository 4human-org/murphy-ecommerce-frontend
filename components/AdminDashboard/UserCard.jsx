"use client";

export default function UserCard({ user }) {
  const profileURL = "/profile/" + user.id;
  return (
    <div className="m-4 rounded-lg bg-slate-200 p-6 text-xl shadow-lg">
      <p>
        User: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      <p>Admin status: {user.isAdmin ? "admin" : "is not admin"}</p>
      <p className="text-center">
        <a href={profileURL}>
          <button className="m-2 rounded bg-slate-100 p-2 text-center shadow">
            Go to {user.firstName ? user.firstName + "'s" : "user's"} profile
          </button>
        </a>
      </p>
    </div>
  );
}
