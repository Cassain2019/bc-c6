import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';


function ProductItems() {
    const { id } = useParams();
    console.log(id);
    const Shoe = Shoes[id];

    if (!Shoe)
        return <h2>Product not found</h2>

    return (
        <div>
            <h1>Welcome from Product Items</h1>
            <div className="link">
                <h4>{Shoe.name}</h4>
                <img src={Shoe.img} height={500} alt="shoe"/>
            </div>
        </div>
    );
}

export default ProductItems;
