
import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  user: any;
  setUser: (user: any) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {}
});

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
