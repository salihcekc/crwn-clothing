import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/Firebase.utils";

const SignIn = () => {
  const fetchAuth = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocref = await createUserDocumentFromAuth(response.user);
    }
  };

  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <div>
      <h1>Here is Sign In page</h1>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
