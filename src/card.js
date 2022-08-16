

function Card({item,handleAddToCart}) {
  return (
    <div className='col-lg-4 mb-3'>
      <div class="card" style={{ width: "18 rem" }}>
        <img className="card-img-top" src={item.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{item.title}</h4>
          <h5 class="card-text">Rs: {item.price}</h5>
          <h6>{item.rating}</h6>
          <center><button onClick={()=> {handleAddToCart(item)}} class="btn btn-secondary">Add to Cart</button></center>
        </div>
      </div>
    </div>
  )
}

export default Card;
