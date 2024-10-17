import StylesLivro from './styles/Livro.module.css'

const Livro = ({ name, author, gender, btnRemove }) => {

    return (
        <div className={StylesLivro.containerBook}>
            <h3>{name}</h3>
            <br/>
            <div className={StylesLivro.description}>
                <div className={StylesLivro.author}>
                    <label>Autor:</label>
                    <p>{author}</p>
                </div>
                <div className={StylesLivro.gender}>
                    <label>Gênero:</label>
                    <p>{gender}</p>
                </div>
            </div>
            <div className={StylesLivro.containerOptions}>
                <button className={StylesLivro.btnDelete} onClick={btnRemove}> 
                    <i className="fa-solid fa-trash"></i> Excluir
                </button>
            </div>
        </div>
    )

}

export default Livro