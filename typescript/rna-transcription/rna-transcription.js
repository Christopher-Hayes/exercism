"use strict";
exports.__esModule = true;
var Transcriptor = /** @class */ (function () {
    function Transcriptor() {
    }
    Transcriptor.prototype.toRna = function (dna) {
        // Catch invalid characters
        if (dna.match(/[^GCAT]/)) {
            throw 'Invalid input DNA.';
        }
        return dna.replace(/[GCTA]/g, function (m) {
            switch (m) {
                case 'G': return 'C';
                case 'C': return 'G';
                case 'T': return 'A';
                case 'A': return 'U';
            }
        });
    };
    return Transcriptor;
}());
exports["default"] = Transcriptor;
var t = new Transcriptor();
console.log('result:', t.toRna('GACTG'));
