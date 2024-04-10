import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <Link href='/' className="btn btn-ghost text-xl">Next...</Link>
      <Link href='/users' className="btn btn-ghost text-xl">Users</Link>
      <Link href='/products' className="btn btn-ghost text-xl">Products</Link>
      <Link href='/admin' className="btn btn-ghost text-xl">Admin</Link>

    </div>
  );
}

export default NavBar
