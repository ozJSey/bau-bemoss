import firebase from 'firebase'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBZG0FyBL_7ken77zLG1I1iogOs6C0Q8I8",
    authDomain: "bemoss-e8288.firebaseapp.com",
    databaseURL: "https://bemoss-e8288.firebaseio.com",
    projectId: "bemoss-e8288",
    storageBucket: "bemoss-e8288.appspot.com",
    messagingSenderId: "865894909056",
    appId: "1:865894909056:web:9f9340309bcf401c809265",
    measurementId: "G-TVGXQ8D9ZG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Handles the sign up button press.
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    //if(password.length<4){
    //alert('please enter a password.');
    //return;

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //handle errors here.
    //var errorCode = error.code;
    // var errorMessage = error.message;
    // [START_EXCLUDE]
    //if (errorCode == 'auth/weak-password') {
    // alert('The password is too weak.');
    //  } else {
    //    alert(errorMessage);
}
//   console.log(error);
// [END_EXCLUDE]
//  });
// [END createwithemail]
//  }

//handles the sign in button press
function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    //Handle errors here

    promise.catch(e => alert(e.message));




}
//handles the sign out button press

function signOut() {

    auth.signOut();
    alert("Signed Out");

}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in
            var email = user.email;
            alert("Active User " + email);
            //Take user to a different or home page
            //is signed in
        } else {
            alert("No Active User");
            //no user is signed in
        }
    });
}