export default function CardFuncionarios(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{props.nome}</h5>
            </div>
            <img src={props.avatar} className="card-img-top" alt={props.avatar} />
            <div className="card-body">
                <p className="card-text">{props.email}</p>
            </div>
        </div>
    );
}
CardFuncionarios.defaultProps = {
    nome:'Funcionario',
    avatar: 'Descrição do funcionario',
    email: '',
}