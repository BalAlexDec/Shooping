"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Movie_1 = require("./Movie");
var fs = require('fs');
var Imdb = /** @class */ (function () {
    function Imdb(movie) {
        this.movie = movie;
    }
    Imdb.prototype.escribirEnFicheroJson = function (nombreFichero) {
        var rawdata = this.movie;
        var data = JSON.stringify(rawdata, null, 2);
        //console.log(data);
        fs.writeFileSync(nombreFichero + ".json", data, function (err) {
            if (err)
                throw err;
            console.log('Los datos se encrito en el archivo');
        });
    };
    Imdb.prototype.obtenerIntanciaIMDB = function (nombreFichero) {
        var x = new Movie_1.Movie("x", 11, "x");
        var rawdata = fs.readFileSync("./base/pepito.js");
        var data = JSON.parse(rawdata);
        var imb = new Imdb(data);
        return imb;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
