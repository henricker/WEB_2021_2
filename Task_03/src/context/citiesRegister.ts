import { createContext } from 'react';
const CitiesRegister = createContext<{name: string, imageUrl: string}[]>([]);
export default CitiesRegister;