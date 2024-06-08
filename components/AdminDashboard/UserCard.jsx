"use client";
import { useState, useEffect } from "react";

function makeUserCard(user) {
  console.log(user);
  return (
    <div>
      {/* {user.firstName}
      {user.lastName}
      {user.email}
      {user.isAdmin} */}
    </div>
  );
}

export default function UserCard() {
  const [allUsers, setAllUsers] = useState([null]);
  useEffect(() => {
    fetch("http://localhost:3030/users/")
      .then((data) => data.json())
      .then((userData) => {
        Object.keys(userData).map((key) => [userData[key]]);
        console.log(userData);
        setAllUsers(userData);
        const allUserData = [];
        for (let i = 0; i < allUsers.length; i++) {
          allUserData.push(makeUserCard(allUserData[i]));
        }
      });
  }, []);
  const allUserData = null;
  return <div>{allUserData ? allUserData : null}</div>;
}
