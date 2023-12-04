import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from "reactstrap"
import "./Product.css"

export default function Product({ product }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDetails = () => {
    navigate(`/productDetails/${product.id}`, { state: { background: location } })
  }

  return (
    <div className="container">
      <CardTitle tag="h5" onClick={handleDetails}>
        {product.name}
      </CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        {product.category?.name}
      </CardSubtitle>
      <CardImg top width="100%" src={product.productImage} alt="Product Image" onClick={handleDetails} className="box" />
      <CardBody>
        <CardText>Price: ${product.price}</CardText>
      </CardBody>
    </div>
  )
}