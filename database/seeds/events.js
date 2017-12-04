'use strict';

const Event = require('../../src/models/eventModel').Event;
const moment = require('moment');

module.exports = () => (
    [
        new Event({
            dia: "16/10",
            horaInicio: "09:00",
            horaFim: "09:30",
            tema: "Abertura",
            apresentadores: [{
                nome: "Antonio Joaquim de Oliveira"
            }],
            initDate: moment("2017-10-16 08:50","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-16 09:30","YYYY-MM-DD HH:mm Z"),
            order: 1
        }),
        new Event({
            dia: "16/10",
            horaInicio: "09:30",
            horaFim: "11:00",
            tema: "Cultura da Inovação e Cultura Digital",
            apresentadores: [{
                nome: "Bruno Antonaccio"
            }, {
                nome: "Marcelo Koji"
            }],
            initDate: moment("2017-10-16 09:30","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-16 11:00","YYYY-MM-DD HH:mm Z"),
            order: 2
        }),
        new Event({
            dia: "17/10",
            horaInicio: "15:00",
            horaFim: "16:30",
            tema: "Jornada do consumidor",
            subtema: "Inovando de fora para dentro",
            apresentadores: [{
                nome: "Theo Vieira"
            }, {
                nome: "Eliane Molines"
            }],
            initDate: moment("2017-10-17 15:00","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-17 16:30","YYYY-MM-DD HH:mm Z"),
            order: 3
        }),
        new Event({
            dia: "18/10",
            horaInicio: "10:00",
            horaFim: "11:30",
            tema: "Casas inteligentes e conectadas!",
            subtema: "O futuro da casa!",
            apresentadores: [{
                nome: "Rafael Tobara"
            }, {
                nome: "Domingos Neto"
            }],
            initDate: moment("2017-10-18 10:00","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-18 11:30","YYYY-MM-DD HH:mm Z"),
            order: 4
        }),
        new Event({
            dia: "19/10",
            horaInicio: "09:00",
            horaFim: "11:00",
            tema: "Industria 4.0",
            apresentadores: [{
                nome: "Accenture"
            }],
            initDate: moment("2017-10-19 09:00","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-19 11:00","YYYY-MM-DD HH:mm Z"),
            order: 7
        }),
        new Event({
            dia: "19/10",
            horaInicio: "11:00",
            horaFim: "12:00",
            tema: "Drone e Apontamento Florestal",
            apresentadores: [{
                nome: "Equipe Florestal e TI de Negócios Digitais"
            }],
            initDate: moment("2017-10-19 11:00","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-19 12:00","YYYY-MM-DD HH:mm Z"),
            order: 8
        }),
        new Event({
            dia: "20/10",
            horaInicio: "09:30",
            horaFim: "11:45",
            tema: "Ideação",
            subtema: "Podemos fazer a diferença com pequenas atitudes",
            apresentadores: [{
                nome: "Gabriela"
            }],
            initDate: moment("2017-10-20 09:30","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-20 11:45","YYYY-MM-DD HH:mm Z"),
            order: 10
        }),
        new Event({
            dia: "20/10",
            horaInicio: "11:45",
            horaFim: "12:00",
            tema: "Encerramento",
            apresentadores: [{
                nome: " "
            }],
            initDate: moment("2017-10-20 11:45","YYYY-MM-DD HH:mm Z"),
            endDate: moment("2017-10-20 12:00","YYYY-MM-DD HH:mm Z"),
            order: 11
        })

    ]
);
