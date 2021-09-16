import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="font-openSans min-h-screen w-screen mx-auto grid gap-4 grid-rows-layout">
      {/* Header */}
      <Header />

      {/* main with sidebar */}
      <main className="w-11/12 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-main md:grid-cols-mainMd grid-rows-main sm:grid-rows-none">
        {/* Sidebar */}
        <SideBar />

        {/* Main Section */}
        <section className="border rounded-xl p-4">{props.children}</section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
