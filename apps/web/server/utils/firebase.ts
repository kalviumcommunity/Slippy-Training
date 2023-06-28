import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const app = initializeApp({
  credential: cert({
    projectId: "",
    clientEmail: "",
    privateKey: "",
  }),
});
export const firestore = getFirestore();
