import { blogCollection } from "../../utils/firebase";
import { checkAuth } from "../../controllers/authoriseJWT";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { headers } = event.node.req;

  const blog = blogCollection.doc();
  const data: {} = {
    id: blog.id,
    ...body,
    createdAt: new Date(),
  };

  const responceAuth = await checkAuth(headers);

  if (responceAuth?.statusCode === 401 || responceAuth?.statusCode === 404)
    return responceAuth;

  return blog
    .create(data)
    .then(() => {
      return {
        status: true,
        data: data,
      };
    })
    .catch((error) => {
      throw createError({
        statusCode: 404,
        message: "Failed to create blog: " + error.message,
      });
    });
});
