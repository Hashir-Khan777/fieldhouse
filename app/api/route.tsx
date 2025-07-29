export function GET(req: any) {
  //   await connectDB();
  //   const { email, password } = await req.json();

  //   const existing = await User.findOne({ email });
  //   if (existing) {
  //     return new Response(JSON.stringify({ error: "User already exists" }), {
  //       status: 400,
  //     });
  //   }

  //   const hashed = await bcryptPassword(password);
  //   const newUser = await User.create({ email, password: hashed });

  //   const token = generateToken({ id: newUser._id }, "1d");
  //   await sendMail(email, token);

  return new Response(
    JSON.stringify({ message: "User registered, check email to verify." })
  );
}
