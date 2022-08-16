import { initializeApp } from 'firebase/app'
import { firebaseConfig, firebaseConfigDev } from '../../__constants__'

const app = initializeApp(firebaseConfig)
export const appDev = initializeApp(firebaseConfigDev, 'dev')

export default app
