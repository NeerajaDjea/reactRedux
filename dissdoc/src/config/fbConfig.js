import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyDFrX_vBETWM2sGyBGbpAhDuj2EoGI3RWc",
    authDomain: "dissdoc-2b298.firebaseapp.com",
    databaseURL: "https://dissdoc-2b298.firebaseio.com",
    projectId: "dissdoc-2b298",
    storageBucket: "dissdoc-2b298.appspot.com",
    messagingSenderId: "853193109943",
    appId: "1:853193109943:web:13cfc45f3d4c81e5af7832",
    measurementId: "G-9F5KCG7YQS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;