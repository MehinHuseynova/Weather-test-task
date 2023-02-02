import WeatherSearchProvider from 'contexts/weatherSearchContext'
import { AppLayout } from 'views/app/layout/appLayout'
import './App.style.tsx'

function App() {
  return (
    <WeatherSearchProvider>
      <AppLayout />
    </WeatherSearchProvider>
  )
}

export default App
