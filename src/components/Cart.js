import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {remove} from "../store/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const selectedProduct = useSelector(state => state.cart);

    const removeFromCart = (id) => {
       dispatch(remove(id))
    }
    
    const selectedList = selectedProduct.map((product) => (
        <div className="col-md-3" style={{marginBottom:'10px'}}>
          <Card style={{ width: "18rem" }} key={product.id}>
           <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{width: '10rem', height:'12rem'}} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR. {product.price}</Card.Text>
              
            </Card.Body>
            <Card.Footer>
                    <Button variant="secondary" onClick={()=> removeFromCart(product.id)}>Remove from Cart</Button>
            </Card.Footer>
            </div>
          </Card>
        </div>
      ));

      return(
        <div className='row'>
            {selectedList}
        </div>
      )
     
}
