import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CurriculumPage from './Pages/CurriculumPage'
import AboutMePage from './Pages/AboutMePage';
import ProjectsPage from './Pages/ProjectsPage';
import HobbiesPage from './Pages/HobbiesPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
          <Header />

          <Switch>

            <Route path='/home' component={HomePage} /> 
            <Route path='/projetos' component={ProjectsPage} /> 
            <Route path='/cv' component={CurriculumPage} /> 
            <Route path='/hobbies' component={HobbiesPage} /> 
            <Route path='/aboutme' component={AboutMePage} /> 

          </Switch>
    
        </div>
    </Router>
  );
}

export default App;
