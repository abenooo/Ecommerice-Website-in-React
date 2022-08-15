// import "./App.css";
import "./common/header/Header.css";
import "./App.css";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./common/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact>
            <About />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
