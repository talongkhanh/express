module.exports = {
    multipleToObject: (docs) => {
        return docs.map((doc) => doc.toObject());
    },
    toObject: (doc) => {
        return doc.toObject();
    },
};
