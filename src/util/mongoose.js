module.exports = {
    multipleToObject: function (docs) {
        return docs.map((doc) => doc.toObject());
    },
    singleToObject: function(doc) {
        return doc?doc.toObject():doc;
    }
};
