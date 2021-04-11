import React from 'react'


const GifGridItem = (img) => {
    // console.log(img.img.id);
    // console.log({id, title,url});
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={img.img.url} alt={img.img.title} />
            <p>{img.img.title}</p>
        </div>
    )
}

export default GifGridItem

// const GifGridItem = ({id, title,url}) => { // una manera con destructuracion
// return (
//     <div>
//         <img src={url} alt={title} />
//         <p>{title}</p>
//     </div>
//     // <div>
//     // una manera
//     //     {/* {img.title} */}
//     //     <img src={url} alt={title} />
//     //     <p>{title}</p>
//     // </div>
// )
// }