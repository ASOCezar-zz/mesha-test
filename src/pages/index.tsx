import type { NextPage } from "next";
import Footer from "../components/Footer";

import Header from "../components/Header";
import MainContent from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <>
      <Header source="/favorites" target="favorites" />
      <MainContent />
      <Footer />
    </>
  );
};

export default Home;
