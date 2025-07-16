import Link from "next/link";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/events/all">All events</Link>
    </header>
  );
};

export default Header;
