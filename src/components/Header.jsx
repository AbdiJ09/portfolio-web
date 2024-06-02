import Logo from "./Logo";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-5 py-7 text-white">
        <nav className="flex w-full items-center justify-between">
          <Logo />
          <ul className="flex items-center justify-center gap-10">
            <li>
              <NavLink href="#about">About</NavLink>
            </li>
            <li>
              <NavLink href="#projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="#contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      ;
    </>
  );
};

export default Header;
