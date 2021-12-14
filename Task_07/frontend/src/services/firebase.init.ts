import firebase from 'firebase/app';
import 'firebase/firestore';
import { env } from '../config/env';

export class Firebase {
  constructor() {
    firebase.initializeApp(env.firebase);
  }

  getFirestore() {
    return firebase.firestore();
  }
}