'use strict';

const _ = require('lodash');
const Event = require('../models/eventModel').Event;
const MongoService = require('../services/mongoService');

class EventRepository {

    * findById(eventId) {
        return yield Event.findById(eventId);
    }

    * findAll() {
        return yield Event.find()
        .sort('order:1')
            .lean();
    }

    * create(event) {
        return yield Event.create(event);
    }

    * update(newEvent) {
        let event = yield this.findById(newEvent._id);

        if (!event)
            throw new Error("evento não encontrado para fazer alteração");

        event.youTubeHash = newEvent.youTubeHash;
        yield event.save();

       return event;

    }

}

module.exports = new EventRepository();
