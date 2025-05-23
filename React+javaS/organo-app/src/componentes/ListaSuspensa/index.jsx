import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                    })}     {/*renderização lista simples */}
            </select>
        </div>
    )
}

export default ListaSuspensa