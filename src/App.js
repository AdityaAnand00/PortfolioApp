
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/homepage';
import TechStack from './components/Techstack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      <TechStack />
      <Experience/>
      <Projects/>


             
    </div>
  );
}

export default App;

// react is component based design  . since our resume will have many sections / components -> we will make all the components here in app.js file since all components are created here only . 

// portfolio all components . 
//1. nav bar 
//2. homepage
//3. tech stack
//4. experience
//5. projects

// in function 'app' we call all components , it is just like cpp main method ,  where all components/ subfunctions are called and executed. lets create all components one by one . 