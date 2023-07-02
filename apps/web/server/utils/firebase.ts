import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const config = useRuntimeConfig();
export const app = initializeApp({
  credential: cert({
    projectId: config.projectId,
    clientEmail: config.clientEmail,
    privateKey: config.privateKey,
  }),
});
export const firestore = getFirestore();

export const blogCollection = firestore.collection("blogs");

export const userCollection = firestore.collection("users");

export const filterGetData = (
  snapshot: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>
) => {
  const data = snapshot.data();

  if (!data) {
    throw createError({
      statusCode: 404,
      message: "Item Not Found!",
    });
  }
  const createdAt =
    typeof data.createdAt === "string"
      ? new Date(Date.parse(data.createdAt))
      : data.createdAt.toDate();

  if (data.updatedAt) {
    var updatedAt =
      typeof data.updatedAt === "string"
        ? new Date(Date.parse(data.updatedAt))
        : data.updatedAt.toDate();
  }
  return {
    ...data,
    id: snapshot.id,
    createdAt,
    updatedAt,
  };
};

export const GetData = (
  snapshot: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>
) => {
  const data = snapshot.data();

  if (!data) {
    throw createError({
      statusCode: 404,
      message: "Item Not Found!",
    });
  }

  return {
    username: data.username,
    password: data.password,
    id: snapshot.id,
  };
};
