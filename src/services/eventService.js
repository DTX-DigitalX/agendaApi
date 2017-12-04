'use strict';

const EventRepository = require('../repositories/eventRepository');
const _ = require('lodash');
//const moment = require('moment');
let moment = require('moment-timezone');
moment.tz.setDefault("America/Sao_Paulo");


class EventService {

    * create(event) {
        return yield EventRepository.create(event);
    }
    * findAll(liveDate) {
        let events = yield EventRepository.findAll();
        liveDate = moment.utc(liveDate,"YYYYMMDDHHmm Z");
        console.log(liveDate)
        console.log(moment(events[0].initDate))
        console.log(moment(events[0].endDate))

        // _.each(events, (event) => {

        //     event.isLive = false;
        //     if (liveDate.isBetween(moment(event.initDate), moment(event.endDate)))
        //         event.isLive = true;
        // });

        return _.sortBy(events,'order');
    }

    * update(event) {
        return yield EventRepository.update(event);
    }

}

module.exports = new EventService();
