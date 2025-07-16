import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/events/all">All events</Link>
    </header>
  );
};

export default Header;
