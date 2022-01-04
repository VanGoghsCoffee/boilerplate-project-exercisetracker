class Log {

    constructor({ username, id }) {

        this.username = username;
        this._id = id;
        this.log = [];
        this.count = 0;
    }

    add({ description, duration, date }) {
        this.log.push({
            description,
            duration,
            date
        })
        this.count = this.log.length;
    }

    retrieveFromTo(from, to) {
        return this.log.filter(entry => {
            const date = new Date(entry.date);

            return ((date >= from) && (date <= to));
        })
    }

    retrieve({ from, to, limit }) {
        let dateFrom = new Date(0);

        let dateTo = new Date();
        dateTo.setFullYear(dateTo.getFullYear() + 100); 

        if (from)
            dateFrom = new Date(from);
        
        if (to)
            dateTo = new Date(to);

        let log = this.retrieveFromTo(dateFrom, dateTo);
        
        if (limit)
            log = log.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, limit);

        return { ...this, log, count: log.length };
            
    }
}

module.exports = Log;