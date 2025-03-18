"use client";

import { Auth } from "@/libs/authActions";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserContext {
  user: null | string;
  refresh: () => void;
}

export const UserContext = createContext<UserContext>({
  user: null,
  refresh: () => {},
});

export function ContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<null | string>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  function refresh() {
    setRefreshTrigger((prev) => !prev);
  }

  useEffect(() => {
    Auth().then((data) => {
      if (data == null || data.user == undefined || data.user.email == null) {
        setUser(null);
        return;
      }
      setUser(data.user.email);
    });
  }, [refreshTrigger]);

  return (
    <UserContext.Provider value={{ user: user, refresh: refresh }}>
      {children}
    </UserContext.Provider>
  );
}
