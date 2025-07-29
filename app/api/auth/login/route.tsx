import { connectDB } from "../../../utils/db";
import User from "../../../utils/models/user";
import { comparePassword } from "../../../utils/helpers/bcrypt";
import { generateToken } from "../../../utils/helpers/jwt";

export async function POST(req: any) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({
      email: email.toLowerCase(),
      verified: true,
    });

    if (user) {
      const isPasswordCorrect = await comparePassword(password, user.password);
      if (isPasswordCorrect) {
        return new Response(
          JSON.stringify({
            data: user._doc,
            token: generateToken(user._doc, "30d"),
          })
        );
      }
      return new Response(JSON.stringify({ message: "Incorrect password" }), {
        status: 400,
      });
    }
    return new Response(
      JSON.stringify({ message: "Please register yourself" }),
      { status: 400 }
    );
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
