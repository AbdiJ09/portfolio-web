import Header from "./components/Header";
const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden bg-black">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
