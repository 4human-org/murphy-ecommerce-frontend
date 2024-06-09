"use client";
import AllUserCards from "../../../../components/AdminDashboard/AllUserCards";
import AddUserForm from "../../../../components/AdminDashboard/AddUserForm";
export default function Page() {
  const style = "";
  return (
    <div className="flex flex-col">
      <AddUserForm />
      <AllUserCards />
    </div>
  );
}
