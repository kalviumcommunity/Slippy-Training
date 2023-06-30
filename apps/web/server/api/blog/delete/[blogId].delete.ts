import { blogCollection } from '../../../utils/firebase';

export default defineEventHandler(async (event) => {

  const { blogId } = event.context.params!
  const document =  blogCollection.doc(blogId)
  
  return document.delete().then(()=>{
    return {success:true, message:'Blog Deleted!'}
  }).catch((error) => {
    throw createError({
        statusCode:404,
        message:'Failed to Delete blog: ' + error.message
    });
});
})
