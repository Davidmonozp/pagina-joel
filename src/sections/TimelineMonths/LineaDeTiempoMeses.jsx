import React from 'react';
import './styles/LineaTiempo.css';
import joel1Img from '../../assets/joel1.jpeg';
import joel2Img from '../../assets/joel2.jpeg';
import tituloImg from '../../assets/titulo-mes.png';



export default function LineaDeTiempoMeses() {
    const meses = [
        { id: 1, mes: "1 Mes", texto: "Mis primeros días en casa", color: "#4A7C59", img: joel1Img },
        { id: 2, mes: "2 Meses", texto: "Mis primeras sonrisas", color: "#E0A96D", img: joel2Img },
        { id: 3, mes: "3 Meses", texto: "Descubriendo el mundo", color: "#D98880", img: "https://via.placeholder.com/150" },
        { id: 4, mes: "4 Meses", texto: "Más risas y juegos", color: "#C0392B", img: "https://via.placeholder.com/150" },
        { id: 5, mes: "5 Meses", texto: "Ya me volteo mejor", color: "#16A085", img: "https://via.placeholder.com/150" },
        { id: 6, mes: "6 Meses", texto: "Probando mis primeros sabores", color: "#D4AC0D", img: "https://via.placeholder.com/150" },
        { id: 7, mes: "7 Meses", texto: "Me encanta explorar", color: "#B03A2E", img: "https://via.placeholder.com/150" },
        { id: 8, mes: "8 Meses", texto: "Mis primeros gateos", color: "#689F38", img: "https://via.placeholder.com/150" },
        { id: 9, mes: "9 Meses", texto: "De pie por primera vez", color: "#D35400", img: "https://via.placeholder.com/150" },
        { id: 10, mes: "10 Meses", texto: "Cada día más grande", color: "#E67E22", img: "https://via.placeholder.com/150" },
        { id: 11, mes: "11 Meses", texto: "Nuevas aventuras", color: "#8E44AD", img: "https://via.placeholder.com/150" },
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