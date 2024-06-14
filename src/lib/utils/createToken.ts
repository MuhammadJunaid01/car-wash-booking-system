import jwt from "jsonwebtoken";
interface ICreateToken {
  userId: string;
  role: string;
  expiresIn: string;
  secret: string;
}
const createToken = (payload: ICreateToken): string => {
  const { userId, role, expiresIn, secret } = payload;
  const token = jwt.sign({ userId, role }, secret, { expiresIn });
  return token;
};
export default createToken;
