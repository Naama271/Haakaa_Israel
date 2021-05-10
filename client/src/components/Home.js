import Video from "./Video";
import About from "./About";
import Products from "./Products/Products";
import Distributors from "./Distributors/Distributors";
import Contact from "./Contact";

function Home() {
  return (
    <div id="home">
      <Video />
      <About />
      <Products />
      <Distributors />
      <Contact />
    </div>
  );
}

export default Home;
