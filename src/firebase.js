// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  setPersistence,
  browserSessionPersistence 
} from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK84xNF4pB9hTiDDWt_H_AQ652rpMNT1Y",
  authDomain: "smarthire-98086.firebaseapp.com",
  projectId: "smarthire-98086",
  storageBucket: "smarthire-98086.firebasestorage.app",
  messagingSenderId: "52013578596",
  appId: "1:52013578596:web:bb74aa3dec3414f6c9a271",
  measurementId: "G-5LN8M1JRK3"
};

// Initialize Firebase with CSP-compliant options
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Set session persistence with CSP-compliant configuration
setPersistence(auth, browserSessionPersistence, {
  // Avoid using eval or Function constructors
  experimentalForceOwnership: true
})
  .catch((error) => {
    console.error("Auth persistence error:", error);
  });

// Create a function to handle Google authentication with better error handling
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    
    // Use signInWithRedirect instead of signInWithPopup for better compatibility
    // with third-party cookie restrictions
    await signInWithRedirect(auth, provider);
    
    return { success: true };
  } catch (error) {
    console.error("Google auth error:", error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

// Export both names for backward compatibility
export const handleGoogleSignIn = signInWithGoogle;

export default app;