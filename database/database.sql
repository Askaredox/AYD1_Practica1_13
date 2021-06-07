CREATE TABLE IF NOT EXISTS Videojuegos(
    id_videojuego INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    lanzamiento DATE,
    genero VARCHAR(255),
    desarrollador VARCHAR(255),
    ESRB_rating VARCHAR(255)
)

INSERT INTO Videojuegos(titulo, lanzamiento, genero, desarrollador, ESRB_rating)
VALUES ()