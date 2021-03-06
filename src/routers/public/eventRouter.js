'use strict';

const EventService = require('../../services/eventService');
const Router = require('koa-router');

let eventRouter = new Router();

eventRouter.get('/', function* (next) {
    try {
        this.body = yield EventService.findAll(this.query.date);
    } catch (e) {
        console.log(e);
        this.status = 500;
        this.exception = e;
        this.body = e.message;
    } finally {
        yield next;
    }
});


module.exports = eventRouter;
