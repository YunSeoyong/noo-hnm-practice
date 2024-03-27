import React from 'react'
import styled from 'styled-components';

import { priceComma } from '../utill/priceComma';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();

    const showDetail = (id) => {
        navigate(`/product/${id}`);
    };

  return (
    <Card onClick={() => {showDetail(item?.id)}}>
        <p className='photo'>
            <img src={item?.img} alt={item?.title} />
        </p>
        <div className='text'>
            <Text $mb={"10px"}>{item?.choice ? "Conscious choice" : ""}</Text>
            <p className='title'>{item?.title}</p>
            <div className='bottom'>
                <p className='price'>￦ <span>{priceComma(item?.price)}</span></p>
                <Text>{item?.new ? "신제품" : ""}</Text>
            </div>
        </div>
    </Card>
  )
}

export default ProductCard;

const Card = styled.div`
    cursor: pointer;

    .photo {
        margin-bottom: 20px;
        height: auto;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
            transition: 0.3s;
        }
    }

    .text {
        padding: 0 10px;

        .title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 10px;
            transition: 0.3s;
        }

        .bottom {
            display: flex;
            justify-content: space-between;

            .price {
                font-size: 0.95rem;

                span {
                    font-weight: 600;
                }
            }
        }
    }

    &:hover .photo img {
        transform: scale(1.05);
    }
    &:hover .title {
        color: var(--base-active);
    }
`;

const Text = styled.p`
    font-size: 0.8rem;
    color: var(--text-hlight);
    animation: blink 2s step-end infinite;
    margin-bottom: ${props => props.$mb ? props.$mb : 0};
    

    @keyframes blink {
        50% {
            color: var(--text-light);
        }
    }
`;