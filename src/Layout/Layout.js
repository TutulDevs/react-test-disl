import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="font-openSans min-h-screen w-screen mx-auto grid gap-4 grid-rows-layout">
      {/* Header */}
      <Header />

      {/* main with sidebar */}
      <main className="bg-green-300 w-11/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-main">
        <aside className="bg-indigo-200">This is Sidebar</aside>

        <section className="bg-indigo-300">{props.children}</section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
