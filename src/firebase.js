import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBShFdUUnHBC0gFe7pChcTM7vKM9ff8_00",
  authDomain: "burger-queen---hooks.firebaseapp.com",
  projectId: "burger-queen---hooks",
});

let db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true });
export default db;
