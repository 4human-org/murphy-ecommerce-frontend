"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmDelete from "../../../../../components/AdminDashboard/ConfirmDelete";

export default function Page() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: "",
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserData({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      isAdmin: value === "true",
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3030/users/${userData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      if (response.ok) {
        alert("User updated successfully!");
        router.push("/admin/dashboard/manageusers");
      } else {
        console.log(response);
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async () => {
    const confirmIntentionalDelete = window.confirm(
      "Are you sure you wish to delete this user? It is irrecoverable.",
    );
    if (!confirmIntentionalDelete) {
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:3030/users/${userData.id}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        alert("User deleted successfully!");
        router.push("/admin/dashboard/manageusers");
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const openConfirmDelete = () => {
    setModal(true);
  };

  const onConfirmDelete = () => {
    setModal(false);
    handleDelete();
  };

  const onCancelDelete = (e) => {
    setModal(false);
    alert("No deletion. Updating user.");
  };

  return (
    <div className="flex w-screen flex-col bg-slate-100 p-6 pl-[10%] text-lg">
      <h1 className="justify-center text-2xl font-bold">Edit User</h1>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            id="firstname"
            type="text"
            name="firstName"
            className="m-2 rounded bg-slate-200 p-2 shadow"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            id="lastname"
            type="text"
            name="lastName"
            className="m-2 rounded bg-slate-200 p-2 shadow"
            value={userData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="m-2 rounded bg-slate-200 p-2 shadow"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <p className="mt-2">Admin Status:</p>
          <ul className="m-2 flex flex-row">
            <div className="m-2">
              <label htmlFor="isadmin">Admin</label>
              <input
                id="isadmin"
                type="radio"
                name="isAdmin"
                value="true"
                checked={userData.isAdmin === true}
                onChange={handleRadioChange}
              />
            </div>
            <div className="m-2">
              <label htmlFor="notadmin">Not Admin</label>
              <input
                id="notadmin"
                type="radio"
                name="isAdmin"
                value="false"
                checked={userData.isAdmin === false}
                onChange={handleRadioChange}
              />
            </div>
          </ul>
        </div>
        <div>
          <button type="submit" className="m-2 rounded bg-slate-200 p-4 shadow">
            Save Changes
          </button>
          <button
            type="button"
            className="m-2 rounded bg-slate-200 p-4 shadow"
            onClick={openConfirmDelete}
          >
            Delete User
            <ConfirmDelete
              show={modal}
              message="Are you sure you want to delete this user?"
              onConfirm={onConfirmDelete}
              onCancel={onCancelDelete}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
