import { blogCollection, filterGetData } from '../utils/firebase';


export default defineEventHandler(async (event: object) => {
  // Perform the GET request
  const snapshot = await blogCollection.where("isPublished", '==' , true).select('id', 'createdAt', 'title', 'authorName').get();

  // Extract the data from the snapshot
  const data:any[] = [];
  snapshot.forEach((doc) => {
    data.push(filterGetData(doc));
  });


  return  data 
});
