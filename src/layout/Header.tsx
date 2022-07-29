import type { VFC } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Root" },
  { href: "/about", label: "About" },
  { href: "/twitter", label: "Twitter" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <div>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="text-red-500">
              <a className="inline-block p-4">{label}</a>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
