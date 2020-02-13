"use strict";
exports.__esModule = true;
var rna_transcription_1 = require("./rna-transcription");
describe('Transcriptor', function () {
    var transcriptor = new rna_transcription_1["default"]();
    it('transcribes cytosine to guanine', function () {
        expect(transcriptor.toRna('C')).toEqual('G');
    });
    it('transcribes guanine to cytosine', function () {
        expect(transcriptor.toRna('G')).toEqual('C');
    });
    it('transcribes adenine to uracil', function () {
        expect(transcriptor.toRna('A')).toEqual('U');
    });
    it('transcribes thymine to adenine', function () {
        expect(transcriptor.toRna('T')).toEqual('A');
    });
    it('transcribes all dna nucleotides to their rna complements', function () {
        expect(transcriptor.toRna('ACGTGGTCTTAA'))
            .toEqual('UGCACCAGAAUU');
    });
    it('correctly handles invalid input', function () {
        expect(function () { return transcriptor.toRna('U'); }).toThrowError('Invalid input DNA.');
    });
    it('correctly handles completely invalid input', function () {
        expect(function () { return transcriptor.toRna('XXX'); }).toThrowError('Invalid input DNA.');
    });
    it('correctly handles partially invalid input', function () {
        expect(function () { return transcriptor.toRna('ACGTXXXCTTAA'); }).toThrowError('Invalid input DNA.');
    });
});
