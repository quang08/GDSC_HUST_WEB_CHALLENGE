import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shortener from "./components/Shortener";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Header />
        <Showcase />
        <Shortener/>
        <Advanced/>
        <Boost />
        <Footer />
      </div>
    </div>
  );
}

export default App;
