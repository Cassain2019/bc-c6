import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';


function Product() {
    console.log(Shoes)
    console.log(Object.keys(Shoes))
    return (
        <div>
            <h1>Welcome from Product</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName => {
                    const Shoe = Shoes[keyName];
                    return (
                    <Link key={keyName} className="link" to={`/product/${keyName}`}>
                        <h4>{Shoe.name}</h4>
                        <img src={Shoe.img} height={150} alt="Shoe"/>
                        </Link>)

                })}
            </div>
        </div>
    );
}

export default Product;
