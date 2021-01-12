import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Backsplash from './components/Backsplash/Backsplash';
import About from './screens/About/About';
import Home from './screens/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './screens/Projects/Projects';

function App() {
    return (
        <Router>
            <div className="App">
                <Backsplash />
                {/* <Navbar /> */}
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
