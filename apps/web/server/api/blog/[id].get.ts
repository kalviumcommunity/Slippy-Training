import { blogCollection, filterGetData } from '../../utils/firebase';

export default defineEventHandler(async (event) => {

  const { id } = event.context.params!
  const document = await blogCollection.doc(id).get()
  
  const a = filterGetData(document);
  
  return a
})