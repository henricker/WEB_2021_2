import envJson from '../.env.json';

export const env = {
  firebase: {
    apiKey: envJson.FIREBASE.FIREBASE_API_KEY,
    authDomain:envJson.FIREBASE.FIREBASE_AUTH_DOMAIN,
    projectId:envJson.FIREBASE.FIREBASE_PROJECT_ID,
    storageBucket:envJson.FIREBASE.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:envJson.FIREBASE.FIREBASE_MESSAGING_SENDER_ID,
    appId:envJson.FIREBASE.FIREBASE_APP_ID,
  }
}

console.log(env)