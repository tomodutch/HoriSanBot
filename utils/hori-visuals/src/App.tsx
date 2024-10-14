import { lazy, useEffect, useState } from 'react'
import './App.css'

type ScreenComponent = React.FC<any>

// Lazy load the components
const ImmersionTimeGraph = lazy<ScreenComponent>(() => import('./graphs/ImmersionTime'));

    
const componentMap: Record<string, React.LazyExoticComponent<ScreenComponent>|undefined> = {
  'immersionTime': ImmersionTimeGraph,
};



function App() {
  //const [path, setPath] = useState();
  const [ScreenComponent, setScreenComponent] = useState<ScreenComponent>();

  useEffect(() => {
    setTimeout(() => {
      setScreenComponent(componentMap[(window as any).path])
    }, 5);
  }, []);
  
  return (
    <div>
      {
        ScreenComponent ?
        <ScreenComponent/> : 
        <p>
          loading...
        </p>
      }
    </div>
  )
}




export default App
