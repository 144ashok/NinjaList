import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="log">
        <h1>Ninja List</h1>
      </div>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
      <Link href="/ninjas">Ninjas</Link>
      <Link href="/ninjas/test">Ninjas Test</Link>
    </nav>
  );
};

export default Navbar;
