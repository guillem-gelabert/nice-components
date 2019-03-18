import React from 'react';
import './List.css';

const List = ({ children, activeIndex, onClick }) => {
  const tabList = React.Children.map(children, (child, index) => React.cloneElement(child, {
    isActive: index === activeIndex,
    onClick: () => onClick(index),
  }));
  return <div className="tablist">{tabList}</div>;
};

export default List;
