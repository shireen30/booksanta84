import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    

    apiKey: "AIzaSyAe2wpUR6tnrezzS_Aift6ayihnfNiq5pU",
    authDomain: "booksanta-d6193.firebaseapp.com",
    projectId: "booksanta-d6193",
    databaseURL: "https://book-santa-d6193.firebaseio.com",
    storageBucket: "booksanta-d6193.appspot.com",
    messagingSenderId: "471918454058",
    measurementId: "G-FX0D6BZ060",
    appId: "1:471918454058:web:6e1bd945974b953dd5aa53"
  };
  // Initialize Firebase
  if(firebase.app.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();