export default function CardProduto(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{props.nome}</h5>
            </div>
            <img src={`produtos/${props.nome}.png`} className="card-img-top" alt={props.nome} />
            <div className="card-body">
                <p className="card-text">{props.descricao}</p>
                <p>{props.quantidade} unidade(s) em estoque</p>
            </div>
            <div className="card-footer">
                <h6 className="card-subtitle mb-2 text-body-secondary">R$ {props.preco}</h6> 
            </div>
        </div>
    );
}
CardProduto.defaultProps = {
    nome:'Produto',
    descricao: 'Descrição do produto',
    preco: '**,**',
    quantidade: '0'
}