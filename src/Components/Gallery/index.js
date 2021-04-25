import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

function Gallery() {

    const [images2, setImages] = useState();

    const getLinks = () => {

        console.log("get from endpoint");
        fetch(`https://localhost:5001/api/Images/List`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(result => setImages(result));
    }

    const handleClick=function(){
        getLinks();
    }

    return (
        <div>
            <button onClick={handleClick}>zrob</button>
            <ImageGallery items={images2} />
        </div>

    )
}

export default Gallery;