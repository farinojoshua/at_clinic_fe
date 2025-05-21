import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-red-500">
        <h1>Ini Navbar</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>

      </div>
    </>
  );
}
