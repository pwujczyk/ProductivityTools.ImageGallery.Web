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

    const [serverImages, setserverImages] = useState([]);

    const getLinks = () => {

        let x= window.innerHeight;
        console.log(x);
        console.log("get from endpoint");
        fetch(`https://localhost:5001/api/Images/List?height=`+x, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(result => setserverImages(result));
    }

    const handleClick=function(){
        getLinks();
    }

    return (
        <div>
            <button onClick={handleClick}>zrob</button>
            <ImageGallery lazyLoad items={serverImages} />
        </div>

    )
}

export default Gallery;