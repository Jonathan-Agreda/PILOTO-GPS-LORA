import db from "../config/db.js";

export const getDevicesPanico = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM devicespanico";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getDevicesPanicoOnly = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM devicespanico WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createDevicesPanico = (newPanico) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO devicespanico (bus, fecha, hora, boton) VALUES(?, ?, ?, ?)";
    
    const { bus, fecha, hora, boton } = newPanico;

    db.execute(query, [bus, fecha, hora, boton])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateDevicesPanico = (id, modPanico) => {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE devicespanico SET bus = ?, fecha = ?, hora = ?, boton = ? WHERE id = ?"
      
      const { bus, fecha, hora, boton } = modPanico;
  
      db.execute(query, [bus, fecha, hora, boton, id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  export const deleteDevicesPanico = (id) => {
    return new Promise((resolve, reject) => {
      const query =
        "DELETE FROM devicespanico WHERE id = ?"
  
      db.execute(query, [id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };