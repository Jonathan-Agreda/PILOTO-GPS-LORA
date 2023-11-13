import db from "../config/db.js";

export const getPanico = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM panico";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getPanicoOnly = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM panico WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createPanico = (newPanico) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO panico (bus, fecha, hora, boton) VALUES(?, ?, ?, ?)";
    
    const { bus, fecha, hora, boton } = newPanico;

    db.execute(query, [bus, fecha, hora, boton])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updatePanico = (id, modPanico) => {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE panico SET bus = ?, fecha = ?, hora = ?, boton = ? WHERE id = ?"
      
      const { bus, fecha, hora, boton } = modPanico;
  
      db.execute(query, [bus, fecha, hora, boton, id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  export const deletePanico = (id) => {
    return new Promise((resolve, reject) => {
      const query =
        "DELETE FROM panico WHERE id = ?"
  
      db.execute(query, [id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };