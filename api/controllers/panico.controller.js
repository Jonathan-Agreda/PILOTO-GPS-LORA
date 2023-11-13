import * as panicoServices from "../services/panico.service.js";

export const getPanico = (req, res) => {
    panicoServices
        .getPanico()
        .then((result) => {
        res.status(200).json({
            message: "All Bottons retrieved successfully",
            data: result[0],
        });
        })
        .catch((err) => {
        res.status(500).send(err);
        });
};

export const getPanicoOnly = (req, res) => {
    const { id } = req.params;
    panicoServices
    .getPanicoOnly(id)
    .then((result) => {
        res.status(200).json({
            message: "Only Button retrieved successfully",
            data: result[0],
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const createPanico = (req, res) => {
    const newPanico = req.body;
    panicoServices
    .createPanico(newPanico)
    .then((result) => {
        res.status(200).json({
            message: "New Button created successfully",
            data: newPanico,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const updatePanico = (req, res) => {
    const { id } = req.params;
    const modPanico = req.body;
    panicoServices
    .updatePanico(id, modPanico)
    .then((result) => {
        res.status(200).json({
            message: "Button updated successfully",
            data: modPanico,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const deletePanico = (req, res) => {
    const { id } = req.params;
    panicoServices
    .deletePanico(id)
    .then((result) => {
        res.status(200).json({
            message: "Button deleted successfully",
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};
