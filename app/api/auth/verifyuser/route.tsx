import { isAuth } from "../../../utils/helpers/jwt";

export async function GET(req: any) {
  try {
    const user: any = await isAuth(req);
    if (user && user.verified) {
      return new Response(JSON.stringify(user));
    } else {
      return new Response(
        JSON.stringify({ message: "Please register yourself" }),
        {
          status: 400,
        }
      );
    }
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 400 });
  }
}
