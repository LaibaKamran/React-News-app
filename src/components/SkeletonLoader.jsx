import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-img"></div>
      <div className="skeleton-content">
        <div className="skeleton-date"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
