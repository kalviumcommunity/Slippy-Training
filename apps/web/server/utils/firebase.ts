import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const config = useRuntimeConfig()
export const app = initializeApp({
  credential: cert({
    projectId: config.projectId,
    clientEmail: config.clientEmail,
    privateKey: config.privateKey,
  }),
});
export const firestore = getFirestore();
