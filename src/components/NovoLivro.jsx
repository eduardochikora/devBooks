import Input from './Input'
import StylesNewBook from './styles/NovoLivro.module.css'

const NovoLivro = ({ closeModal, nameRef, authorRef, genderRef, txtSituation, btnSaveBook }) => {

    return (
        <div className={StylesNewBook.containerModal}>
            <div className={StylesNewBook.containerNewBook}>
                <button className={StylesNewBook.btnClose} onClick={closeModal}>
                    <i className="fa-solid fa-x"></i>
                </button>
                <h3>Novo Livro</h3>
                <Input label='Nome:' placeholder='Insira o nome do livro' value={nameRef}/>
                <Input label='Autor:' placeholder='Insira o nome do autor do livro' value={authorRef}/>
                <Input label='Gênero:' placeholder='Insira o gênero do livro' value={genderRef}/>
                <p>Situação: {txtSituation}</p>
                <button className={StylesNewBook.btnSave} onClick={btnSaveBook}>
                    <i className="fa-solid fa-bookmark"></i> Salvar
                </button>
            </div>
        </div>
    )
}

export default NovoLivro