import { connectDB } from "../../utils/db";
import Document from "../../utils/models/documet";
import { isAuth } from "../../utils/helpers/jwt";

export async function POST(req: any) {
  try {
    await connectDB();
    const user: any = await isAuth(req);
    const { frontid, backid, photo } = await req.json();

    const newDoc = await Document.create({
      user: user._id,
      frontid,
      backid,
      photo,
    });

    return new Response(JSON.stringify(newDoc), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
