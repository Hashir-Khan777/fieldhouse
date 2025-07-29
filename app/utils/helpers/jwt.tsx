import jwt from "jsonwebtoken";
import User from "../models/user";

const generateToken = (user: any, expiresIn: any) =>
  jwt.sign({ _id: user?._id, code: user?.code }, process.env.JWT_TOKEN, {
    expiresIn,
  });

const isAuth = async (req: any) => {
  const authorization = req.headers.get("authorization");
  const token = authorization?.slice(7);

  if (!token) {
    throw new Error("Please login");
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_TOKEN as string);

    const fullUserInfo = await User.findOne({ _id: decoded._id });

    if (!fullUserInfo) {
      throw new Error("User not found");
    }

    return { ...fullUserInfo._doc, code: decoded?.code };
  } catch (err) {
    throw new Error("Invalid token");
  }
};

export { generateToken, isAuth };
