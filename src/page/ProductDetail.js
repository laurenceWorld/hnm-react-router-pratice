import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/laurenceWorld/hnm-react-router-pratice/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Row className='product_area'>
        <Col className='product_img'>
          <img src={product?.img} alt='product-image' />
        </Col>
        <Col>
          <h2 className='product_info'>{product?.title}</h2>
          <h3 className='product_info'>{product?.price}</h3>
          <small className='product_info'>
            {product?.choice === true ? 'Conscious choice' : ''}
          </small>
          <Dropdown className='product_info'>
            <Dropdown.Toggle variant='white' id='dropdown-basic'>
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='danger' className='product_info_btn'>
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
