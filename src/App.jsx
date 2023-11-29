import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <section>
      <Header
        src="src/assets/react.svg"
        alt="React logo"
        title="React Shop"
      />
      <aside>
        <Sidebar li1="Home" li2="About" li3='Contact Us'/>
      </aside>
    </section>
    <section>
      <Main/>
      <div className="more-div">
        <p className="more">More to be added...</p>
      </div>
      <Footer year='2023' author='Marina Perin'/>
    </section>
    </>
  );
};

export default App;
