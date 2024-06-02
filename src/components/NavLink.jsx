const NavLink = ({ href, children }) => {
  return (
    <>
      <a className="font-medium uppercase text-white/90" href={href}>
        {children}
      </a>
    </>
  );
};
export default NavLink;
