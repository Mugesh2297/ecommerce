import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
function CartItems({cartItem,removeFromCart}){
return(
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{cartItem.title}</div>
    {cartItem.price}
    </div>
    <button onClick={()=>removeFromCart(cartItem)} class="badge bg-secondary rounded-pill"><FontAwesomeIcon icon = {faTimes}/></button>
    
  </li>
)
}

export default CartItems;