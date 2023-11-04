import './styles/App.css'
import BaseInfo from "./components/BaseInfo.tsx";
import WritingsInfo from "./components/WritingsInfo.tsx";
import {writingsData} from "./writingsData.ts";
function App() {
  return (
    <div className={"app-container"}>
      <BaseInfo/>
      <WritingsInfo writingsData={writingsData}/>
    </div>
  )
}

export default App
