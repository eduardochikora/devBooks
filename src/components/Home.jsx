import Book from './img/book.svg'
import StylesHome from './styles/Home.module.css'

const Home = () => {

    return (
        <div className={StylesHome.containerHome}>
            <div className={StylesHome.containerCircle}>
                <div className={StylesHome.circle}>
                    <img src={Book} alt='Book'/>
                </div>
            </div>
            <div className={StylesHome.containerTitle}>
                <h1>Bem-vindo ao <span>devBooks</span></h1>
                <p>Site para organizar e registrar suas leituras.</p>
            </div>
        </div>
    )
}

export default Home
