
import './App.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MouseIcon from '@material-ui/icons/Mouse';
import {BrowserRouter as Router, Switch , Link , Route} from 'react-router-dom'
import About from './Components/About'
import Whatido from './Components/Whatido'

function App() {
  return (
    <Router>
    <div className="App">
      
      <div className="Intro">
        <h1>WELCOME!</h1>
        <p>I AM KARAN PARMAR</p>
        <p>AND THIS IS MY ONLINE PORTFOLIO</p>
      </div>
      

      
      <div className="Name">
      <Link to="/" className="links">
        Company Name
      </Link>
      </div>
      


      
      <div className="About">
        <FavoriteIcon  className="svg_icons"/>
        <Link to="/about" className="links">
          About Me
        </Link>
      </div>
      


     
      <div className="What-i-do">
      
        <MouseIcon className="svg_icons"/>
        <Link to="/whatido" className="links">
          What I Do
        </Link>
      </div>
     
    </div>


    <Switch>
      <Route path="/about" exact>
        <About />
      </Route>

      <Route path="/whatido" exact>
        <Whatido />
      </Route>

    </Switch>
    </Router>
  );
}

export default App;
