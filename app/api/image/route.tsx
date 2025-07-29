
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: any) {
  try {
    const { image, folder } = await req.json();
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

    if (!image) {
      return new Response(JSON.stringify({ error: "No image provided" }), { status: 400 });
    }

    const result = await cloudinary.uploader.upload(image, {
      folder: folder,
    });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err: any) {
    console.log(err)
    return new Response(JSON.stringify(err), { status: 500 });
  }
}