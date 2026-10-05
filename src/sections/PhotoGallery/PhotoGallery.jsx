import React from 'react';
import './styles/PhotoGallery.css';

// Importa tus imágenes
import moment_1 from '../../assets/moments/moment-1.jpeg';
import moment_2 from '../../assets/moments/moment-2.jpeg';
import moment_3 from '../../assets/moments/moment-3.jpeg';
import moment_4 from '../../assets/moments/moment-4.jpeg';
import moment_5 from '../../assets/moments/moment-5.jpeg';
import moment_6 from '../../assets/moments/moment-6.jpeg';
import moment_7 from '../../assets/moments/moment-7.jpeg';
import moment_8 from '../../assets/moments/moment-8.jpeg';
import moment_9 from '../../assets/moments/moment-9.jpeg';
import moment_10 from '../../assets/moments/moment-10.jpeg';
import moment_11 from '../../assets/moments/moment-11.jpeg';
import moment_12 from '../../assets/moments/moment-12.jpeg';
import moment_13 from '../../assets/moments/moment-13.jpeg';
import moment_14 from '../../assets/moments/moment-14.jpeg';
import moment_15 from '../../assets/moments/moment-15.jpeg';
import moment_16 from '../../assets/moments/moment-16.jpeg';
import moment_17 from '../../assets/moments/moment-17.jpeg';
import moment_18 from '../../assets/moments/moment-18.jpeg';
import moment_19 from '../../assets/moments/moment-19.jpeg';
import moment_20 from '../../assets/moments/moment-20.jpeg';
import moment_21 from '../../assets/moments/moment-21.jpeg';
import moment_22 from '../../assets/moments/moment-22.jpeg';
import moment_23 from '../../assets/moments/moment-23.jpeg';
import moment_24 from '../../assets/moments/moment-24.jpeg';
import moment_25 from '../../assets/moments/moment-25.jpeg';
import moment_26 from '../../assets/moments/moment-26.jpeg';
import moment_27 from '../../assets/moments/moment-27.jpeg';
import moment_28 from '../../assets/moments/moment-28.jpeg';
import moment_29 from '../../assets/moments/moment-29.jpeg';
import moment_30 from '../../assets/moments/moment-30.jpeg';
import moment_31 from '../../assets/moments/moment-31.jpeg';
import moment_32 from '../../assets/moments/moment-32.jpeg';
import moment_33 from '../../assets/moments/moment-33.jpeg';
import moment_34 from '../../assets/moments/moment-34.jpeg';
import moment_35 from '../../assets/moments/moment-35.jpeg';
import moment_36 from '../../assets/moments/moment-36.jpeg';
import moment_37 from '../../assets/moments/moment-37.jpeg';
import moment_38 from '../../assets/moments/moment-38.jpeg';
import moment_39 from '../../assets/moments/moment-39.jpeg';
import titulo from '../../assets/titulo.png';

const PhotoGallery = () => {
    // 1. Colocas tus imágenes en un arreglo (aquí puedes meter tus 100 fotos fácilmente)
    const originalFotos = [
        moment_1,
        moment_2,
        moment_3,
        moment_4,
        moment_5,
        moment_6,
        moment_7,
        moment_8,
        moment_9,
        moment_10,
        moment_11,
        moment_12,
        moment_13,
        moment_14,
        moment_15,
        moment_16,
        moment_17,
        moment_18,
        moment_19,
        moment_20,
        moment_21,
        moment_22,
        moment_23,
        moment_24,
        moment_25,
        moment_26,
        moment_27,
        moment_28,
        moment_29,
        moment_30,
        moment_31,
        moment_32,
        moment_33,
        moment_34,
        moment_35,
        moment_36,
        moment_37,
        moment_38,
        moment_39,
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