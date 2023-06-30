import { blogCollection } from '../../utils/firebase';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);


    const blog = blogCollection.doc();
    const data: {} = {
        id: blog.id,
        ...body,
        createdAt:new Date()

    };


    return blog
        .create(data)
        .then(() => {
            return { status: true, data: data };
        })
        .catch((error) => {
            throw createError({
                statusCode: 404,
                message: 'Failed to create blog: ' + error.message
            });
        });
});