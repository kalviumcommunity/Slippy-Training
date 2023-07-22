import { blogCollection, filterGetData } from '../utils/firebase';
import { checkAuth } from "../controllers/authoriseJWT";
import { decodeCookie } from "~/server/controllers/decodeJWT";

export default defineEventHandler(async (event) => {
  const { headers } = event.node.req;

  // Perform the GET request
  const token = headers.authorization;
  const responceAuth = await checkAuth(headers);

  if (responceAuth?.statusCode === 401 || responceAuth?.statusCode === 404)
    return responceAuth;

  const userDetails = await decodeCookie(token);
  const snapshot = await blogCollection
    .where("userEmail", "==", userDetails.email)
    .select('id', 'createdAt', 'title', 'authorName', 'isPublished')
    .get();

  // Extract the data from the snapshot and filter unpublished posts
  const data:any[] = [];
  snapshot.forEach((doc) => {
    const post = filterGetData(doc);
    
      data.push(post);
    
  });

  // Sort the data based on the isPublished field (converted to numeric)
  data.sort((a, b) => a.isPublished - b.isPublished);

  console.log(data);

  return data;
});
