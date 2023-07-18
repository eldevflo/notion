export interface User {
  username: string;
  email: string;
  id: string;
}
export interface UserResponseType {
  data: {
    token: string;
    user: User;
  };
}
