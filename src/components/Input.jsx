import StylesInput from './styles/Input.module.css'

const Input = ({ label, placeholder, value }) => {

    return (
        <div className={StylesInput.containerInput}>
            <label>{label}</label>
            <input type="text" placeholder={placeholder} ref={value}/>
        </div>
    )
}

export default Input

