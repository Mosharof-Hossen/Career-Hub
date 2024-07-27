
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='space-y-12' >
      <div className='max-w-5xl mx-auto'>
        <Header></Header>

        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
