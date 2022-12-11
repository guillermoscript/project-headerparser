function getIp(req) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}

function getLanguage(req) {
    return req.headers['accept-language'];
}

function getDevice (req) {
    return req.headers['user-agent'];
}

function getHeaderParser(req) {
    return {
        ipaddress: getIp(req),
        language: getLanguage(req),
        software: getDevice(req)
    }
}

module.exports = {
    getHeaderParser
};