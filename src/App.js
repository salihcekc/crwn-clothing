import { Routes, Route } from "react-router-dom/dist";

import Home from "./components/Routes/Home/Home.component";
import SignIn from "./components/SignIn/SignIn.component";

const Shop = () => {
  return <h1>Here is shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
