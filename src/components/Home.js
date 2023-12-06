import React from 'react'
import { useState, useEffect } from 'react'
import Product from './product/Product'
import { getProducts } from '../modules/productManager'
import { ButtonGroup, Label, Card, CardHeader, CardTitle } from 'reactstrap'

export const Home = ({ user, isLoggedIn }) => {
  return (
    <>
      <div className="home">
        <div className="container">
          <img className="home-banner" src="https://cdn-v2.theculturetrip.com/1280x713/wp-content/uploads/2016/09/7_22_2016-nappi-studio-interiors-7.webp" alt="" />
        </div>
        <h1 className="home-text"> Support your local artists, online</h1>
        <hr></hr>
        <div className="container">
          <h2 className="home">Shop</h2>
          <p className="home">Browse through our collection of art.</p>
          <div className="gallery-container">
            <ProductGallery />
            <h2 className="home">Discover</h2>
            <p className="home">Find your next favorite artist, or discover something new.</p>
            <h2 className="home">Support</h2>
            <p className="home">Support your favorite artists by buying their work.</p>
          </div>

        </div>
      </div>
    </>
  )

}

const ProductGallery = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  const handleCategoryFilter = (categoryName) => {
    setSelectedCategory(categoryName === "all" ? null : categoryName);
  };

  const categoryNames = [...new Set(products.map((p) => p.category.name))]

  const filteredProducts = selectedCategory ? products.filter((p) => p.category.name === selectedCategory) : products;

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>
            <Label htmlFor="label-text">
              <h3>
                Shop by Category
              </h3></Label>
          </CardTitle>
          <ButtonGroup>
            {categoryNames.map((categoryName) => (
              <button key={categoryName} value={categoryName}
                onClick={() => handleCategoryFilter(categoryName)}>
                {categoryName}
              </button>
            ))}
          </ButtonGroup>
        </CardHeader>
        <div className="product-gallery">
          {filteredProducts.map((product) => (
            <div key={product.id} className="
          col-xs-12
          col-sm-8
          col-lg-4">
              <Product key={product.id} product={product} />
            </div>
          ))}
        </div>
      </Card>
    </div >
  )
}