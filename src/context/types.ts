export interface LoginDataType {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: {
    name: string;
    email: string;
    userName: string;
    role: string;
  } | null;
  token: string;
  login: (data: LoginDataType) => void;
  logout: () => void;
}
