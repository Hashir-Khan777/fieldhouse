import { connectDB } from "../../../utils/db";
import User from "../../../utils/models/user";

export async function POST(req: any) {
  try {
    await connectDB();
    const body = await req.json();
    const updatedUser = await User.findOneAndUpdate({ _id: body._id }, body, {
      new: true,
    });
    return new Response(JSON.stringify(updatedUser));
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
