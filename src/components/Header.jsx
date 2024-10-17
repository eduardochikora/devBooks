import Logo from './img/logo.svg'
import './styles/Header.module.css'

const Header = () => {

  return (
    <header>
      <img src={Logo} alt='Logo-devBooks'/>
      <h1>devBooks</h1>
    </header>

  )
}

export default Header
