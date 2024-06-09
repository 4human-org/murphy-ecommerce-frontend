"use client";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";

export default function AllUserCards() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/users/")
      .then((response) => response.json())
      .then((userData) => {
        setAllUsers(userData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container m-auto flex flex-wrap justify-center">
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {allUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
