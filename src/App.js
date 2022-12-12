import { Routes, Route } from "react-router-dom/dist";

import Home from "./Routes/Home/Home.component";
import Autentication from "./components/Authentication/Authentication.component";
import Shop from "./Routes/Shop/Shop.component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth" element={<Autentication />} />
    </Routes>
  );
}

export default App;
