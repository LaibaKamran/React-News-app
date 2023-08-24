import React from "react";
import './SkeletonLoader.css'

function SkeletonLoader(){

  return(
    <div className="skeleton">
      <div className="image-skeleton"></div>
      <div className="content-skeleton">
        <div className="date-skeleton"></div>
        <div className="title-skeleton"></div>
        <div className="description-skeleton"></div>
      </div>
    </div>
  )
}

export default SkeletonLoader;