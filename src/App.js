import {BrowserRouter,  Route, Routes } from 'react-router-dom';
import "./App.css"
import "./css/styles.css"
import "./css/bootstrap.css"
import Header from './Components/Header/Header'
import Alert from './Components/Alert/Alert';
import First from './Components/First/First';
import Second from './Components/Second/Second';
import Third from './Components/Third/Third';
import Fourth from './Components/Fourth/Fourth';
import Fifth from './Components/Fifth/Fifth';
import Sixth from './Components/Sixth/Sixth';
import Footer from './Components/Footer/Footer';
import Iphone from './Components/Sixth/Iphone/Iphone';
import YouTubeVideos from './Components/Sixth/YouTubeVideos/YouTubeVideos';
import Mac from "./Components/Sixth/Mac/Mac"
import FourO4 from './Components/Sixth/FourO4/FourO4';

function App() {
  return ( 
    <div>

    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/"
         element={
         <><Alert />
         <First />
         <Second />
         <Third />
         <Fourth />
         <Fifth />
         <Sixth />
         <YouTubeVideos /></>} />
         <Route path="/iphone"element={<Iphone />} /> 
         <Route path="/mac"element={ <Mac />} />    
         <Route path="*"element={ <FourO4 />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;

