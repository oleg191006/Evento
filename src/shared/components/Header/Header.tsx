import Link from "next/link";
import Logo from "../Logo/Logo";
import { headerRoutes } from "@/shared/constants/routes";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-4 text-sm">
          {headerRoutes.map((route) => {
            return (
              <li
                key={route.path}
                className="text-white/50 hover:text-white transition"
              >
                <Link href={route.path}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
