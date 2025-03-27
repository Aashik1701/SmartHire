import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

function SignInwithGoogle() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  async function googleLogin() {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      const result = await signInWithGoogle();
      
      if (result?.user) {
        // Using try-catch specifically for Firestore operation
        try {
          await setDoc(doc(db, "Users", result.user.uid), {
            email: result.user.email,
            firstName: result.user.displayName || "SmartHire User",
            photo: result.user.photoURL || "",
            lastName: "",
            lastLogin: new Date().toISOString()
          }, { merge: true }); // Add merge option to prevent overwriting
          
          toast.success("Successfully signed in!");
          navigate('/profile');
        } catch (firestoreError) {
          console.error("Firestore error:", firestoreError);
          // Still consider the login successful even if profile update fails
          navigate('/profile');
        }
      }
    } catch (error: any) {
      console.error("Google sign-in error:", error);
      // Only show error toast if it's not a popup closed by user error
      if (error.code !== 'auth/popup-closed-by-user') {
        toast.error("Sign in failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="pt-1">
      <p className="text-center text-white align-middle continue-p">--Or continue with--</p>
      
      <div className="flex justify-center mt-2">
        <button
          onClick={!isLoading ? googleLogin : undefined}
          disabled={isLoading}
          className="flex items-center justify-center w-full max-w-xs gap-3 px-4 py-2.5 font-medium text-gray-800 transition-all duration-300 bg-white border rounded-lg shadow-md group hover:shadow-lg hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-gray-600 rounded-full border-t-transparent animate-spin"></div>
              <span>Connecting...</span>
            </div>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              <span>Sign in with Google</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default SignInwithGoogle;