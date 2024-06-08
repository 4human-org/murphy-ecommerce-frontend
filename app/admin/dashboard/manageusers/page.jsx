"use client";
import UserCard from "../../../../components/AdminDashboard/UserCard";

export default function Page() {
  const style = "";
  return (
    <div className="flex flex-col">
      <ol role="list" start="1" className="ml-12 list-decimal">
        <li>Get user</li>
        <li>Display user</li>
        <li>Delete user</li>
        <li>Add user</li>
        <li>Update user</li>
        <li>Table of users</li>
        <li>more?</li>
        <li>more?</li>
        <li>more?</li>
        <li>more?</li>
      </ol>
      <UserCard></UserCard>
    </div>
  );
}
