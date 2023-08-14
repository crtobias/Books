import React, { useState } from "react";
import styles from "./home.module.css";
import { books } from "../../assets";
import { Accordion , AccordionItem } from "@nextui-org/react" ; 
export const Home = () => {
    const [modoClaro, setModoClaro] = useState(true);
    const [generoFiltro, setGeneroFiltro] = useState("todos");
    const [minPaginasFiltro, setMinPaginasFiltro] = useState(1);
    const [libroSeleccionado, setLibroSeleccionado] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const librosPorPagina = 6; // Cantidad de libros por página

    const toggleModo = () => {
        setModoClaro((prevState) => !prevState);
    };

    const lib = books;

    const generosUnicos = [...new Set(lib.library.map((libro) => libro.book.genre))];

    const filteredLibros = lib.library.filter((libro) => {
        return (
            (generoFiltro === "todos" || libro.book.genre === generoFiltro) &&
            libro.book.pages >= minPaginasFiltro
        );
    });

    const startIndex = (currentPage - 1) * librosPorPagina;
    const endIndex = startIndex + librosPorPagina;
    const librosAMostrar = filteredLibros.slice(startIndex, endIndex);

    const resetFiltros = () => {
        setGeneroFiltro("todos");
        setMinPaginasFiltro(1);
    };

    const handleLibroClick = (index) => {
        setLibroSeleccionado(index === libroSeleccionado ? null : index);
    };

    return (
        <div
            className={`${styles.app} ${
                modoClaro ? styles.modoClaro : styles.modoOscuro
            }`}
        >
            <h1>Libreria</h1>
            <button className={styles.modos} onClick={toggleModo}>
                ♦
            </button>

            <div>
                <div>
                    <label htmlFor="genero">Selecciona un género</label>
                    <select
                        id="genero"
                        name="genero"
                        value={generoFiltro}
                        onChange={(e) => setGeneroFiltro(e.target.value)}
                    >
                        <option value="todos">Todos</option>
                        {generosUnicos.map((genero) => (
                            <option key={genero} value={genero}>
                                {genero}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="minPaginas">Minimo de Paginas</label>
                    <input
                        type="number"
                        id="minPaginas"
                        min="1"
                        max="5000"
                        value={minPaginasFiltro}
                        onChange={(e) => setMinPaginasFiltro(parseInt(e.target.value))}
                    /> 
                    <br />
                    <button onClick={resetFiltros}>Reiniciar Filtros</button>
                </div>
            </div>

            <div className={styles.libros}>
                {librosAMostrar.map((libro, index) => (
                    <div key={index} className={styles.libro} onClick={() => handleLibroClick(index)}>
                        <img
                            className={styles.libroimg}
                            src={libro.book.cover}
                            alt=""
                        />
                        <h3>{libro.book.title}</h3>
                        <h3>{libro.book.genre}</h3>

                        {libroSeleccionado === index && (
                            <div className={styles.libroinfo}>
                                <p>Detalles adicionales del libro:</p>
                                <p>Autor: {libro.book.author.name}</p>
                                <p>Descripción: {libro.book.synopsis}</p>
                                <p>Fecha: {libro.book.year}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.paginacion}>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= filteredLibros.length}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
