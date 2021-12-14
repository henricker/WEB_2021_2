import { createContext } from 'react';
import { Firebase } from '../services/firebase.init';
export const FirebaseContext = createContext<Firebase>(null as any);

 