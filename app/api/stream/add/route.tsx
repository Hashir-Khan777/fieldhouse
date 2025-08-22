import { connectDB } from "../../../utils/db";
import Stream from "../../../utils/models/stream";

export async function POST(req: any) {
  try {
    await connectDB();
    const body = await req.json();
    const stream = await Stream.create(body);

    return new Response(JSON.stringify(stream));
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
