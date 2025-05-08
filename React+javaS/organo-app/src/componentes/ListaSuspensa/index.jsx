import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div>
            <label>{props.label}</label>
            <select>
                <option> oi oi oi banana </option>
            </select>
        </div>
    )
}

export default ListaSuspensa