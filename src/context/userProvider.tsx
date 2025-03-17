import { createContext } from "react";

interface UserContext {
  user: null | string;
}

const UserContext = createContext<UserContext>({
  user: null,
});

export default UserContext;
