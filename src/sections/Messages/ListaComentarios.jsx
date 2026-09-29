import { useState, useEffect } from 'react';
import './styles/ListaComentarios.css';

export const ListaComentarios = () => {
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [adminKey, setAdminKey] = useState('');
    const [error, setError] = useState('');

    const obtenerComentarios = async () => {
        try {
            const response = await fetch('https://comentarios-0ybm.onrender.com/api/comentarios');
            const data = await response.json();
            setComentarios(data);
        } catch (err) {
            console.error('Error al cargar comentarios:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerComentarios();
    }, []);

    const handleEliminar = async (id) => {
        setError('');

        if (!adminKey.trim()) {
            setError('Por favor, ingresa la clave de administrador para eliminar.');
            return;
        }

        if (!window.confirm('¿Estás seguro de que deseas eliminar este comentario?')) {
            return;
        }

        try {
            const response = await fetch(`https://comentarios-0ybm.onrender.com/api/comentarios/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-key': adminKey
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'No se pudo eliminar el comentario');
            }

            setComentarios(comentarios.filter(c => c.id !== id));
            alert('Comentario eliminado con éxito');

        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    if (loading) return <div className="admin-loading">Cargando comentarios...</div>;

    return (
        <div className="admin-comments-container">
            <h2 className="admin-title">Panel de Administración - Comentarios</h2>

            {/* Caja de credenciales */}
            <div className="admin-auth-box">
                <label className="admin-label">
                    Clave de Administrador (para eliminar):
                </label>
                <input
                    type="password"
                    className="admin-input"
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    placeholder="Ingresa tu ADMIN_KEY"
                />
                {error && <p className="admin-error-text">{error}</p>}
            </div>

            {/* Listado */}
            <div className="admin-list">
                {comentarios.length === 0 ? (
                    <p className="admin-empty-text">No hay comentarios aún.</p>
                ) : (
                    comentarios.map((c) => (
                        <div className="admin-comment-card" key={c.id}>
                            <div className="admin-comment-info">
                                <h4 className="admin-comment-author">{c.nombre} {c.apellido}</h4>
                                <p className="admin-comment-text">{c.comentario}</p>
                                <small className="admin-comment-date">
                                    {new Date(c.created_at).toLocaleString()}
                                </small>
                            </div>

                            <button
                                type="button"
                                className="admin-delete-btn"
                                onClick={() => handleEliminar(c.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};













// import { useState, useEffect } from 'react';

// export const ListaComentarios = () => {
//     const [comentarios, setComentarios] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [adminKey, setAdminKey] = useState(''); // Estado para la clave de administrador
//     const [error, setError] = useState('');

//     // 1. Cargar comentarios al montar el componente
//     const obtenerComentarios = async () => {
//         try {
//             const response = await fetch('https://comentarios-0ybm.onrender.com/api/comentarios');
//             const data = await response.json();
//             setComentarios(data);
//         } catch (err) {
//             console.error('Error al cargar comentarios:', err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         obtenerComentarios();
//     }, []);

//     // 2. Función para eliminar un comentario
//     const handleEliminar = async (id) => {
//         setError('');

//         if (!adminKey.trim()) {
//             setError('Por favor, ingresa la clave de administrador para eliminar.');
//             return;
//         }

//         if (!window.confirm('¿Estás seguro de que deseas eliminar este comentario?')) {
//             return;
//         }

//         try {
//             const response = await fetch(`https://comentarios-0ybm.onrender.com/api/comentarios/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-admin-key': adminKey // Enviamos la clave por los headers
//                 }
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.error || 'No se pudo eliminar el comentario');
//             }

//             // Actualizamos la lista local removiendo el comentario eliminado
//             setComentarios(comentarios.filter(c => c.id !== id));
//             alert('Comentario eliminado con éxito');

//         } catch (err) {
//             console.error(err);
//             setError(err.message);
//         }
//     };

//     if (loading) return <div>Cargando comentarios...</div>;

//     return (
//         <>
      
//             <div style={{  maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif',  marginTop: '120px' }}>
//                 <h2>Comentarios</h2>


//                 {/* Input para colocar la clave de administrador requerida por el backend */}
//                 <div style={{ marginBottom: '20px', padding: '10px', background: '#f4f4f4', borderRadius: '5px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>
//                         Clave de Administrador (para eliminar):
//                     </label>
//                     <input
//                         type="password"
//                         value={adminKey}
//                         onChange={(e) => setAdminKey(e.target.value)}
//                         placeholder="Ingresa tu ADMIN_KEY"
//                         style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//                     />
//                     {error && <p style={{ color: 'red', fontSize: '13px', marginTop: '5px' }}>{error}</p>}
//                 </div>

//                 {/* Lista de comentarios */}
//                 {comentarios.length === 0 ? (
//                     <p>No hay comentarios aún.</p>
//                 ) : (
//                     comentarios.map((c) => (
//                         <div
//                             key={c.id}
//                             style={{
//                                 border: '1px solid #ddd',
//                                 padding: '15px',
//                                 borderRadius: '6px',
//                                 marginBottom: '10px',
//                                 display: 'flex',
//                                 justifyContent: 'space-between',
//                                 alignItems: 'flex-start'
//                             }}
//                         >
//                             <div>
//                                 <h4 style={{ margin: '0 0 5px 0' }}>{c.nombre} {c.apellido}</h4>
//                                 <p style={{ margin: '0 0 10px 0', color: '#333' }}>{c.comentario}</p>
//                                 <small style={{ color: '#777' }}>{new Date(c.created_at).toLocaleString()}</small>
//                             </div>

//                             {/* Botón de eliminar */}
//                             <button
//                                 onClick={() => handleEliminar(c.id)}
//                                 style={{
//                                     backgroundColor: '#ff4d4d',
//                                     color: 'white',
//                                     border: 'none',
//                                     padding: '6px 12px',
//                                     borderRadius: '4px',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 Eliminar
//                             </button>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </>
//     );
// };