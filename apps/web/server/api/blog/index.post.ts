import { blogCollection } from '../../utils/firebase';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    

    const blog = blogCollection.doc();
    const data: {} = {
        id: blog.id,
        ...body,
        
    };


    return blog
        .create(data)
        .then(() => {
            return { status: true, data: data };
        })
        .catch((error) => {
            throw new Error('Failed to create blog: ' + error.message);
        });
});