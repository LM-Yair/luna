import { firestore } from "/Firebase/admin";

export const getTweetByIdService = async ({id}) => {
  try {
    const doc = await firestore.collection('tweets').doc(id).get();
    const tweet = doc.data();
    return tweet;
  } catch (err) {
    console.log({err});
    throw err;
  }
}
