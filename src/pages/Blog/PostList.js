/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './PostList.module.scss'
import classnames from 'classnames/bind'
import axios from 'axios'

const cx = classnames.bind(styles)

function PostList() {
  const [postData, setPostData] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPostData(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="mt-10">
        <h5 className="mb-5">Skeleton Loading</h5>

        <ul className={cx('post-list')}>
          <li>
            <Skeleton />
          </li>
          {postData.map((post) => (
            <li key={post.id}>
              <Link to="#" className={cx('items')}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function Skeleton() {
  return (
    <div className={cx('skeleton')}>
      <h5 className={cx('skeleton-title')}></h5>
      <p className={cx('skeleton-content')}></p>
      <p className={cx('skeleton-content')}></p>
    </div>
  )
}

export default PostList
