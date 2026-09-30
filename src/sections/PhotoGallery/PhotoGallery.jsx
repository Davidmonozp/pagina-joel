import React from 'react';
import './styles/PhotoGallery.css';

// Importa tus imágenes
import joel1Img from '../../assets/joel1.jpeg';
import joel2Img from '../../assets/joel2.jpeg';
import joel3Img from '../../assets/joel3.jpeg';
import titulo from '../../assets/titulo.png';

const PhotoGallery = () => {
    // 1. Colocas tus imágenes en un arreglo (aquí puedes meter tus 100 fotos fácilmente)
    const originalFotos = [
        joel1Img,
        joel2Img,
        joel3Img,
        joel1Img,
        joel2Img,
        joel3Img,
        joel3Img,
        // joel1Img,
        // joel2Img,
        // joel3Img,
        // joel1Img,
        // joel2Img,
        // joel3Img,
        // joel3Img,
        titulo

    ];

    // 2. Duplicamos el arreglo automáticamente para asegurar simetría perfecta
    const fotosDuplicadas = [...originalFotos, ...originalFotos];

    return (
        <>
            <img src={titulo} alt="momentos" className='moments-title' id='momentos'/>

            <section className="sliding-sprite" aria-label="Scrolling image strip" >
                <div className="sprite-track">
                    {fotosDuplicadas.map((foto, index) => (
                        <figure key={index} aria-hidden={index >= originalFotos.length ? "true" : "false"}>
                            <img src={foto} alt={`momento-${index}`} />
                        </figure>
                    ))}
                </div>
            </section>
        </>
    );
};

export default PhotoGallery;