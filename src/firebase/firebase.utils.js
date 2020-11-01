import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBO0N6mJR96X8hQZ236CZlb8wrXZzBHtII",
    authDomain: "shop-aleara.firebaseapp.com",
    databaseURL: "https://shop-aleara.firebaseio.com",
    projectId: "shop-aleara",
    storageBucket: "shop-aleara.appspot.com",
    messagingSenderId: "854561875722",
    appId: "1:854561875722:web:9afa05b87174696916bcf3",
    measurementId: "G-WHVBPG38MN"
  };


firebase.initializeApp(firebaseConfig);

export const defaultAuth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});

// TODO: [YD] What about error handling here
export const signInWithGoogle = () => defaultAuth.signInWithPopup(provider).then(result=>{
    // console.log(result)
}).catch(err=>{
    // console.log('Error')
    console.log(err);
});

export default firebase;

  


