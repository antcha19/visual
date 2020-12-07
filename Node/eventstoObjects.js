var events = require('events');

class Persona extends events.EventEmitter {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }
}

var manu = new Persona('manu');
var boris = new Persona('boris');
var people = [manu, boris];

people.forEach(function (littleperson) {
    littleperson.on('talk', function (message) {
        console.log(littleperson.nombre + 'ha dicho ' + message)
    });
})

manu.emit(`talk`, `espero que estudies node`);
boris.emit(`talk`, `I add that a lot`);