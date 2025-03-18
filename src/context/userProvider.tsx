"use client";

import { Auth } from "@/libs/authActions";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserContext {
  user: null | string;
}

export const UserContext = createContext<UserContext>({
  user: null,
});

export function ContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<null | string>(null);

  useEffect(() => {
    Auth().then((data) => {
      if (data == null || data.user == undefined || data.user.email == null)
        return;
      setUser(data.user.email);
      alert(data.user.email);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user: user }}>
      {children}
    </UserContext.Provider>
  );
}
