import { checkAuth } from "./authoriseJWT";
import { decodeCookie } from "./decodeJWT";

export async function verifyOnwe(headers: any, blogId:string) {
    const token = headers.authorization
    const responceAuth = await checkAuth(headers);

    if (responceAuth?.statusCode === 401 || responceAuth?.statusCode === 404)
      return responceAuth;

      const blogData:any = await $fetch(`/api/blog/${blogId}`)

      const userDetails = await decodeCookie(token);

      if(blogData.userEmail !== userDetails.email){
        throw createError({
         statusCode:404,
         statusMessage:'Not the onwer of the blog!'
       })
       
       
     }else{
        return 'ok'
     }

     
}
