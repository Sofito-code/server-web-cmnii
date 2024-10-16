import db from '../../lib/db';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const {id, name, lastName, age, gender, address, phone } = req.body;

    // Insertar datos en la base de datos
    db.run(`INSERT INTO person (id, name, lastName, age, gender, address, phone) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, name, lastName, age, gender, address, phone],
      function (err) {
        if (err) {
          console.error('Error al insertar datos:', err.message);
          res.status(500).json({ error: 'Error al insertar los datos' });
        } else {
          res.status(200).json({ id: this.lastID, message: 'Datos insertados exitosamente' });
        }
      }
    );
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
