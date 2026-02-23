import Devider from "../components/Devider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Category from "../components/portfolio/Category";
import Header from "../components/portfolio/Header";
import Projects from "../components/portfolio/Projects";

function page() {
  return (
    <>
      <Navbar />
      <Header />
      <Devider />
      <Category />
      <Projects />
      <Devider />
      <Footer />
    </>
  );
}

export default page;
