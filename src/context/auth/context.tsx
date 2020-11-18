import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { message } from 'antd';
import { useLazyQuery } from '@apollo/client';
import moment from 'moment';
import { GET_USER_INITIAL_DATA, GetUserInitialData } from '../../apollo';
import { SCORES_WORDS } from '../../dictionaries';

interface State {
  token: string | null;
  user: User | null;
  userState: UserState | null;
  updateScore: (score: number) => void;
  updateCodes: (code: string) => void;
  login: Login;
  logout: () => void;
}

type UserState = {
  score: number | null,
  codes: string[] | null,
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
  userState: null,
  updateScore: () => {
    /* do nothing. */
  },
  updateCodes: () => {
    /* do nothing. */
  },
  login: () => {
    /* do nothing. */
  },
  logout: () => {
    /* do nothing. */
  },
});

export const DEADLINE = moment('2020-11-18 10:00');

export const ALLOWED_USERS = [
  '5fafa98dea33a40772fea14b', // Melzer
  '5faee6377cba153604a248a4', // Eugeny
  '5fa809c6d6f8d0cae83f4345', // Amina
  '5faefe8dea33a40772fea14a', // Marya
  '5fb377eeea34a931505cd2fb', // Pasha
];

const INITIAL_TOKEN = localStorage.getItem('token');
const INITIAL_USER = INITIAL_TOKEN ? jwtDecode(INITIAL_TOKEN) as User : null;
export const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(INITIAL_TOKEN);
  const [user, setUser] = useState<User | null>(INITIAL_USER);
  const [userState, setUserState] = useState<UserState | null>(null);
  const [getUserInitialData] = useLazyQuery<GetUserInitialData>(GET_USER_INITIAL_DATA,
    {
      onCompleted: ({ getUserScore: score, getUserProductCodes: codes }) => setUserState({
        codes,
        score,
      }),
    });

  useEffect(() => {
    if (token) {
      getUserInitialData();
    }
  }, [token, getUserInitialData]);

  const login: Login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setUser(jwtDecode(newToken) as User);
  };

  const logout = () => {
    setToken(null);
    setUserState(null);
    localStorage.removeItem('token');
    setUser(null);
  };

  const updateScore = (newScore: number) => {
    setUserState(prevState => {
      const prevScore = prevState?.score || 0;
      const scoreDifference = newScore - prevScore;

      if (!scoreDifference) {
        return {
          codes: prevState?.codes || null,
          score: newScore,
        };
      }

      message.success(scoreDifference > 0
        ? `Вы получили +${scoreDifference} ${SCORES_WORDS[scoreDifference]} за правильные ответы!`
        : `Вы потратили ${scoreDifference} ${SCORES_WORDS[scoreDifference]}!`);
      return {
        codes: prevState?.codes || null,
        score: newScore,
      };
    });
  };

  const updateCodes = (newCode: string) => {
    setUserState(prevState => {
      const prevCodes = prevState?.codes || [];
      return {
        score: prevState?.score || 0,
        codes: [
          ...prevCodes,
          newCode,
        ],
      };
    });
  };

  return (
    <AuthContext.Provider value={{
      userState,
      updateScore,
      updateCodes,
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
