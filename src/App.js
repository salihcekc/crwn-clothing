import { Routes, Route } from "react-router-dom/dist";

import Home from "./components/Routes/Home/Home.component";
import Autentication from "./components/Authentication/Authentication.component";

const Shop = () => {
  return <h1>Here is shop page</h1>;
};

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
