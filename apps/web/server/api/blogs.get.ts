import { blogCollection, filterGetData } from '../utils/firebase';


export default defineEventHandler(async (event: object) => {
  // Perform the GET request
  const snapshot = await blogCollection.get();

  // Extract the data from the snapshot
  const data:any[] = [];
  snapshot.forEach((doc) => {
    data.push(filterGetData(doc));
  });


  return { status: true, data: data };
});
