import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


let firebaseApp = firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
})


let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseApp)
}

export const db = app.database()
