import React, { use } from 'react';

const Gallery = ({galleryPromise}) => {

    const galleryImage=use(galleryPromise);
    console.log(galleryImage)

    return (
        <div>
            
        </div>
    );
};

export default Gallery;