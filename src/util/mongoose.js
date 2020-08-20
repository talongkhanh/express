module.exports = {
    multipleToObject: function (docs) {
        return docs.map((doc) => doc.toObject());
    },
};
