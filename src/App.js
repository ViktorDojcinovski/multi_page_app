import { Switch, Route } from "react-router-dom";

import About from "./pages/About/About.component";
import Contact from "./pages/Contact/Contact.component";
import "./App.css";

function App() {
  // <Routes />
  return (
    <Switch>
      <Route component={About} path="/about" />
      <Route component={Contact} path="/contact" />
    </Switch>
  );
}

export default App;
