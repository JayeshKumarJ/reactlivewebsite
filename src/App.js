import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';

import Router from './Router';
import { useRoutes } from "react-router";
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

//   useEffect(() => {
//     return () => {
//         alert("Theme is going to change"); 
//     };
// }, [])
  const routing= useRoutes(Router);
  const toggleTheme=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#6c757d'
    document.body.style.color="white"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    document.body.style.color="black"
  }
}
  return (
   <>
<MyNavbar mode={mode} toggleTheme={toggleTheme}/>
{routing}
</>
  );
}

export default App;
