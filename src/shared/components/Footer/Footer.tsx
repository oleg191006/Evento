import { footerRoutes } from "@/shared/constants/routes";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small>&copy; 2025 ByteGrad. All rights reserved. </small>
      <ul className="flex gap-x-4 sm:gap-x-8">
        {footerRoutes.map((route) => {
          return (
            <li key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
