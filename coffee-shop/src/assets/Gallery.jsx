import React from "react";
import {Row, Col, Container } from "react-bootstrap";
import { cartState } from "./Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Filters from "./Filters";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const {
    state: { products,cart },dispatch,productstate:{sort,stock,searchQuery}} = cartState();
    const navigate = useNavigate();
  console.log(products);
  const transformProducts=()=>{
    let sortedproducts=products
    if(sort)
    {
      sortedproducts=sortedproducts.sort((a,b)=>
      sort==="ascending"?a.price-b.price:b.price-a.price
      )
    }
    if(!stock)
    {
      sortedproducts=sortedproducts.filter((prod)=>prod.stock)
    }
    if(searchQuery)
    {
      sortedproducts=sortedproducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedproducts
  }
  return (
    <div>
      <Container className=" mt-5 text-center">
        <h1 className="fw-bold " style={{ color: "orangered" }}>
          Our Gallery
        </h1>
        <p className="fs-5 my-5">
        Coffee is a beautiful, complex beverage that has everything to do with the people you share it with.
         Life is like a cup of coffee. It's not enough just to be hot, there has to be some kick to it.
        </p>
        <Row>
          <Col md={3} className='f1  text-black fs-5 p-4'>
          <Filters/>
          </Col>
          <Col md={9}>
          <div className="row row-cols-1 row-cols-md-3 g-4 gal">
          {transformProducts().map((item, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem" }}className="border-0">
                  <img src={item.image} className="img-fluid mx-auto d-block rounded-pill " alt=""  />
                  <Card.Body>
                    <Card.Title className="fs-4">{item.name}</Card.Title>
                    <Card.Text className="fw-bold">₹{item.price} </Card.Text>
                    
                    {cart.some((c)=>c.id==item.id)?<Button variant="danger"
                     onClick={()=>dispatch({
                      type:"REMOVEFROMCART",
                      payload:item
                     })}>Remove</Button>:
                     <Button className="g1" variant="primary"disabled={!item.stock}
                     onClick={()=>dispatch({
                      type:"ADDTOCART",
                      payload:item
                     })}>{!item.stock?"Out of Stock":"Add to cart"}</Button>}
                   
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </div>
        <Button variant='dark' className='p-2 px-5 btn1 fs-5 mt-5 mb-4' onClick={() => navigate("/Cart")} >Go to cart</Button>
          </Col>

        </Row>
       
      </Container>
    </div>
  );
}

export default Gallery;
