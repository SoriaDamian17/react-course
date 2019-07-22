import React from 'react';
import ImageItem from './ImageItem';

const ImageList = props => {

    const images = props.images.map( ({id, urls, description}) => {
        return <ImageItem id={id} url={urls.regular} description={description} />
    });

    return<div>{images}</div>
};

export default ImageList;
