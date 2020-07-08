import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: 'G-HVDSYY5XNS'
  }
  firebase.initializeApp(config)
}
const db = firebase.firestore()
const storage = firebase.storage()
const webCollection = 'Website_content'
const WebDocument = process.env.WEBSITE_NAME

const fireDb = {
  get: async (collection = WebDocument) => {
    if (collection === WebDocument) {
      const ref = db.collection(webCollection).doc(WebDocument)
      const data = await ref.get()
      return data.data()
    }
    const ref = db
      .collection(webCollection)
      .doc(WebDocument)
      .collection(collection)
    return (await ref.get()).docs.map(doc => doc.data())
  },
  getImageUrl: async (imageref) => {
    const image = storage.ref(`${WebDocument}/${imageref}`)
    const url = await image.getDownloadURL()
    return url
  }
}

export default fireDb
