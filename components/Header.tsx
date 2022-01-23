import Link from "next/link";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img src="/logo/header_logo.jpg" alt="" />
        </Link>
      </div>

      <div></div>
    </header>
  );
}

export default Header;
