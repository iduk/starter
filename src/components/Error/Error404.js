import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <h1 className="display-1 mb-3">Oh...</h1>
        <p className="text-muted mb-3">바로 나가지 마시고 밑에 버튼을 누르세요</p>
        <Link to="/" role="button" className="btn btn-primary">
          ComeHere
        </Link>
      </div>
    </div>
  )
}
