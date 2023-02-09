import React,{ useState }from 'react';
import './App.css';
import './index.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Toast from './Components/Toast';

function App() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const toggleToast = () => {
    setIsToastVisible(!isToastVisible);
  };
  return (
    <>
      <Toast isVisible={isToastVisible}/>
      <Header/>
      <Main toggleToast={toggleToast}/>
      <Footer/>
    </>
    
  );
}

export default App;

