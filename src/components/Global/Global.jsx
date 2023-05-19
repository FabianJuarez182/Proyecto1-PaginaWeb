/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Grid from '../Grid/Grid'
import Loader from '../Loader/Loader' // Ruta al archivo del componente Loader

function Global() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula una carga de imágenes (sustituye esto con tu lógica de carga de imágenes real)
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Tiempo de carga simulado: 3 segundos

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loader /> // Muestra el loader mientras se cargan las imágenes
      ) : (
        <>
          <Header />
          <Grid />
        </>
      )}
    </div>
  )
}

export default Global
