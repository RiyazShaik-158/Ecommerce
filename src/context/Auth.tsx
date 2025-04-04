import { createContext, useCallback, useContext, useState } from "react";
import { LoginDataType, ProviderProps } from "./types";

const AuthContext = createContext<ProviderProps>({
  user: null,
  token: "",
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(
    () => localStorage.getItem("user") || null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const login = useCallback((data: LoginDataType) => {
    setUser(data.data.name);
    setToken(data.token);
    localStorage.setItem("user", data.data.name);
    localStorage.setItem("token", data.token);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
