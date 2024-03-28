import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterBox>
        <div className='ft-in'>
            <p className='ft-bold'>
                이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz AB의 자산입니다.
            </p>
            <p className='ft-info'>
                법인명 에이치앤엠헤네스 앤 모리츠 주식회사 | 통신판매업신고번호 : <span>2022-서울강남-01184</span> / 사업자등록| 번호 : <span>220-87-83339</span> | 대표자 : 아담 칼슨, 선 보라미, 아네타 포쿠친스카 | 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 : 080-822-0220 | <span className='bold'></span>info.kr@hm.com 사업자 정보 확인 지급보증안내
            </p>
            <h1><img src='/assets/logo.png' alt='H&M logo' /></h1>
        </div>
    </FooterBox>
  )
}

export default Footer

const FooterBox = styled.footer`
    box-sizing: border-box;
    height: 350px;
    padding: 50px 20px 0;
    background-color: var(--base-dark);

    .ft-in {
        color: #fff;
        opacity: 0.8;

        p {
            line-height: 1.5;
            letter-spacing: -0.04rem;

            span {
                font-weight: 500;
            }
        }
        .ft-bold {
            font-weight: 600;
            margin-bottom: 10px;
        }
        .ft-info {
            margin-bottom: 60px;
        }

        h1 {
            width: 60px;
            margin: 0 auto;
            img {
                width: 100%;
                height: auto;
            }
        }
    } 

    @media screen and (min-width: 768px) {
        .ft-in {
            width: 700px;
            margin: 0 auto;
        }
    }
`;