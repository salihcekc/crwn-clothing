import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom/dist";

import Spinner from "./components/Spinner/Spinner.component";
import { checkUserSession } from "./store/user/user.action";

import { GlobalStyle } from "./global.styles";

const Autentication = lazy(() =>
  import("./components/Authentication/Authentication.component")
);
const Checkout = lazy(() => import("./Routes/Checkout/Checkout.component"));
const Shop = lazy(() => import("./Routes/Shop/Shop.component"));
const Home = lazy(() => import("./Routes/Home/Home.component"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Autentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
