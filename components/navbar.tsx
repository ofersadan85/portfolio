import { DarkModeToggle } from "./theme-dark-toggle";

const NavBar = () => {
  return (
    <nav className="w-full p-4">
      <ul className="flex items-center gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
