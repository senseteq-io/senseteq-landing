import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../configs/firebase'

const app = initializeApp(firebaseConfig, 'mvp-calculator')

export default app
