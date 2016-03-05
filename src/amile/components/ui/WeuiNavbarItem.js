import React from 'react';

const WeuiNavbarItem = ({id, text, route, isOn, callback}, index) => (
  <div
    className={`weui_navbar_item${isOn ? ' weui_bar_item_on' : ''}`}
    onClick={callback(id)}
    key={index}
  >
    {
      route ? <a href={route}>{text}→</a> : text
    }
  </div>
);

export default WeuiNavbarItem;