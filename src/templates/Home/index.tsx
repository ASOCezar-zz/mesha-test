import * as Styled from "./styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";

export const Home = () => {
  return (
    <Styled.Container>
      <Header source="/favorites" target="favorites" />
      <MainContent />
      <Footer />
    </Styled.Container>
  );
};
