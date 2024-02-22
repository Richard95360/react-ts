import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "ricardo",
      email: "ric@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <div>User {user.name} is</div>
      <div>User {user.email} is</div>
    </div>
  );
};
