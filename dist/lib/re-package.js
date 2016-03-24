"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// take a package.json file
// modify it
// resave it

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var file = _ref.file;
    var name = _ref.name;
    var _ref$description = _ref.description;
    var description = _ref$description === undefined ? "" : _ref$description;

    return new Promise(function (resolve, reject) {

        (0, _fs.readFile)(file, function (err, data) {
            if (err) return reject(err);

            (0, _fs.writeFile)(file, JSON.stringify(_extends({}, JSON.parse(data), {
                name: name,
                description: description,
                version: "1.0.0",
                author: undefined,
                repository: undefined
            }), null, 4), function (err) {
                return err ? reject(err) : resolve();
            });
        });
    });
};

var _fs = require("fs");