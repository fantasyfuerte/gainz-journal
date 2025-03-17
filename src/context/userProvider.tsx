import { createContext, ReactNode } from "react";

interface UserContext {
  user: null | string;
}

export const UserContext = createContext<UserContext>({
  user: null,
});

export function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <UserContext.Provider value={{ user: null }}>
      {children}
    </UserContext.Provider>
  );
}
