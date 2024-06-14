export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
}
export interface ILoginUser {
  email: string;
  password: string;
}
