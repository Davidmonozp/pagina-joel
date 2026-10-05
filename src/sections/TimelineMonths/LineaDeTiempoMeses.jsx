import React from 'react';
import './styles/LineaTiempo.css';
import mes_1 from '../../assets/mes-1.jpeg';
import mes_2 from '../../assets/mes-2.jpeg';
import mes_3 from '../../assets/mes-3.jpeg';
import mes_4 from '../../assets/mes--4.jpeg';
import mes_5 from '../../assets/mes-5.jpeg';
import mes_6 from '../../assets/mes-6.jpeg';
import mes_7 from '../../assets/mes-7.jpeg';
import mes_8 from '../../assets/mes-8.jpeg';
import mes_9 from '../../assets/mes-9.jpeg';
import mes_10 from '../../assets/mes-10.jpeg';
import mes_11 from '../../assets/mes-11.jpeg';
import tituloImg from '../../assets/titulo-mes.png';



export default function LineaDeTiempoMeses() {
    const meses = [
        { id: 1, mes: "1 Mes", texto: "¡Mis primeros días en casa!", color: "#4A7C59", img: mes_1 },
        { id: 2, mes: "2 Meses", texto: "¡Mis primeras sonrisas!", color: "#E0A96D", img: mes_2 },
        { id: 3, mes: "3 Meses", texto: "¡Enamorándonos de tus ojitos!", color: "#D98880", img: mes_3 },
        { id: 4, mes: "4 Meses", texto: "¡Tu carita ilumina todos nuestros días!", color: "#C0392B", img: mes_4 },
        { id: 5, mes: "5 Meses", texto: "¡Cada día más grande!", color: "#16A085", img: mes_5},
        { id: 6, mes: "6 Meses", texto: "¡Mis primeros juguetes!", color: "#D4AC0D", img: mes_6 },
        { id: 7, mes: "7 Meses", texto: "¡Explorando el mundo y descubriendo mi sonrisa!", color: "#B03A2E", img: mes_7 },
        { id: 8, mes: "8 Meses", texto: "¡Mi primer globo y un mundo de nuevos juegos!", color: "#689F38", img: mes_8 },
        { id: 9, mes: "9 Meses", texto: "¡Rodeado de amor y felicidad en mis 9 meses!", color: "#D35400", img: mes_9 },
        { id: 10, mes: "10 Meses", texto: "¡Probando nuevos sabores!", color: "#E67E22", img: mes_10 },
        { id: 11, mes: "11 Meses", texto: "¡Más risas y juegos!", color: "#8E44AD", img:mes_11},
        { id: 12, mes: "12 Meses", texto: "¡Ya tengo 1 añito!", color: "#2980B9", img: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="timeline-container" id='historia'>
            <img src={tituloImg} alt="" className='timeline-title'/>

            <div className="timeline-track"> 
                {meses.map((item) => (
                    <div key={item.id} className="timeline-item">
                        {/* Círculo flotante con color dinámico */}
                        <div className="timeline-badge" style={{ backgroundColor: item.color }}>
                            {item.id}
                        </div>

                        {/* Foto en píldora */}
                        <div className="timeline-image-wrapper">
                            <img src={item.img} alt={item.mes} />
                        </div>

                        {/* Textos inferiores con color de texto dinámico */}
                        <div className="timeline-content">
                            <span className="timeline-month" style={{ color: item.color }}>
                                {item.mes}
                            </span>
                            <p className="timeline-description">
                                {item.texto}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}