import React from 'react';

let HelperLinks = () => {
  return (
    <ul>
      <li><a href="#/uc/">UserCenter</a></li>
      <li><a href="#/uc/update">Update</a></li>
      <li><a href="#/uc/order">Order</a></li>
      <li><a href="#/uc/about">About</a></li>
    </ul>
  );
};

let IndexPage = () => {
  return (
    <div>
      <h3 style={{
        color: 'red',
        background: '#f6f6f6'
      }}>
        Hello! This is the index page.
      </h3>
      <HelperLinks />
    </div>
  );
};

export default IndexPage;