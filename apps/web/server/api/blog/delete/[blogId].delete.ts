import { blogCollection } from '../../../utils/firebase';

import { verifyOnwe } from '~/server/controllers/verifyOnwer';

export default defineEventHandler(async (event) => {
  const { headers } = event.node.req
  const { blogId } = event.context.params!

  const document = blogCollection.doc(blogId)

  const verify = await verifyOnwer(headers, blogId)
  if (verify !== 'ok') {
    return verify
  }
  return document.delete().then(() => {
    return { success: true, message: 'Blog Deleted!' }
  }).catch((error) => {
    throw createError({
      statusCode: 404,
      message: 'Failed to Delete blog: ' + error.message
    });
  });
})
