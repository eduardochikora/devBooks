import NovoLivro from './NovoLivro'
import Livro from './Livro'
import StylesLibrary from './styles/Biblioteca.module.css'
import { useState, useRef, useEffect } from 'react'

const Biblioteca = () => {

    const [openModal, setOpenModal] = useState(false)
    const [listReading, setListReading] = useState([])
    const [listToRead, setListToRead] = useState([])
    const [listRead, setListRead] = useState([])
    const [situation, setSituation] = useState('')
    const nameValue = useRef()
    const authorValue = useRef()
    const genderValue = useRef()
    const updateStorage = (key, book) => localStorage.setItem(key, JSON.stringify(book))

    useEffect(() => {
        const storageReading = localStorage.getItem('listReading')
        const storageToRead = localStorage.getItem('listToRead')
        const storageRead = localStorage.getItem('listRead')
        storageReading && setListReading(JSON.parse(storageReading))
        storageToRead && setListToRead(JSON.parse(storageToRead))
        storageRead && setListRead(JSON.parse(storageRead))
    }, [])

    const saveBook = () => {
        const newBook = {
            id: Math.floor(Math.random() * 1000),
            name: nameValue.current.value,
            author: authorValue.current.value,
            gender: genderValue.current.value,
        }
        if (nameValue.current.value.length && authorValue.current.value.length < 3) {
            return alert('Preencha todos os campos corretamente')
        }
        if (genderValue.current.value.length < 3) {
            return alert('Preencha todos os campos corretamente')
        }
        if (situation === 'Estou Lendo') {  
            setListReading([newBook, ...listReading])
            updateStorage('listReading', [...listReading, newBook])
        }
        if (situation === 'Quero Ler') {
            setListToRead([newBook, ...listToRead])
            updateStorage('listToRead', [...listToRead, newBook])
        }
        if (situation === 'Lido') {
            setListRead([newBook, ...listRead])
            updateStorage('listRead', [...listRead, newBook])
        }
        setOpenModal(false)  
    }

    const removeReading = id => {
        setListReading(listReading.filter((bookReading) => bookReading.id !== id))
        updateStorage('listReading', listReading.filter((bookReading) => bookReading.id !== id))
    }
    const removeToRead = id => {
        setListToRead(listToRead.filter((bookToRead) => bookToRead.id !== id))
        updateStorage('listToRead', listToRead.filter((bookToRead) => bookToRead.id !== id))
    }
    const removeRead = id => {
        setListRead(listRead.filter((bookRead) => bookRead.id !== id))
        updateStorage('listRead', listRead.filter((bookRead) => bookRead.id !== id))
    }


    return (
        <div>
            {openModal ? <NovoLivro 
                closeModal={() => setOpenModal(false)}
                nameRef={nameValue} 
                authorRef={authorValue} 
                genderRef={genderValue}
                txtSituation={situation}
                btnSaveBook={saveBook}/> : null}
            <div className={StylesLibrary.containerLibrary}>
                <h1>Biblioteca</h1>
                <h2>Estou lendo</h2>              
                <div className={StylesLibrary.containerBooks}>
                        {listReading.map((bookReading) => (
                            <Livro key={bookReading}
                            name={bookReading.name}
                            author={bookReading.author}
                            gender={bookReading.gender}
                            btnRemove={() => removeReading(bookReading.id)}/>
                        ))}
                    <button className={StylesLibrary.btnNewBook} onClick={() => {setOpenModal(true); setSituation('Estou Lendo')}}>
                        +
                    </button>
                </div>
                <h2>Quero ler</h2>
                <div className={StylesLibrary.containerBooks}>
                        {listToRead.map((bookToRead) => (
                            <Livro key={bookToRead}
                            name={bookToRead.name}
                            author={bookToRead.author}
                            gender={bookToRead.gender}
                            btnRemove={() => removeToRead(bookToRead.id)}/>
                        ))}
                    <button className={StylesLibrary.btnNewBook} onClick={() => {setOpenModal(true); setSituation('Quero Ler')}}>
                        +
                    </button>
                </div>
                <h2>Lidos</h2>
                <div className={StylesLibrary.containerBooks}>
                        {listRead.map((bookRead) => (
                            <Livro key={bookRead}
                            name={bookRead.name}
                            author={bookRead.author}
                            gender={bookRead.gender}
                            btnRemove={() => removeRead(bookRead.id)}/>
                        ))}
                    <button className={StylesLibrary.btnNewBook} onClick={() => {setOpenModal(true); setSituation('Lido')}}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Biblioteca