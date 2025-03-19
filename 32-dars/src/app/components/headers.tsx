import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export const Header = async () => {
  const userToken = cookies();
  const token = (await userToken).get("token");

  return (
    <div className="bg-blue-300 flex justify-center gap-[50px] pt-[20px] pb-[20px]">
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Contact</Link>
      {token ? (
        <Link href={"/profile"}>Profile</Link>
      ) : (
        <Link href={"/Login"}>Login</Link>
      )}
    </div>
  );
};
