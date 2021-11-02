import { Header} from "./Component/Header"
import HomeScreen from "./Component/HomeScreen";
import Registar from "./Component/Registar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
   <Router>
     <Header /> 
    <Switch> 
     <Route path="/" exact component= {HomeScreen} />
     <Route path="/Registar" exact component= { Registar} />
   </Switch>
   </Router>
  );
}

export default App;
