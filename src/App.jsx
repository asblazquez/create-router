import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Router } from './Router'

function App() {

  const routes = [
    {
      path: '/',
      Component: HomePage
    },
    {
      path: '/about',
      Component: AboutPage
    },
    {
      path: '/search/:query',
      Component: SearchPage
    }
  ]


  return (
    <main>
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}

export default App
