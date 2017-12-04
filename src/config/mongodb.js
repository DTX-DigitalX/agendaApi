var port = process.env.MONGO_PORT || 27017;
var uri = 'mongodb://[YOUR_HOST]/agenda';

const options = {
    useMongoClient: true
};

module.exports = mode => {
    return {
        connection: uri,
        options
    };
};
