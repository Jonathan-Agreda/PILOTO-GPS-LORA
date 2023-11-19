import * as devicesPanicoServices from "../services/devicesPanico.service.js";

export const getDevicesPanico = (req, res) => {
    devicesPanicoServices
        .getDevicesPanico()
        .then((result) => {
        res.status(200).json({
            message: "All Devices-Bottons retrieved successfully",
            data: result[0],
        });
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};

export const getDevicesPanicoOnly = (req, res) => {
    const { id } = req.params;
    devicesPanicoServices
    .getDevicesPanicoOnly(id)
    .then((result) => {
        res.status(200).json({
            message: "Only Device-Button retrieved successfully",
            data: result[0],
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const createDevicesPanico = (req, res) => {
    const newPanico = req.body;
    devicesPanicoServices
    .createDevicesPanico(newPanico)
    .then((result) => {
        res.status(200).json({
            message: "New Device-Button created successfully",
            data: newPanico,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const updateDevicesPanico = (req, res) => {
    const { id } = req.params;
    const modPanico = req.body;
    devicesPanicoServices
    .updateDevicesPanico(id, modPanico)
    .then((result) => {
        res.status(200).json({
            message: "Device-Button updated successfully",
            data: modPanico,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const deleteDevicesPanico = (req, res) => {
    const { id } = req.params;
    devicesPanicoServices
    .deleteDevicesPanico(id)
    .then((result) => {
        res.status(200).json({
            message: "Device-Button deleted successfully",
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};
