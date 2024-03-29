//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About";
import Products from "./components/Products/Products";
import Distributors from "./components/Distributors/Distributors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import NotFound from "./components/NotFound";
import Product from "./components/Products/Product";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/admin/Login";
 import{ emailjs, init } from 'emailjs-com';
// import admin from "./components/admin/Admin";

function App() {
  return (<>

    <div>
      <HashRouter>
        <Header />
        <Helmet>
          <title>Haakaa Israel</title>
          <meta name="Haakaa Israel" content="Haakaa Israel" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/#about" component={About} />
          <Route exact path="/#distributors" component={Distributors} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/admin" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
    </>
  );
}

export default App;
