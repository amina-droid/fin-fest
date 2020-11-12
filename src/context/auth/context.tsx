import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

interface State {
  token: string | null;
  user: User | null;
  login: Login;
  logout: () => void;
}

export interface User {
  id: string;
  email?: string;
  score?: number;
  name: {
    givenName: string;
    familyName: string;
  };
  photos: [
    {
      url: string;
    },
  ];
}
export interface Login {
  (token: string): void;
}

export const AuthContext = React.createContext<State>({
  token: null,
  user: null,
  login: () => {
    /* do nothing. */
  },
  logout: () => {
    /* do nothing. */
  },
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token) as User);
    }
  }, []);

  const login: Login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setUser(jwtDecode(newToken) as User);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      logout,
      login,
      token,
      user,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};
