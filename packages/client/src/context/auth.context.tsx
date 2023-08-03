import { createContext, useContext, useState } from 'react';
import { loginSchema, singupSchema } from '@root/shared/validators/user.model';
import { Session } from '@supabase/supabase-js';
import z from 'zod';
import { trpc } from '../trpc';

export interface AuthContext {
  isAuth: boolean;
  isLoading: boolean;
  session?: Session;
  login: (data: z.infer<typeof loginSchema>) => Promise<any>;
  singup: (data: z.infer<typeof singupSchema>) => Promise<any>;
  logout: () => Promise<any>;
}

export const AuthContext = createContext<AuthContext | null>(null);
export const useAuthContext = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useState({
    isAuth: false,
    isLoading: true,
    session: undefined as AuthContext['session'],
  });

  const singup = trpc.auth.singup.useMutation({
    onSuccess({ data }) {
      dispatch({
        isAuth: true,
        isLoading: false,
        session: data.session!,
      });
    },
  });
  const login = trpc.auth.login.useMutation({
    onSuccess({ data }) {
      dispatch({
        isAuth: true,
        isLoading: false,
        session: data.session!,
      });
    },
  });
  const logout = trpc.auth.logout.useMutation();
  return (
    <AuthContext.Provider
      value={{
        ...state,
        login: login.mutateAsync,
        logout: logout.mutateAsync,
        singup: singup.mutateAsync,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
