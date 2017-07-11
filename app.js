'use strict'

function Projects(name, type, language) {
    this.name = name;
    this.type = type;
    this.language = language;
}

var busMall = new Projects('Bus Mall', 'Functional', 'Javascript');
var chocoPizza = new Projects('Chocolate Pizza', 'Design', 'CSS');
