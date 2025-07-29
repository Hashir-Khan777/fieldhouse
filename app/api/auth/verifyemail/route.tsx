import { connectDB } from "../../../utils/db";
import User from "../../../utils/models/user";
import { generateToken, isAuth } from "../../../utils/helpers/jwt";

export async function POST(req: any) {
  try {
    await connectDB();
    const user: any = await isAuth(req);
    const { code } = await req.json();
    if (code.toString() === user.code.toString()) {
      const userVerified = await User.findOneAndUpdate(
        { _id: user._id },
        { verified: true },
        { new: true }
      );
      return new Response(
        JSON.stringify({
          data: userVerified._doc,
          token: generateToken(userVerified._doc, "30d"),
        })
      );
    }
    return new Response(JSON.stringify({message: "Invalid Code"}), { status: 400 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
