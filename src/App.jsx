import './App.css'
import { lazy, Suspense } from 'react'

import { Router } from './Router'
import { Route } from './Route'

const AboutPage = lazy(() => import('./pages/About'))
const HomePage = lazy(() => import('./pages/Home'))
const Page404 = lazy(() => import('./pages/404'))
const SearchPage = lazy(() => import('./pages/Search'))

function App() {

  const routes = [
    {
      path: '/search/:query',
      Component: SearchPage
    }
  ]


  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
