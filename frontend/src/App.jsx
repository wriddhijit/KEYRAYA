import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Signuplogin from "./pages/signuplogin";
import TermsandConditions from "./pages/Terms&Conditions";
import Privacypolicy from "./pages/Privacy_Policy";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/hamburger";
import Footer from "./Components/Footer";
import Greetings from "./Components/Greetings";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Inventory from "./pages/Inventory";
import Inventory_ from "./pages/Inventory_";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <div>
          <Navbar />
        </div>

        <Hamburger />

        {/* <Greetings isLoggedIn={false} username="User" /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Logout" element={<Logout />} />

          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/About_Us" element={<About_Us />} />
          <Route path="/Contact_Us" element={<Contact_Us />} />
          <Route path="/signuplogin" element={<Signuplogin />} />
          <Route path="/Terms&Conditions" element={<TermsandConditions />} />
          <Route path="/Privacy_Policy" element={<Privacypolicy />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Inventory_" element={<Inventory_ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
