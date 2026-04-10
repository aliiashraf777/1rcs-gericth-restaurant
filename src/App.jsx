import './App.css'
 
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../Container';

import { Navbar } from '../Components';

function App() { 

  return (
    <div className='app_wrapper'>

      <Navbar />

      <Header />

      <AboutUs />

      <SpecialMenu />

      <Chef />

      <Intro />

      <Laurels />

      <Gallery />

      <FindUs />

      <Footer />

    </div>
  )
}

export default App
