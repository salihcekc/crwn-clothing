import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom/dist";

import Home from "./Routes/Home/Home.component";
import Autentication from "./components/Authentication/Authentication.component";
import Shop from "./Routes/Shop/Shop.component";
import Checkout from "./Routes/Checkout/Checkout.component";
import { setCurrentUser } from "./store/user/user.action";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/Firebase.utils";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="shop/*" element={<Shop />} />
      <Route path="auth" element={<Autentication />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
