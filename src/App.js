import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Header />
        <Advanced/>
        <Boost />
        <Footer />
      </div>
    </div>
  );
}

export default App;
