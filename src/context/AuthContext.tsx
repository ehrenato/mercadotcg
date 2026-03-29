import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);
const STORAGE_KEY = 'mercadotcg:user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored) as User);
    }
  }, []);

  const persistUser = (nextUser: User | null) => {
    setUser(nextUser);
    if (nextUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
  };

  const value = useMemo<AuthContextData>(() => ({
    user,
    isAuthenticated: Boolean(user),
    login: (email: string, _password: string) => {
      const normalizedEmail = email.trim().toLowerCase();
      const nextUser = {
        name: normalizedEmail.split('@')[0] || 'Usuário',
        email: normalizedEmail,
      };
      persistUser(nextUser);
      return true;
    },
    register: (name: string, email: string, _password: string) => {
      const nextUser = { name: name.trim(), email: email.trim().toLowerCase() };
      persistUser(nextUser);
      return true;
    },
    logout: () => persistUser(null),
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}
