import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='pt-10 bg-white min-h-screen'>{children}</div>
    </>
  );
}
