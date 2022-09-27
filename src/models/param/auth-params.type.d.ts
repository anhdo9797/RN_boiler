export type LoginParams = {
  email: string;
  password: string;
};
export type RegisterPrams = LoginParams & {
  confirmPassword: string;
};
