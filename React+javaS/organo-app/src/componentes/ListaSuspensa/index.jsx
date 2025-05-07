import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div>
            <label>{props.label}</label>
            <select>
                <option> ???</option>
            </select>
        </div>
    )
}

export default ListaSuspensa