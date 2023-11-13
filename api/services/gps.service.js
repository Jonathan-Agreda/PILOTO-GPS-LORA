import db from "../config/db.js";

export const getGps = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM gps";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getGpsOnly = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM gps WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createGps = (newGps) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO gps (bus, latitud, longitud, fecha, hora, velocidad) VALUES(?, ?, ?, ?, ?, ?)";
    
    const { bus, latitud, longitud, fecha, hora, velocidad } = newGps;

    db.execute(query, [bus, latitud, longitud, fecha, hora, velocidad])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateGps = (id, modGps) => {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE gps SET bus = ?, latitud = ?, longitud = ?, fecha = ?, hora = ?, velocidad = ? WHERE id = ?"
      
      const { bus, latitud, longitud, fecha, hora, velocidad } = modGps;
  
      db.execute(query, [bus, latitud, longitud, fecha, hora, velocidad, id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  export const deleteGps = (id) => {
    return new Promise((resolve, reject) => {
      const query =
        "DELETE FROM gps WHERE id = ?"
  
      db.execute(query, [id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };