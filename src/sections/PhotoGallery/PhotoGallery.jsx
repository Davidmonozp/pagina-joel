import React from 'react';
import './styles/PhotoGallery.css';

// Importa tus imágenes
import mes_1 from '../../assets/mes-1.jpeg';
import mes_2 from '../../assets/mes-2.jpeg';
import mes_3 from '../../assets/mes-3.jpeg';
import mes_4 from '../../assets/mes-4.jpeg';
import mes_5 from '../../assets/mes-5.jpeg';
import mes_6 from '../../assets/mes-6.jpeg';
import titulo from '../../assets/titulo.png';

const PhotoGallery = () => {
    // 1. Colocas tus imágenes en un arreglo (aquí puedes meter tus 100 fotos fácilmente)
    const originalFotos = [
        mes_1,
        mes_2,
        mes_3,
        mes_4,
        mes_5,
        mes_6,
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
            <img src={titulo} alt="momentos" className='moments-title' id='momentos' />

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