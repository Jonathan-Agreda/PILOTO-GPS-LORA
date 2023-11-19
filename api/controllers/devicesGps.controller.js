import * as devicesGpsServices from "../services/devicesGps.service.js";

export const getDevicesGps = (req, res) => {
    devicesGpsServices
        .getDevicesGps()
        .then((result) => {
        res.status(200).json({
            message: "All Devices-GPS retrieved successfully",
            data: result[0],
        });
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};

export const getDevicesGpsOnly = (req, res) => {
    const { id } = req.params;
    devicesGpsServices
    .getDevicesGpsOnly(id)
    .then((result) => {
        res.status(200).json({
            message: "Only Device-GPS retrieved successfully",
            data: result[0],
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const createDevicesGps = (req, res) => {
    const newGps = req.body;
    devicesGpsServices
    .createDevicesGps(newGps)
    .then((result) => {
        res.status(200).json({
            message: "New Device-GPS created successfully",
            data: newGps,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const updateDevicesGps = (req, res) => {
    const { id } = req.params;
    const modGps = req.body;
    devicesGpsServices
    .updateDevicesGps(id, modGps)
    .then((result) => {
        res.status(200).json({
            message: "Device-GPS updated successfully",
            data: modGps,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const deleteDevicesGps = (req, res) => {
    const { id } = req.params;
    devicesGpsServices
    .deleteDevicesGps(id)
    .then((result) => {
        res.status(200).json({
            message: "Device-GPS deleted successfully",
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};
