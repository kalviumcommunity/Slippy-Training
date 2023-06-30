import { firestore } from '../utils/firebase';



export default defineEventHandler(async (event) => { 
    const config = useRuntimeConfig()
    const ref = firestore.doc(`testdb/testdb`);
    const snapshot = await ref.get();
    const data = snapshot.data(); 
    return data;
})