const firebase = require("firebase-admin")
const fire = require("../englishguruapp-a35c4-firebase-adminsdk-m7yxq-05f3bad452.json")
const firebaseConfig = {
    credential: firebase.credential.cert(fire),
  };
   const app = firebase. initializeApp(firebaseConfig)
const storage = firebase.storage(app);
const bucket = storage.bucket('englishguruapp-a35c4.appspot.com');
const file = bucket.file("images11/Services.png")

file.delete().then(() => {
    console.log("Done ")
}).catch(err => {
    console.log(`Failed to remove photo, error: ${err}`)
});


