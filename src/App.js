import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {

  let { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <img id='logo' src="/logotyp.png" alt="Livsmedelsverket logotyp"></img>
          <Navbar></Navbar>
        </header>
        <main>
          <motion.div style={{y}} className='logoBackground'>
            <img width={"1400px"} src='/logga.svg' draggable={false}></img>
          </motion.div>
          <AnimatedRoutes></AnimatedRoutes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
