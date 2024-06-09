"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3030/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        alert("User updated successfully!");
        router.push("/admin/dashboard/manageusers");
      } else {
        console.log(response);
        alert("Failed to create user.");
      }
    } catch (error) {
      console.error("Error on creating user:", error);
    }
  };

  return (
    <div className="flex w-screen flex-col bg-slate-100 p-6 pl-[10%] text-lg">
      <form onSubmit={handleSubmit}>
        <legend className="text-2xl font-bold">Create New User</legend>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            name="firstName"
            className="m-2 rounded bg-slate-200 p-2 shadow"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
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
            placeholder="john.doe@gmail.com"
            name="email"
            className="m-2 rounded bg-slate-200 p-2 shadow"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <p className="mt-2">Set admin status:</p>
          <ul className="m-2 flex flex-row">
            <label htmlFor="admin">Admin</label>
            <input
              id="admin"
              type="radio"
              name="admin"
              value="true"
              className="m-2"
              checked={userData.isAdmin === true}
              onChange={handleRadioChange}
            />
            <label htmlFor="notadmin">Not Admin</label>
            <input
              id="notadmin"
              type="radio"
              name="admin"
              value="false"
              className="m-2"
              checked={userData.isAdmin === false}
              onChange={handleRadioChange}
            />
          </ul>
        </div>
        <button
          type="submit"
          className="m-2 w-fit rounded bg-slate-200 p-4 shadow"
        >
          Create
        </button>
      </form>
    </div>
  );
}
