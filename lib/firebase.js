import firebase from 'firebase/app'
import 'firebase/auth' // importando todas as funcoes do firebase que inclue o GithubAuthProvider

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase;