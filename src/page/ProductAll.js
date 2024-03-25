import React from 'react'
import { Link } from 'react-router-dom'

const ProductAll = () => {
  return (
    <div>
        전체 상품 페이지
        <Link to="/login">로그인</Link>
        <Link to="/product/:1">상품페이지</Link>
    </div>
  )
}

export default ProductAll