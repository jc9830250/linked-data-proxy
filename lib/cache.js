
require("../config/database.js");

cache_get = function (_url, _expire, _callback) {
    if (typeof(_expire) === "function") {
        _callback = _expire;
        _expire = undefined;
    }
    if (_expire === undefined) {
        _expire = CONFIG.cache_expire_hour * 60 * 60 * 1000;
    }
    
    tableCache.findOne({
        where: {
            url: _url
        },
        order: [["date", "DESC"]]
    }).then(function (_cache) {
        if (_cache !== null) {
            console.log([Date.now(), _cache.date, (Date.now() - _cache.date), _expire]);
        }
        else {
            console.log("cache is null");
        }
        if (_cache === null
                || (Date.now() - _cache.date) > _expire) {
            _callback(false);
        }
        else {
            console.log("cache get from: " + _url);
            _callback(_cache.response);
        }
    });
};

// ------------------------

cache_set = function (_url, _response, _callback) {
    
    var _find_options = {
        where: {
            url: _url,
            response: _response
        },
        order: [["date", "DESC"]]
    };
    
    var _then = function () {
        console.log("cache set from: " + _url);
        if (typeof(_callback) === "function") {
            _callback();
        }
    };
    
    tableCache.findOne(_find_options).then(function (_cache) {
        if (_cache === null) {
            _cache = {
                date: Date.now(),
                url: _url,
                response: _response
            };
            tableCache.create(_cache).then(_then);
        }   //if (_cache === null) {
        else {
            tableCache.update({
                date: Date.now()
            }, _find_options).then(_then);
        }   //else {
    });
    
    
    
            
};