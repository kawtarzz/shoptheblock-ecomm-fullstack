import React, { useEffect, useState } from "react";
import { Card, Button, ButtonGroup } from "reactstrap";
import { Input } from "reactstrap";
import Product from "./product/Product";
import { getProducts } from "../modules/productManager";
import Container from "reactstrap/lib/Container";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Header from './Header'


export const Home = ({ user, isLoggedIn }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      getProducts().then(setProducts);
    } else {
      const searchResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(searchResults);
    }
  };

  const handleCategoryFilter = (categoryName) => {
    setSelectedCategory(categoryName === "all" ? null : categoryName);
  };

  const categoryNames = [...new Set(products.map((p) => p.category.name))]

  const filteredProducts = selectedCategory ? products.filter((p) => p.category.name === selectedCategory) : products;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <div className="filter-con">
        <div className="search-con">
          <div id="search-con">
            <input type="search" name="search" id="search" data-mini="true" placeholder="Search for Products" data-theme="a"
              value={searchTerm}
              onChange={(evt) => setSearchTerm(evt.target.value)} />
            <button type="submit" value="Go" id="submit" variant="secondary" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <Row>
          <Col>
            <Label htmlFor="label-text">Filter by Category: </Label>
            <select
              name="category"
              id="category"
              onChange={(evt) => handleCategoryFilter(evt.target.value)}
            >
              <option value="all">All Products</option>
              {categoryNames.map((categoryName) => (
                <option key={categoryName} value={categoryName}>
                  {categoryName}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <div className="home-con">
          <div>

            <Label htmlFor="label-text">Sort by Price:</Label>
            <ButtonGroup>
              {' '}
              <button onClick={() => {
                const sortedProducts = [...products].sort((a, b) => a.price - b.price)
                setProducts(sortedProducts)
              }}>Lowest first</button>
              <button onClick={() => {
                const sortedProducts = [...products].sort((a, b) => b.price - a.price)
                setProducts(sortedProducts)
              }}>Highest first</button>
            </ButtonGroup>
          </div>
        </div>
        <Card className="product-list">
          <Row>
            {filteredProducts.map((product) => (
              <div key={product.id} className="
              col-xs-12
              col-sm-8
              col-lg-4">
                <Product key={product.id} product={product} />
              </div>
            ))}
          </Row>
        </Card>
      </div>
    </>
  );
}
