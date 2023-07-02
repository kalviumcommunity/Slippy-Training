
import { userCollection } from "~/server/utils/firebase";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const KEY = config.key
    const body = await readBody(event);

    const { email, password, username } = body
    //   const userCollection = firestore.collection(`users/${email}`)


    const document = userCollection.doc(email)

    const hashedpassword = await bcrypt.hash(password, 10);

    const data: {} = {
        id: document.id,
        email,
        username,
        password: hashedpassword,
        createdAt: new Date()
    };



    return document
        .create(data).then(() => {
            const token = jwt.sign({
                email: email,
                name: username,
                _id: document.id,

            }, KEY);

            return { message: 'user Signed Up', token: token }

        }).catch((error) => {
            throw createError({
                statusCode: 404,
                message: error
            })
        })


});
