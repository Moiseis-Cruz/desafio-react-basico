import './button.css'

function sayAlert() {
    alert("A label desse botão é 'Clique aqui!'")
}

const Button = ({label}) => {
    return (
        <button className="btn" onClick={sayAlert}>{label}</button>
    )
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button