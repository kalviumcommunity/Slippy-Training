import { userCollection, GetData } from "~/server/utils/firebase";
import { decodeCookie } from "~/server/controllers/decodeJWT";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const KEY = config.key;
  let token;
  const body = await readBody(event);

  const { email, password } = body;

  const document = await userCollection.doc(email).get();

  if (!document.exists) {
    return {
      message: "User Not Found!",
    };
  }

  let user = GetData(document);

  if (user.password) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      token = jwt.sign(
        {
          email: email,
          name: user.username,
          _id: user.id,
        },
        KEY
      );
    } else {
      return { message: "Check you email or password", token: null };
    }
  }
  let data = await decodeCookie(token);
  return {
    message: "loggedIn",
    token: token,
    status: 200,
    data: data,
  };
});
