import * as gpsServices from "../services/gps.service.js";

export const getGps = (req, res) => {
    gpsServices
        .getGps()
        .then((result) => {
        res.status(200).json({
            message: "All GPS retrieved successfully",
            data: result[0],
        });
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};

export const getGpsOnly = (req, res) => {
    const { id } = req.params;
    gpsServices
    .getGpsOnly(id)
    .then((result) => {
        res.status(200).json({
            message: "Only GPS retrieved successfully",
            data: result[0],
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const createGps = (req, res) => {
    const newGps = req.body;
    gpsServices
    .createGps(newGps)
    .then((result) => {
        res.status(200).json({
            message: "New GPS created successfully",
            data: newGps,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const updateGps = (req, res) => {
    const { id } = req.params;
    const modGps = req.body;
    gpsServices
    .updateGps(id, modGps)
    .then((result) => {
        res.status(200).json({
            message: "GPS updated successfully",
            data: modGps,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const deleteGps = (req, res) => {
    const { id } = req.params;
    gpsServices
    .deleteGps(id)
    .then((result) => {
        res.status(200).json({
            message: "GPS deleted successfully",
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};
