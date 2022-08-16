import { getFirestore } from 'firebase/firestore'
import app, { appDev } from './app'

const firestore = getFirestore(app)
export const devFirestore = getFirestore(appDev)

export default firestore
