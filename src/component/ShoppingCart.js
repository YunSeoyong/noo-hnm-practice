import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from "react-bootstrap";

import { priceComma } from "../utill/priceComma";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ShoppingCart = ({ cart, setCart }) => {
    const choiceProducts = useSelector(state => state.product.choiceProducts);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calcPrice();
    }, [choiceProducts]);

    const calcPrice = () => {
        let total = 0;
        for (let item of choiceProducts) {
            const { price } = item;
            total += price;
        }
        setTotalPrice(total);
    };

    const deleteProduct = (targetId) => {
        dispatch(productAction.deleteChoiceProduct(targetId, totalPrice, setTotalPrice));
    };

    const cancelBag = () => {
        setCart(false);
    };

    return (
        <CartModal className={cart ? "on" : ""}>
            <CancelBtn onClick={cancelBag}>
                <FontAwesomeIcon icon={faX} size="lg" />
            </CancelBtn>
            <h2>쇼핑백</h2>
            <Container>
                {choiceProducts.length > 0 ? (
                    choiceProducts.map((item, idx) => (
                        <Row key={idx}>
                            <Col xs="3">
                                <img src={item?.img} alt={item?.title} />
                            </Col>
                            <Col xs="9">
                                <div className="cart-info">
                                    <p className="cart-title">{item?.title}</p>
                                    <p>
                                        ￦{" "}
                                        <span>
                                            {item
                                                ? priceComma(item?.price)
                                                : "0"}
                                        </span>
                                    </p>
                                </div>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => deleteProduct(item.id)}
                                >
                                    삭제
                                </Button>
                            </Col>
                        </Row>
                    ))
                ) : (
                    <Row className="ment">고객님의 쇼핑백이 비어 있습니다.</Row>
                )}
                <Row>
                    <Col>합계금액</Col>
                    <Col className="total-price">
                        ￦{" "}
                        <span>
                            {totalPrice === 0 ? "0" : priceComma(totalPrice)}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Button variant="danger" className="goShop">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>구매하기</span>
                    </Button>
                </Row>
            </Container>
        </CartModal>
    );
};

export default ShoppingCart;

const CartModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    box-sizing: border-box;
    width: 70%;
    height: 100vh;
    height: 100dvh;
    padding: 30px;
    background-color: #fff;
    z-index: 1005;
    transition: 0.3s;

    &.on {
        transform: translateX(0);
    }

    h2 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 30px;
    }

    .container {
        .row {
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;

            .col-3 {
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .col-9 {
                line-height: 1.2;
                font-weight: 600;
                .cart-info {
                    margin-bottom: 10px;
                    color: #444;
                    font-size: clamp(0.9rem, 2vw, 1.2rem);

                    .cart-title {
                        margin-bottom: 4px;
                    }
                }
            }

            .total-price{
                font-weight: 500;
                font-size: 1rem;
            }

            .btn {
                display: block;
                margin-left: auto;
            }

            &.ment {
                font-size: 1rem;
                font-weight: 600;
                color: var(--base-active);
                padding: 20px 0;
            }
        }
        .row:last-child {
            border: 0;
            padding-top: 30px;
        }
    }
    @media screen and (min-width: 768px) {
        width: 50%;
    }
    @media screen and (min-width: 1024px) {
        width: 30%;
    }
`;

const CancelBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
`;
