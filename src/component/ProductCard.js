import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className='product_card' onClick={showDetail}>
      <img src={item?.img} alt='product-image' />
      <small>{item?.choice === true ? 'Conscious choice' : ''}</small>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <small>{item?.new === true ? '신제품' : ''}</small>
    </div>
  );
};

export default ProductCard;
