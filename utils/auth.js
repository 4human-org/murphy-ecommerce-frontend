// utils/auth.js
import { getIdToken } from "firebase/auth";
import { auth, app } from "app/firebase";

export const getUserToken = async (req) => {
  if (!req.headers.cookie) return null;
  const token = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith("token="));
  if (!token) return null;
  return token.split("=")[1];
};

export const isAuthenticated = async (req) => {
  const token = await getUserToken(req);
  if (!token) return false;
  try {
    const decodedToken = await auth.verifyIdToken(token);
    return !!decodedToken;
  } catch (error) {
    return false;
  }
};
