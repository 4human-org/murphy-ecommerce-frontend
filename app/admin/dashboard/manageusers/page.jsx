"use client";
import UserCard from "../../../../components/AdminDashboard/AllUserCards";

export default function Page() {
  const style = "";
  return (
    <div className="flex flex-col">
      <ol role="list" start="1" className="ml-12 list-decimal">
        <s>
          <li>Get user</li>
        </s>
        <s>
          <li>Display user</li>
        </s>
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
