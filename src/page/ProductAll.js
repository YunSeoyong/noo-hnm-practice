import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        const url = 'http://localhost:5000/products';
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("데이터를 불러오지 못하고 있습니다.")
            }
            const data = await response.json();
            setProductList(data);
        } catch (error) {
            console.log("Fetch Data Error: ", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <ProdcutPage>
        <Bn>
            <img src='/assets/main-pc.jpg' alt='bn' />
            <p>S/S 2024</p>
        </Bn>
        <Container fluid="true">
            <Row>
                {productList.map(menu => 
                    <Col xs={6} md={4} xl={3} key={menu.id}><ProductCard item={menu} /></Col>
                )}
            </Row>
        </Container>
    </ProdcutPage>
  )
}

export default ProductAll

const ProdcutPage = styled.section`
    padding-top: 65px;
    padding-bottom: 100px;
    margin: 0 20px;

    .col-6 {
        margin-bottom: 40px;
    }

    @media screen and (min-width: 768px) {
        margin: 0 30px;

        .col-6 {
            margin-bottom: 60px;
        }
    }
    @media screen and (min-width: 1024px) {
        padding-top: 170px;
        padding-bottom: 200px;
    }
    @media screen and (min-width: 1640px) {
        max-width: 1600px;
        margin: 0 auto;

        .col-6 {
            margin-bottom: 80px;
        }
    }
`;

const Bn = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 40px;

    img {
        width: 100%;
        height: auto;
    }

    P {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: clamp(3rem, 4vw, 8rem);
        font-weight: 700;
        opacity: 0.8;
    }
`;