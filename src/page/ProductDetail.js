import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState('');

  const getProduct = async () => {
    let url = `http://localhost:4000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setItem(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='product_detail'>
      <div>
        <img width={250} src={item?.img} alt='item-image' />
      </div>
      <div>
        <h2>{item?.title}</h2>
        <h3>{item?.price}</h3>
        <small>{item?.choice === true ? 'Conscious choice' : ''}</small>
      </div>
    </div>
  );
};

export default ProductDetail;
