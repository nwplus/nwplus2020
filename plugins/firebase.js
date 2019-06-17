import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }
  firebase.initializeApp(config)
}
const db = firebase.firestore()
const webCollection = 'Website_content'
const WebDocument = process.env.WEBSITE_NAME
const Faq = 'Faq'

const fireDb = {
  get: async () => {
    const ref = db.collection(webCollection).doc(WebDocument)
    const data = await ref.get()
    return data.data()
  },
  getFAQ: async () => {
    const ref = db
      .collection(webCollection)
      .doc(WebDocument)
      .collection(Faq)
    return (await ref.get()).docs.map(doc => doc.data())
  }
}

export default fireDb
