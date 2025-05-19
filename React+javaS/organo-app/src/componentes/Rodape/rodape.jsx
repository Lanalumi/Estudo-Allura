import "./Rodape.css"

const Rodape = () => {


    return (
        <div className="footer">
            <div className="link">
                <a src=""> <img className="icon" src="./src/assets/fb.png"/></a>
                <a src=""> <img className="icon" src="./src/assets/tw.png"/></a>
                <a src=""> <img className="icon" src="./src/assets/ig.png"/></a>
            </div>
            <div className="logo"> <img className="logo-image" src="./src/assets/logo.png"/></div>
            <div className="credito">Desenvolvido por Alura.</div>
        </div>
    )

}

export default Rodape