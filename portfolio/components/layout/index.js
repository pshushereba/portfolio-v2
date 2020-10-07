import Header from "../layout/Header.js";
import Footer from "../layout/Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-bg-gray-custom">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
