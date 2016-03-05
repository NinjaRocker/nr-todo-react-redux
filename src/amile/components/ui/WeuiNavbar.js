import React from 'react';

import WeuiNavbarItem from './WeuiNavbarItem';

const WeuiNavbar = ({list}) => (
  <div className="weui_navbar">
    {list.map((item, index)=>(
      <WeuiNavbarItem
        id={item.id}
        text={item.text}
        isOn={item.isOn}
        route={item.route}
        callback={item.callback}
        key={index}
      />
    ))}
  </div>
);

export default WeuiNavbar;