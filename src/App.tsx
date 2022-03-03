import { AboutTopis } from './components/AboutTopics';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';

import './styles/Global.scss';
import { ThirdTopics } from './components/ThirdTopics';

function App() {

  return (
   <>
    <Navbar />
    <Carousel />
    <AboutTopis />
    <ThirdTopics />
   </>
  )
}

export default App
