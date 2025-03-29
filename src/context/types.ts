export interface LoginDataType {
  data: {
    name: string;
    email: string;
    role: string;
  };
  token: string;
  message?: string;
}

export interface ProviderProps {
  // user: {
  //   name: string;
  //   email: string;
  //   role: string;
  // } | null;
  user: string | null;
  token: string;
  login: (data: LoginDataType) => void;
  logout: () => void;
}
