import React, { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// import { productAction } from './../redux/actions/productAction';
import { fetchProducts } from '../redux/slices/productSlice';

import ProductCard from '../component/ProductCard';
import SlideBn from '../component/SlideBn';

const ProductAll = () => {
    const productList = useSelector(state => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    
    const getAllProducts = useCallback (() => {
        const searchQuery = query.get('q') || "";
        dispatch(fetchProducts(searchQuery));
    }, [dispatch, query]);

    useEffect(() => {
        getAllProducts();
    }, [query, getAllProducts]);

  return (
    <ProdcutPage>
        <SlideBn />
        <Container fluid="true">
            <Row>
                {productList?.map(menu => 
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