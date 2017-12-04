var port = process.env.MONGO_PORT || 27017;
var uri = 'mongodb://reinaldonaville:Duratex2017@ds235775.mlab.com:35775/agenda';

const options = {
    useMongoClient: true
};

module.exports = mode => {
    return {
        connection: uri,
        options
    };
};
