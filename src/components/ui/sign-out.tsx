"use client";

import { UserContext } from "@/context/userProvider";
import { HandleSignOut } from "@/libs/authActions";
import { useContext } from "react";
import { CgLogOff } from "react-icons/cg";

function SignOut() {
  const { refresh, user } = useContext(UserContext);

  if (user == null) return <></>;

  return (
    <button
      onClick={() => {
        refresh();
        HandleSignOut();
      }}
      className="text-secondary absolute bottom-0 py-2 font-semibold text-[16px] mx-auto hover:opacity-100 flex items-center gap-1 opacity-60"
    >
      <CgLogOff size={25} />
      Sign Out
    </button>
  );
}

export default SignOut;
