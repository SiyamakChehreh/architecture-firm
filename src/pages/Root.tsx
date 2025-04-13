import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
