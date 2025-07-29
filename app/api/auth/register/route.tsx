import { connectDB } from "../../../utils/db";
import User from "../../../utils/models/user";
import { bcryptPassword } from "../../../utils/helpers/bcrypt";
import { generateToken } from "../../../utils/helpers/jwt";
import { sendMail } from "../../../utils/helpers/mailer";

export async function POST(req: any) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();

    const existing = await User.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const hashed = await bcryptPassword(password);
    const newUser = await User.create({ username, email, password: hashed });
    const code = Math.round(100000 + Math.random() * 999999).toString();

    const token = generateToken(
      { ...newUser._doc, code: code.slice(0, 6) },
      "1h"
    );
    await sendMail(
      email,
      "Verification Code",
      `Your verification code is ${code.slice(0, 6)}`
    );

    return new Response(JSON.stringify({ ...newUser?._doc, token }));
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
