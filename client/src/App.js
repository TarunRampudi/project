import React, { useEffect, useRef ,useState} from 'react';
import './App.css';
import video from './images/video.mp4'
import Register from './components/Register';
import Login from './components/Login';
import Homepage from  './components/mainpage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
function Home() {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    video.play();

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);
  return (
    <div className='video-container'>
      <video ref={videoRef} autoPlay muted>
      <source src={video} type="video/mp4" />
    </video>
    {videoEnded && <Link to="/register" className="button">Foodies</Link>}
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LoginForm" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
