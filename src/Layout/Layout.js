import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="font-openSans min-h-screen mx-auto grid gap-6 grid-rows-layout">
      {/* Header */}
      <Header />

      {/* main with sidebar */}
      <main className="w-11/12 mx-auto grid gap-6 grid-cols-1 md:grid-cols-main  grid-rows-main md:grid-rows-none">
        {/* Sidebar */}
        <SideBar />

        {/* Main Section */}
        <section className="border border-gray-100 rounded-xl py-2">
          {props.children}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
