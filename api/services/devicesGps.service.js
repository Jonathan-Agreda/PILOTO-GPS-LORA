import db from "../config/db.js";

export const getDevicesGps = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM devicesgps";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getDevicesGpsOnly = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM devicesgps WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createDevicesGps = (newGps) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO devicesgps (bus, latitud, longitud, fecha, hora, velocidad) VALUES(?, ?, ?, ?, ?, ?)";
    
    const { bus, latitud, longitud, fecha, hora, velocidad } = newGps;

    db.execute(query, [bus, latitud, longitud, fecha, hora, velocidad])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateDevicesGps = (id, modGps) => {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE devicesgps SET bus = ?, latitud = ?, longitud = ?, fecha = ?, hora = ?, velocidad = ? WHERE id = ?"
      
      const { bus, latitud, longitud, fecha, hora, velocidad } = modGps;
  
      db.execute(query, [bus, latitud, longitud, fecha, hora, velocidad, id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  export const deleteDevicesGps = (id) => {
    return new Promise((resolve, reject) => {
      const query =
        "DELETE FROM devicesgps WHERE id = ?"
  
      db.execute(query, [id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };