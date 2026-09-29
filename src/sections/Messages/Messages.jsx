import { useState } from 'react';
import MessagesList from './MessagesList';
import './styles/Messages.css';
import Swal from 'sweetalert2';

export default function Messages() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [comentario, setComentario] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState(null);
    const [nuevoComentario, setNuevoComentario] = useState(null);

    // Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);
        setMensaje(null);

        try {
            const response = await fetch(
                'https://comentarios-0ybm.onrender.com/api/comentarios',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre,
                        apellido,
                        comentario
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                // Limpiamos los campos y guardamos el comentario nuevo
                setNombre('');
                setApellido('');
                setComentario('');
                setNuevoComentario(data.data);
                setIsModalOpen(false); // Cierra el modal

                // Alerta bonita de éxito con SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Tu mensaje ha sido publicado con éxito.',
                    confirmButtonColor: '#658c73',
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#ffffff',
                    color: '#2c2c2c',
                    customClass: {
                        popup: 'custom-popup-show',
                        // Si quieres aplicar animación de salida limpia:
                        // hide: 'custom-popup-hide' 
                    },
                    showClass: {
                        popup: 'custom-popup-show'
                    },
                    hideClass: {
                        popup: 'custom-popup-hide'
                    }
                });

            } else {
                // Alerta de error proveniente del servidor
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error || 'Ocurrió un error al enviar.',
                    confirmButtonColor: '#658c73'
                });
            }

        } catch (error) {
            console.error('Error de red:', error);

            // Alerta de error de conexión
            Swal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: 'No se pudo conectar con el servidor.',
                confirmButtonColor: '#658c73'
            });
        } finally {
            setEnviando(false);
        }
    };

    return (
        <>
            <MessagesList nuevoComentario={nuevoComentario} />

            {/* --- CONTENEDOR PRINCIPAL ESTILO IMAGEN --- */}
            <div className="messages-container">
                {/* Barra de texto simulada (Disparador del Modal) */}
                <div
                    className="messages-trigger-input"
                    onClick={() => setIsModalOpen(true)}
                >
                    Escribe tu mensaje...
                </div>

                {/* Botón Enviar Mensaje */}
                <button
                    className="messages-submit-btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    <span>Enviar mensaje</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="currentColor"
                    >
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                    </svg>
                </button>
            </div>

            {/* Mensaje de éxito o error flotante fuera de la barra */}
            {mensaje && (
                <div className="messages-feedback">
                    <p className={mensaje.tipo}>
                        {mensaje.texto}
                    </p>
                </div>
            )}

            {/* --- MODAL FLOTANTE CON EL FORMULARIO --- */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {/* Botón para cerrar modal */}
                        <button
                            className="modal-close-btn"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>

                        <h3 className="modal-title">
                            Escribe tu mensaje
                        </h3>

                        <form className="modal-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Apellido:</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Mensaje:</label>
                                <textarea
                                    className="form-textarea input-mensaje"
                                    placeholder='Escribe tu mensaje aquí...'
                                    value={comentario}
                                    onChange={(e) => setComentario(e.target.value)}
                                    required
                                    rows="4"
                                />
                            </div>

                            <button
                                type="submit"
                                className="form-submit-btn"
                                disabled={enviando}
                            >
                                {enviando ? 'Enviando...' : 'Enviar mensaje'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

// import { useState } from 'react';
// import MessagesList from './MessagesList';

// export default function Messages() {

//     const [nombre, setNombre] = useState('');
//     const [apellido, setApellido] = useState('');
//     const [comentario, setComentario] = useState('');
//     const [enviando, setEnviando] = useState(false);
//     const [mensaje, setMensaje] = useState(null);
//     const [nuevoComentario, setNuevoComentario] = useState(null);

//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         setEnviando(true);
//         setMensaje(null);

//         try {

//             const response = await fetch(
//                 'https://comentarios-0ybm.onrender.com/api/comentarios',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         nombre,
//                         apellido,
//                         comentario
//                     }),
//                 }
//             );

//             const data = await response.json();

//             if (response.ok) {

//                 setMensaje({
//                     tipo: 'exito',
//                     texto: '¡Comentario enviado con éxito!'
//                 });

//                 setNombre('');
//                 setApellido('');
//                 setComentario('');

//                 // Guardamos el comentario recién creado
//                 setNuevoComentario(data.data);

//             } else {

//                 setMensaje({
//                     tipo: 'error',
//                     texto: data.error || 'Ocurrió un error al enviar.'
//                 });
//             }

//         } catch (error) {

//             console.error('Error de red:', error);

//             setMensaje({
//                 tipo: 'error',
//                 texto: 'No se pudo conectar con el servidor.'
//             });

//         } finally {

//             setEnviando(false);
//         }
//     };

//     return (
//         <>
//             <MessagesList
//                 nuevoComentario={nuevoComentario}
//             />

//             <div
//                 style={{
//                     maxWidth: '400px',
//                     margin: '20px auto',
//                     padding: '20px',
//                     border: '1px solid #ccc',
//                     borderRadius: '8px'
//                 }}
//             >

//                 <h3>Deja tu comentario</h3>

//                 <form
//                     onSubmit={handleSubmit}
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: '10px'
//                     }}
//                 >

//                     <div>
//                         <label
//                             style={{
//                                 display: 'block',
//                                 fontSize: '14px'
//                             }}
//                         >
//                             Nombre:
//                         </label>

//                         <input
//                             type="text"
//                             value={nombre}
//                             onChange={(e) => setNombre(e.target.value)}
//                             required
//                             style={{
//                                 width: '100%',
//                                 padding: '8px',
//                                 boxSizing: 'border-box'
//                             }}
//                         />
//                     </div>

//                     <div>
//                         <label
//                             style={{
//                                 display: 'block',
//                                 fontSize: '14px'
//                             }}
//                         >
//                             Apellido:
//                         </label>

//                         <input
//                             type="text"
//                             value={apellido}
//                             onChange={(e) => setApellido(e.target.value)}
//                             required
//                             style={{
//                                 width: '100%',
//                                 padding: '8px',
//                                 boxSizing: 'border-box'
//                             }}
//                         />
//                     </div>

//                     <div>
//                         <label
//                             style={{
//                                 display: 'block',
//                                 fontSize: '14px'
//                             }}
//                         >
//                             Comentario:
//                         </label>

//                         <textarea
//                             value={comentario}
//                             onChange={(e) => setComentario(e.target.value)}
//                             required
//                             rows="4"
//                             style={{
//                                 width: '100%',
//                                 padding: '8px',
//                                 boxSizing: 'border-box'
//                             }}
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={enviando}
//                         style={{
//                             padding: '10px',
//                             background: '#007bff',
//                             color: '#fff',
//                             border: 'none',
//                             borderRadius: '4px',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         {enviando
//                             ? 'Enviando...'
//                             : 'Publicar Comentario'
//                         }
//                     </button>

//                 </form>

//                 {mensaje && (
//                     <p
//                         style={{
//                             marginTop: '10px',
//                             color: mensaje.tipo === 'exito'
//                                 ? 'green'
//                                 : 'red'
//                         }}
//                     >
//                         {mensaje.texto}
//                     </p>
//                 )}

//             </div>
//         </>
//     );
// }