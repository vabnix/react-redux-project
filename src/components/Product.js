import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch} from 'react-redux';
import { add } from "../store/cartSlice";

export default function Product() {
    const dispatch = useDispatch();
  const [products, getProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => getProduct(json));
  });

  const addToCart = (product) => {
     //dispatch action 
     dispatch(add(product));
  }

  const productList = products.map((product) => (
    <div className="col-md-3" style={{marginBottom:'10px'}}>
      <Card style={{ width: "18rem" }} key={product.id}>
       <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width: '10rem', height:'12rem'}} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR. {product.price}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
        </Card.Footer>

        </div>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1 className="text-center">Product Dashboard</h1>
      <div className="row">{productList}</div>
    </div>
  );
}
