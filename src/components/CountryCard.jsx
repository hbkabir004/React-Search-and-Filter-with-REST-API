import React from 'react';

const ProductCard = ({ item }) => {
    const { img, name, price, categoryName, badge } = item;

    return (
        <li>
            <article className="card">
                <div className="card-image">
                    <img src={img} alt={name} />
                </div>
                <div className="card-content">
                    <h2 className="card-name">{name}</h2>
                    <ol className="card-list">
                        <li>
                            Price: <span>{price}</span>
                        </li>
                        <li>
                            Category: <span>{categoryName}</span>
                        </li>
                        <li>
                            Badge: <span>{badge}</span>
                        </li>
                    </ol>
                </div>
            </article>
        </li>
    );
};

export default ProductCard;