/**
 * Created by Anonmous on 2/27/2017.
 */
import firebase from 'firebase';

try{
    const firebaseConfig = {
        apiKey: "AIzaSyDNP0g6BGH0GGRqYustsfHIJCigjDWb4uE",
        authDomain: "crime-reporter-app.firebaseapp.com",
        databaseURL: "https://crime-reporter-app.firebaseio.com",
        storageBucket: "crime-reporter-app.appspot.com",
        messagingSenderId: "372478517020"
    };

   var firebaseApp = firebase.initializeApp(firebaseConfig);
}catch (e){

}


export default firebase;
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();