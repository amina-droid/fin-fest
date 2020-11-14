import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { message } from 'antd';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_SCORES, GetUserScores } from '../../apollo';
import { getWordForScores } from '../../dictionaries';

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

export const ALLOWED_USERS = [
  '5fafa98dea33a40772fea14b', // Melzer
  '5faee6377cba153604a248a4', // Eugeny
  '5fa809c6d6f8d0cae83f4345', // Amina
];

const INITIAL_TOKEN = localStorage.getItem('token');
const INITIAL_USER = INITIAL_TOKEN ? jwtDecode(INITIAL_TOKEN) as User : null;
export const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(INITIAL_TOKEN);
  const [user, setUser] = useState<User | null>(INITIAL_USER);
  const [score, setScore] = useState<number | null>(null);
  const [getScores] = useLazyQuery<GetUserScores>(GET_USER_SCORES,
    {
      onCompleted: ({ getUserScore }) => setScore(getUserScore),
    });

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
        ? `Вы получили +${scoreDifference} ${getWordForScores(scoreDifference)} за правильные ответы!`
        : `Вы потратили ${scoreDifference} ${getWordForScores(scoreDifference)}!`);
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
