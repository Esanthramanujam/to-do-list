import { lazy, Suspense } from 'react'
import './App.css'

const Home = lazy(() => import('./pages/home'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  )
}

export default App
