import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
     apiKey: "AIzaSyBJ60t4LYpEIBnEqj7pdTirHnKxg1eNI58",
  authDomain: "testpj-99b20.firebaseapp.com",
  projectId: "testpj-99b20",
  storageBucket: "testpj-99b20.appspot.com",
  messagingSenderId: "1056953696835",
  appId: "1:1056953696835:web:c9f282529477652a21caf6",
  measurementId: "G-HTPTTE1YYW"
    }
  )
}
  
export default firebase