import { connectDB } from "../../../utils/db";
import Stream from "../../../utils/models/stream";

export async function GET(req: any, {params}: any) {
  try {
    await connectDB();
    const {id} = await params;
    const stream = await Stream.findOne({_id: id}).populate("streamer");

    return new Response(JSON.stringify(stream));
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}

export async function PUT(req: any, {params}: any) {
  try {
    await connectDB();
    const {id} = await params;
    const {joinee} = await req.json();
    const stream = await Stream.findOneAndUpdate({_id: id}, {$push: {joinees: joinee}}, {new: true}).populate("streamer");

    return new Response(JSON.stringify(stream));
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
