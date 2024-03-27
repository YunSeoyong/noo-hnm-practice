import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faCartShopping, faRuler } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { priceComma } from "../utill/priceComma";

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    let { id } = useParams();

    const getProductDetail = async () => {
        const url = `http://localhost:5000/products/${id}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("데이터를 불러오지 못하고 있습니다.");
            }
            const data = await response.json();
            setProduct(data);
            console.log(data);
        } catch (error) {
            console.log("Fetch Data Error: ", error);
        }
    };
    useEffect(() => {
        getProductDetail();
    }, []);

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
                        {product?.size.map(i => 
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
                        <Button variant="dark">
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span>장바구니 추가</span>
                        </Button>
                        <Button variant="danger">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>바로 구매하기</span>
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