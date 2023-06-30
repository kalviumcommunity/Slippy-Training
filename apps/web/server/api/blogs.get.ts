import { blogCollection } from '../utils/firebase';

export default defineEventHandler(async (event: object) => {
  // Perform the GET request
  const snapshot = await blogCollection.get();

  // Extract the data from the snapshot
  const data: { id: string, [key: string]: any }[] = [];
  snapshot.forEach((doc: FirebaseFirestore.DocumentData) => {
    data.push({ id: doc.id, ...doc.data() });
  });


  return { status: true, data: data };
});
