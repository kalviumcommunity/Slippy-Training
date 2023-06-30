import { blogCollection, filterGetData } from '../../../utils/firebase';

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const { blogId } = event.context.params!

    const document =  blogCollection.doc(blogId)
    const updatedObj = {
        ...body,
        updatedAt:new Date()
    }
    return document.update(updatedObj).then(() => {
        return { success: true, message: 'Blog Updated!' }
    })
        .catch((error) => {
            throw createError({
                statusCode: 404,
                message: 'Failed to Update blog: ' + error.message
            });
        });
})