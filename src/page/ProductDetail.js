import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faCartShopping, faRuler } from "@fortawesome/free-solid-svg-icons";

import { priceComma } from "../utill/priceComma";

import { fetchProductDetail, productActions } from "../redux/slices/productSlice";
const { addChoiceProduct } = productActions;

const ProductDetail = () => {
    const product = useSelector(state => state.product.product);
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(fetchProductDetail(id));
    }, [dispatch, id]);

    const clickBtnAdd = () => {
        dispatch(addChoiceProduct({
            item: product
        }));
    };

    return (
        <Container fluid="xxl" as="section" className="product-detail">
            <Row>
                <Col md="6" className="photo">
                    <img src={product?.img} alt={product?.title} />
                </Col>
                <Col md="6" className="info">
                    <Title>
                        <p>{product?.title}</p>
                        <span className="heart"><FontAwesomeIcon icon={faHeart} /></span>
                    </Title>
                    <Price>
                        ￦ <span>{product ? priceComma(product?.price) : "0"}</span>
                    </Price>
                    <p style={{marginBottom:"20px"}}>
                        <Ment>{product?.choice ? "Conscious choice" : ""}</Ment>
                        <Ment>{product?.new ? "신제품" : ""}</Ment>
                    </p>
                    <Form.Select aria-label="Default select example">
                        <option disabled>사이즈 선택</option>
                        {product?.size?.map(i => 
                            <option value={i} key={i}>{i}</option>
                        )}
                    </Form.Select>
                    <LinkBox>
                        <p>
                            <FontAwesomeIcon icon={faRuler} />
                            <span>사이즈 가이드</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>원하는 사이즈가 품절인가요?</span>
                        </p>
                    </LinkBox>
                    <div className="d-grid gap-2">
                        <Button variant="danger">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>바로 구매하기</span>
                        </Button>
                        <Button variant="dark" onClick={clickBtnAdd}>
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span>장바구니 추가</span>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: clamp(1.2rem, 2vw, 1.7rem);
    font-weight: 700;
    margin-bottom: 20px;

    .heart{
        cursor: pointer;
    }
`;

const Price = styled.p`
    margin-bottom: 18px;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: #333;
    span {
        font-weight: 600;
    }
`;
const Ment = styled.span`
    margin-right: 10px;
    padding: 4px 10px;
    border-radius: 4px;
    background-color: var(--text-light);
    color: #fff;
`;
const LinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 40px;
    
    p {
        cursor: pointer;

        span {
            margin-left: 6px;
            padding-bottom: 3px;
            transition: 0.2s;
        }

        &:hover span{
            border-bottom: 1px solid #666;
        }
    }

`;