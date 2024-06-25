import CardFuncionarios from "./CardFuncionarios";

export default function CardListFuncionarios(props){
    console.log(props)
    const {funcionarios} = props
    return (
        <div className="container mt-4">
                <div className="row">
                    {/*Estrutura de repetição map */}
                    {funcionarios.map(function(funcionario, index){
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <CardFuncionarios
                                nome={`${funcionario.first_name} ${funcionario.last_name}`}
                                avatar={funcionario.avatar}
                                email={funcionario.email}
                            />
                        </div>
                        )})}
                </div>
            </div>
    )
}