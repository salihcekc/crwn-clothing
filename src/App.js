import { Routes, Route } from "react-router-dom/dist";

import Home from "./Routes/Home/Home.component";
import Autentication from "./components/Authentication/Authentication.component";
import Shop from "./Routes/Shop/Shop.component";
import Checkout from "./Routes/Checkout/Checkout.component";

function App() {
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
