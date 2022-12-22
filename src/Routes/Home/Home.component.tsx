import Directory from "../../components/Directory/Directory.component";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
