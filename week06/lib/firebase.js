// we have to load the firebase-admin package in order to interact with our firebase project
import admin from "firebase-admin";

// to get ready to send an authentication request to frebase, we load the JSON
// we load the JSON string and convert it to JSON object instead of loading a file
// why? because it is more secure than saving our creds in a JSON file in our project.
const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_WEEK06_FIREBASE_DATABASE_PRIVATE_KEY
);

// lets wrap all of our code that tries to talk to firebase in a try{}
try{
  admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_URL
    }
  );
} catch(err){
// if error happens...
console.log("firebase err", err.stack)
}

export default admin.firestore();