
//DECLARAMOS REQUIRE    
var events = require('events');
//emisorde eventos 
var EventsE = events.EventEmitter;
var ee = new EventsE();
ee.on('data', function (date) {
    console.log(date);
});
//para poder enviar datos de vez en cuando ---ACTIONLISTENER como en java
setInterval(function () {
    //emitimos el evento
    ee.emit('data', new Date().toISOString());
}, 500);