import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { message } from 'antd';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_SCORES, GetUserScores } from '../../apollo';

interface State {
  token: string | null;
  user: User | null;
  score: number | null;
  updateScore: (score: number) => void;
  login: Login;
  logout: () => void;
}

export interface User {
  id: string;
  email?: string;
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
  score: null,
  updateScore: () => {
    /* do nothing. */
  },
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
  const [score, setScore] = useState<number | null>(null);
  const [getScores] = useLazyQuery<GetUserScores>(GET_USER_SCORES,
    {
      onCompleted: ({ getUserScore }) => setScore(getUserScore),
    });

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token) as User);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getScores();
    }
  }, [token, getScores]);

  const login: Login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setUser(jwtDecode(newToken) as User);
  };

  const logout = () => {
    setToken(null);
    setScore(null);
    localStorage.removeItem('token');
    setUser(null);
  };

  const updateScore = (newScore: number) => {
    setScore(prevScore => {
      const scoreDifference = newScore - (prevScore || 0);

      message.success(scoreDifference > 0
        ? `Вы получили +${scoreDifference} за правильные ответы к своим баллам!`
        : `Вы потратили ${scoreDifference} из своих баллов!`);
      return newScore;
    });
  };

  return (
    <AuthContext.Provider value={{
      score,
      updateScore,
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
