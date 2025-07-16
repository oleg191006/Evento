"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { headerRoutes } from "@/shared/constants/routes";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-4 h-full text-sm">
          {headerRoutes.map((route) => {
            return (
              <li
                key={route.path}
                className={clsx(
                  "hover:text-white flex items-center relative transition",
                  {
                    "text-white": pathname === route.path,
                    "text-white/50": pathname !== route.path,
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
                {pathname === route.path && (
                  <motion.div
                    layoutId="header-active-link"
                    className="bg-accent h-1 w-full absolute bottom-0"
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
