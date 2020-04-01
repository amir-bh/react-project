import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from './Post';
import logo from '../assets/images/logo.png';
import { getPostList } from '../selectors';
import { requestPosts } from '../actions';

const PostList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestPosts());
  });
  const posts = useSelector(getPostList);
  return (
    <div className="m-5" data-test="component-post-list">
      <Table data-test="component-post-table">
        <thead>
          <tr>
            <th>
              <img src={logo} alt="" />
            </th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post, index) => {
              return (
                <tr key={post.link}>
                  <th scope="row">{index + 1}</th>
                  <Post {...post} />
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default PostList;
