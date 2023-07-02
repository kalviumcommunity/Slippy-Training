import { userCollection } from "~/server/utils/firebase";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const KEY = config.key
    let token
  const body = await readBody(event);

  const {email, password } = body;

  const document = await userCollection.doc(email).get()

  if (!document.exists) {
    throw createError({
      statusCode: 404,
      message: "User Not Found!",
    });
  }

  let user = filterGetData(document)
  if(user.password){
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(isPasswordValid){
         token = jwt.sign({
            email: email,
            name: user.username,
            _id:user.id,
            
          }, KEY);
    }
    else{
        return {message:'Check you email or password', token: null}
    }
  }
   


  return  {message:'Logged IN ', token: token};

});
