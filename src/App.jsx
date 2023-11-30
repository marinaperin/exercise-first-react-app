import "./App.css";
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <section>
        <Header
          src="src/assets/react.svg"
          alt="React logo"
          title="React Shop"
        />
        <nav>
          <Sidebar links={[{text: "Home", href: "/home"}, {text: "About", href: "/about"}, {text: "Contacts", href: "/contacts"}]}/>
        </nav>
      </section>
      <section>
        <Main />
        <div className="more-div">
          <p className="more">More to be added...</p>
        </div>
        <Footer year="2023" author="Marina Perin" />
      </section>
    </>
  );
};

export default App;
