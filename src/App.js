import { RecoilRoot } from "recoil"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import './App.css'
const App = () => {
  return (
    <RecoilRoot> 
      <section>
         <Header />
         <List />
      </section>
    </RecoilRoot> 
  )
}

export default App