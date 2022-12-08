import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocref = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Here is Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
