const controller = {}

/*
  CREATE TABLE IF NOT EXISTS Videojuegos(
      id_videojuego INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      lanzamiento DATE,
      genero VARCHAR(255),
      desarrollador VARCHAR(255),
      ESRB_rating VARCHAR(255)
  )
*/

controller.add = (req, res) => 
{
  req.getConnection((err, connection) =>
  {
    if (err)
      return res.status(500).send({ error: 'Error de conexión a la db.' });

    const data = req.body
    console.log(req.body)
    connection.query('INSERT INTO Videojuegos(titulo, lanzamiento, genero, desarrollador, ESRB_rating) VALUES (?,?,?,?,?)', 
    ['asd', data.fechaLanzamiento, data.genero, data.desarrollador, data.ESRB], (err, videojuego) =>
    {
      if(err)
        return res.status(500).send({ error: 'Error al insertar videojuego: ' + err });
      return res.status(200).send();
    })
  })
}

controller.si = (req, res) => 
{
  return res.status(200).send();
}

module.exports = controller