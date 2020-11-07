import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyBO0N6mJR96X8hQZ236CZlb8wrXZzBHtII",
    authDomain: "shop-aleara.firebaseapp.com",
    databaseURL: "https://shop-aleara.firebaseio.com/",
    projectId: "shop-aleara",
    storageBucket: "shop-aleara.appspot.com",
    messagingSenderId: "854561875722",
    appId: "1:854561875722:web:9afa05b87174696916bcf3",
    measurementId: "G-WHVBPG38MN"
  };


firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const defaultAuth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const signInWithGoogle = () => defaultAuth.signInWithPopup(provider);

export default firebase;

  


