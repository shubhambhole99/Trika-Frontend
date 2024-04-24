import React from 'react';

const MediaComponent = ({ src,style,control }) => {
  // Check if the source is an image or a video based on file extension
  const isImage = /\.(jpeg|jpg|gif|png)$/i.test(src);
  const isVideo = /\.(mp4|ogg|webm)$/i.test(src);
//   return <video controls><source src={src} type="video/mp4" /></video>;

  if (isImage) {
    return <img 
    style={style}
     src={src} alt="Image" />;
    
  } else if (isVideo) {
    return <video 
    style={style}
    className="img-fluid"
    alt=""
    controls={control} ><source src={src} type="video/mp4" /></video>;
  } else {
    return <p>Unsupported file type</p>;
  }
};

export default MediaComponent;