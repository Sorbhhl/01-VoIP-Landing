import './App.css'
import { AppHeader } from './components/AppHeader'
import Portada from './components/AppPortada'
import ContentPrices from './components/ContentPrices'
import { FooterWithLogo } from './components/AppFooter'
import FormContainer from './components/FormContainer'
import ClientsLogos from './components/ClientsLogos'
import AppDetails from './components/AppDetails'

function App() {

  return (
    <>
      <AppHeader/>
      <Portada/>
      <ClientsLogos/>
      <AppDetails/>
      <ContentPrices/>
      <FormContainer/>
      <FooterWithLogo/>
    </>
  )
}

export default App
