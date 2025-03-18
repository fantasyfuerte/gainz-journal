"use client";

import { UserContext } from "@/context/userProvider";
import { HandleSignOut } from "@/libs/authActions";
import { useContext } from "react";

function SignOut() {
  const { refresh, user } = useContext(UserContext);

  if (user == null) return <></>;

  return (
    <h5
      onClick={() => {
        refresh();
        HandleSignOut();
      }}
      className="text-secondary absolute bottom-0 py-2 text-center font-medium text-lg mx-auto hover:opacity-65"
    >
      Sign Out
    </h5>
  );
}

export default SignOut;
