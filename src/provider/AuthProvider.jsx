import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser") || null;
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const logOut = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  const authInfo = {
    user,
    setUser,
    logOut,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
