let firebaseConfig = {
  apiKey: "AIzaSyB2SJA_WyvDA0Zo0AbnDeMJnW0kDPGp6iM",
  authDomain: "blogging-website-ea70c.firebaseapp.com",
  projectId: "blogging-website-ea70c",
  storageBucket: "blogging-website-ea70c.appspot.com",
  messagingSenderId: "61505881798",
  appId: "1:61505881798:web:36094474ce92e334f0f9c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();


const logoutUser = ()=>{
  auth.signOut();
  location.reload();
}