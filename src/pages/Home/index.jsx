import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./partials/Hero";
import FeaturesPosts from "./partials/FeaturesPosts";
import Team from "./partials/Team";
import BlogPosts from "./partials/BlogPosts";
import ContactModal from "../../components/ContactModal";

const Index = () => {
  return (
    <>
      {/* Header Main Start */}
      <Header />
      {/* Header Main End */}

      {/* ========== Main Start ========== */}
      <main id="main-sections" className="main-sections flex-grow-1">
        {/* Hero Banner Start */}
        <Hero />
        {/* Hero Banner End */}

        {/* Featured Posts Start */}
        <FeaturesPosts />
        {/* Featured Posts End */}

        {/* Team Jumbotron Start */}
        <Team />
        {/* Team Jumbotron End */}

        {/* Blog Posts Starts */}
        <BlogPosts />
        {/* Blog Posts End */}
      </main>
      {/* ========== Main End ========== */}

      {/* Footer Main Start */}
      <Footer />
      {/* Footer Main End */}

      {/* Contact Modal Start */}
      <ContactModal />
      {/* Contact Modal End */}
    </>
  );
};

export default Index;
