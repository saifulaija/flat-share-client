"use server";


import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
  const res = await fetch(
    "http://localhost:5000/api/v1/user/register",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      cache:"no-store"
    }
  );

  const userInfo = await res.json()
  return userInfo ;
};
