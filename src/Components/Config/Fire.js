import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCxDMaxaJAsKx2AXhWjMhe38Wy71cT0otk",
  authDomain: "h-shop-7604d.firebaseapp.com",
  databaseURL: "https://h-shop-7604d.firebaseio.com",
  projectId: "h-shop-7604d",
  storageBucket: "h-shop-7604d.appspot.com",
  messagingSenderId: "665685799707",
  appId: "1:665685799707:web:7da5284636428af14059be",
  measurementId: "G-FNZVC6NGDS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage().ref();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { firstName, secondName, email } = user;
    try {
      await userRef.set({
        firstName,
        secondName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error)
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error creating user document", error);
  }
};
