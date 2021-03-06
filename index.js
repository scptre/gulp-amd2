var through = require('through2');
var amd     = require('amd-parser2');

function gulpAmd(params) {
    function transform(file, enc, callback) {
        params = params || {};
        var parsedFile = amd.parse(file);
        var modName = params.setName;
        
        if (params.getModuleName) {
            modName = params.getModuleName(file);
        }

        params.clear     && parsedFile.clear();
        params.remove    && parsedFile.remove(params.remove);
        params.add       && parsedFile.add(params.add);
        params.clearName && parsedFile.clearName();
        modName          && parsedFile.setName(modName);

        parsedFile.save();

        callback(null, file);
    }

    return through.obj(transform);
}

module.exports = gulpAmd;
