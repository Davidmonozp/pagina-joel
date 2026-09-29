import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './sections/Hero/Hero'
import LineaDeTiempoMeses from './sections/TimelineMonths/LineaDeTiempoMeses'
import PhotoGallery from './sections/PhotoGallery/PhotoGallery'
import Messages from './sections/Messages/Messages'
import { ListaComentarios } from './sections/Messages/ListaComentarios'
import Footer from './sections/Footer/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Ruta principal (Home) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LineaDeTiempoMeses />
                <PhotoGallery />
                <Messages />
                <Footer />
              </>
            }
          />

          {/* Ruta exclusiva para administrar y eliminar comentarios */}
          <Route
            path="/admin/comentarios"
            element={<ListaComentarios />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
