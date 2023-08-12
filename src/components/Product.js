export default function Product(props){
    return(
        <div className="card" style={{width: '20rem'}}>
        <img src={props.productImg} className="card-img-top" style={{height:"300px",width:"318px"}} alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.productName}</h5>
            <p className="card-text">{props.productDesc}</p>
            {/* <a href="#" class="btn btn-warning">Ajouter au panier</a> */}
        </div>
        </div>
    )
}