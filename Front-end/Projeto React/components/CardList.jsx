import CardProduto from "./CardProduto";

export default function CardList(props){
    console.log(props)
    const {produtos} = props
    return (
        <div className="container mt-4">
                <div className="row">
                    {/*Estrutura de repetição map */}
                    {produtos.map(function(produto, index){
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <CardProduto
                                nome={produto.nome}
                                descricao={produto.descricao}
                                preco={produto.preco}
                                quantidade={produto.quantidade}
                            />
                        </div>
                        )})}
                </div>
            </div>
    )
}