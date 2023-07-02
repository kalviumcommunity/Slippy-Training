import { userCollection } from "~/server/utils/firebase";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const KEY = config.key;
  const body = await readBody(event);

  const { email, password, username } = body;

  const document = userCollection.doc(email);

  const hashedpassword = await bcrypt.hash(password, 10);

  const data: {} = {
    id: document.id,
    email,
    username,
    password: hashedpassword,
    createdAt: new Date(),
  };

  //> require('crypto').randomBytes(64).toString('hex')
  
  return document
    .create(data)
    .then(() => {
      const token = jwt.sign(
        {
          email: email,
          name: username,
          _id: document.id,
        },
        KEY
      );
      // console.log(token);
      return { status: 200, data: token };
    })
    .catch((error) => {
      // console.log(error);
      return { status: 400, data: error };
    });
});
