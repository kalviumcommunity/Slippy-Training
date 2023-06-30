import { firestore } from '../utils/firebase';



export default defineEventHandler(async (event) => { 
    const config = useRuntimeConfig()
    console.log("config",config);
    const ref = firestore.doc(`testdb/testdb`);
    const snapshot = await ref.get();
    const data = snapshot.data();
    console.log("config",config);
    
    return data;
})