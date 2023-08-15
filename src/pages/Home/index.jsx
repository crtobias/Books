import React, { useState } from "react";
import styles from "./home.module.css";
import { books } from "../../assets";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
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
            className={`${styles.app} ${modoClaro ? styles.modoClaro : styles.modoOscuro
                }`}
        >
            <h1 className={styles.title}>BookVerse</h1>
            <Switch
                className={styles.modos}
                defaultSelected
                size="lg"
                color="success"
                startContent={<p>🌞</p>}
                endContent={<p>🌙</p>}
                onClick={toggleModo}
            >
                <p className={styles.switch}></p>
            </Switch>

            <div className={styles.filtros}>
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
                    
                    
                </div>
                <Button  color="primary" variant="ghost" className={styles.reset} onClick={resetFiltros} >
                    reset
                </Button>
               
            </div>

            <div className={styles.libros}>
                {librosAMostrar.map((libro, index) => (

                    <Card key={index} className={styles.libro} onClick={() => handleLibroClick(index)} shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                className={styles.libroimg}
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={libro.book.title}
                                src={libro.book.cover}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{libro.book.title}</b>
                            <p className="text-default-500">{libro.book.pages}</p>
                        </CardFooter>
                        {libroSeleccionado === index && (
                            <div className={styles.libroinfo}>
                                <p>Detalles adicionales del libro:</p>
                                <p>Autor: {libro.book.author.name}</p>
                                <p>Descripción: {libro.book.synopsis}</p>
                                <p>Fecha: {libro.book.year}</p>
                            </div>
                        )}
                    </Card>



                ))}
            </div>

            <div className={styles.paginacion}>

                <Button color="primary" onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}>
                    anterior
                </Button>

                <span>Página {currentPage}</span>

                <Button color="primary" onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= filteredLibros.length}>
                    siguiente
                </Button>
            </div>
        </div>
    );
};
