import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./views/User";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => <User {...props} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
