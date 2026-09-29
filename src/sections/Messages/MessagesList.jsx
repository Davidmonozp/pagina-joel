import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './styles/MessagesList.css';
import dejaTuMensaje from '../../assets/deja-tu-mensaje.png';

export default function MessagesList({ nuevoComentario }) {
    const [comentarios, setComentarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Estado para llevar el control de cuáles tarjetas están expandidas (guardando sus IDs o índices)
    const [expandidos, setExpandidos] = useState({});

    const toggleExpandir = (id) => {
        setExpandidos(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Configuración clave: align: 'center' para que la tarjeta activa quede en medio
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setExpandidos({});
    }, [emblaApi]);

    useEffect(() => {
        const obtenerComentarios = async () => {
            try {
                const response = await fetch(
                    'https://comentarios-0ybm.onrender.com/api/comentarios'
                );
                const data = await response.json();
                if (response.ok) {
                    setComentarios(data);
                }
            } catch (error) {
                console.error('Error al obtener comentarios:', error);
            } finally {
                setCargando(false);
            }
        };

        obtenerComentarios();
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());

        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect, comentarios]);

    useEffect(() => {
        if (nuevoComentario) {
            setComentarios((comentariosActuales) => [
                nuevoComentario,
                ...comentariosActuales
            ]);
        }
    }, [nuevoComentario]);

    if (cargando) {
        return <div className="comments-loading">Cargando comentarios...</div>;
    }

    return (
        <div className="wrapper">
            <section className="embla" aria-label="Testimonials carousel">
                <img src={dejaTuMensaje} alt="deja tu mensaje" className='deja-tu-mensaje' />

                {/* Viewport del carrusel */}
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {comentarios.length === 0 ? (
                            <p className="no-comments">Aún no hay comentarios.</p>
                        ) : (
                            comentarios.map((comentario, index) => {
                                const comentarioId = comentario.id || index;
                                const textoOriginal = comentario.comentario || '';
                                const esLargo = textoOriginal.length > 200;
                                const estaExpandido = !!expandidos[comentarioId];

                                // Si es largo y no está expandido, recortamos a 200 caracteres
                                const textoMostrado = esLargo && !estaExpandido
                                    ? textoOriginal.substring(0, 200) + '...'
                                    : textoOriginal;

                                return (
                                    <div
                                        className={`embla__slide ${index === selectedIndex ? 'is-selected' : ''}`}
                                        key={comentarioId}
                                    >
                                        {/* Añadimos clase dinámica si está expandido para controlar el tamaño en CSS */}
                                        <article className={`card ${estaExpandido ? 'card-expanded' : ''}`}>
                                            <div className="card-header">
                                                <div className="avatar">
                                                    <div className="avatar-placeholder">
                                                        {comentario.nombre ? comentario.nombre.charAt(0).toUpperCase() : 'U'}
                                                        {comentario.apellido ? comentario.apellido.charAt(0).toUpperCase() : ''}
                                                    </div>
                                                </div>
                                                <div className="user-info">
                                                    <p className="cite">{comentario.nombre} {comentario.apellido}</p>
                                                    <small className="date">
                                                        {new Date(comentario.created_at).toLocaleString()}
                                                    </small>
                                                </div>
                                            </div>

                                            {/* Texto con soporte de saltos de línea y texto recortado */}
                                            <p className="quote">
                                                "{textoMostrado}"
                                                {/* Botón Ver más / Ver menos */}
                                                {esLargo && (
                                                    <button
                                                        type="button"
                                                        className="btn-ver-mas"
                                                        onClick={() => toggleExpandir(comentarioId)}
                                                    >
                                                        {estaExpandido ? 'Ver menos' : 'Ver más'}
                                                    </button>
                                                )}
                                            </p>



                                            <p className="hearth-comments"><i className="fa-regular fa-heart"></i></p>
                                        </article>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Controles: Botones y Puntos */}
                <div className="embla__controls" aria-label="Carousel controls">
                    <button
                        className="embla__btn embla__btn--prev"
                        type="button"
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                    >
                        <span aria-hidden="true" className="chev chev--left"></span>
                    </button>

                    <div className="embla__dots" role="tablist" aria-label="Choose testimonial">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className="embla__dot"
                                aria-selected={index === selectedIndex ? 'true' : 'false'}
                                aria-label={`Go to testimonial ${index + 1}`}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </div>

                    <button
                        className="embla__btn embla__btn--next"
                        type="button"
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                    >
                        <span aria-hidden="true" className="chev chev--right"></span>
                    </button>
                </div>
            </section>
        </div>
    );
}


// import { useEffect, useState, useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import './styles/MessagesList.css';
// import dejaTuMensaje from '../../assets/deja-tu-mensaje.png';

// export default function MessagesList({ nuevoComentario }) {
//     const [comentarios, setComentarios] = useState([]);
//     const [cargando, setCargando] = useState(true);

//     // Configuración clave: align: 'center' para que la tarjeta activa quede en medio
//     const [emblaRef, emblaApi] = useEmblaCarousel({
//         loop: true,
//         align: 'center',
//         skipSnaps: false
//     });

//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const [scrollSnaps, setScrollSnaps] = useState([]);

//     const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//     const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
//     const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//     }, [emblaApi]);

//     useEffect(() => {
//         const obtenerComentarios = async () => {
//             try {
//                 const response = await fetch(
//                     'https://comentarios-0ybm.onrender.com/api/comentarios'
//                 );
//                 const data = await response.json();
//                 if (response.ok) {
//                     setComentarios(data);
//                 }
//             } catch (error) {
//                 console.error('Error al obtener comentarios:', error);
//             } finally {
//                 setCargando(false);
//             }
//         };

//         obtenerComentarios();
//     }, []);

//     useEffect(() => {
//         if (!emblaApi) return;

//         onSelect();
//         setScrollSnaps(emblaApi.scrollSnapList());

//         emblaApi.on('select', onSelect);
//         emblaApi.on('reInit', onSelect);

//         return () => {
//             emblaApi.off('select', onSelect);
//             emblaApi.off('reInit', onSelect);
//         };
//     }, [emblaApi, onSelect, comentarios]);

//     useEffect(() => {
//         if (nuevoComentario) {
//             setComentarios((comentariosActuales) => [
//                 nuevoComentario,
//                 ...comentariosActuales
//             ]);
//         }
//     }, [nuevoComentario]);

//     if (cargando) {
//         return <div className="comments-loading">Cargando comentarios...</div>;
//     }

//     return (
//         <div className="wrapper">
//             <section className="embla" aria-label="Testimonials carousel">
//             <img src={dejaTuMensaje} alt="deja tu mensaje" className='deja-tu-mensaje'/>

//                 {/* Viewport del carrusel */}
//                 <div className="embla__viewport" ref={emblaRef}>
//                     <div className="embla__container">
//                         {comentarios.length === 0 ? (
//                             <p className="no-comments">Aún no hay comentarios.</p>
//                         ) : (
//                             comentarios.map((comentario, index) => (
//                                 <div
//                                     className={`embla__slide ${index === selectedIndex ? 'is-selected' : ''}`}
//                                     key={comentario.id || index}
//                                 >
//                                     <article className="card">
//                                         <div className="card-header">
//                                             <div className="avatar">
//                                                 <div className="avatar-placeholder">
//                                                     {comentario.nombre ? comentario.nombre.charAt(0).toUpperCase() : 'U'}
//                                                     {comentario.apellido ? comentario.apellido.charAt(0).toUpperCase() : ''}
//                                                 </div>
//                                             </div>
//                                             <div className="user-info">
//                                                 <p className="cite">{comentario.nombre} {comentario.apellido}</p>
//                                                 <small className="date">
//                                                     {new Date(comentario.created_at).toLocaleString()}
//                                                 </small>
//                                             </div>
//                                         </div>
//                                         <p className="quote">"{comentario.comentario}"</p>
//                                         <p className="hearth-comments">    <i className="fa-regular fa-heart"></i> </p>
//                                     </article>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>

//                 {/* Controles: Botones y Puntos */}
//                 <div className="embla__controls" aria-label="Carousel controls">
//                     <button
//                         className="embla__btn embla__btn--prev"
//                         type="button"
//                         onClick={scrollPrev}
//                         aria-label="Previous testimonial"
//                     >
//                         <span aria-hidden="true" className="chev chev--left"></span>
//                     </button>

//                     <div className="embla__dots" role="tablist" aria-label="Choose testimonial">
//                         {scrollSnaps.map((_, index) => (
//                             <button
//                                 key={index}
//                                 type="button"
//                                 className="embla__dot"
//                                 aria-selected={index === selectedIndex ? 'true' : 'false'}
//                                 aria-label={`Go to testimonial ${index + 1}`}
//                                 onClick={() => scrollTo(index)}
//                             />
//                         ))}
//                     </div>

//                     <button
//                         className="embla__btn embla__btn--next"
//                         type="button"
//                         onClick={scrollNext}
//                         aria-label="Next testimonial"
//                     >
//                         <span aria-hidden="true" className="chev chev--right"></span>
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// }