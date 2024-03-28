import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import ProductCard from '../component/ProductCard';
import SlideBn from '../component/SlideBn';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        const searchQuery = query.get('q') || "";
        const url = `https://my-json-server.typicode.com/YunSeoyong/noo-hnm-practice/products/?q=${searchQuery}`;
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
    }, [query]);

  return (
    <ProdcutPage>
        <SlideBn />
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