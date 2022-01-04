class LogCollection {

    constructor() {

        this.log = [];
    }

    save(entry) {

        this.log.push(entry);
    }

    findLogByUserId(userId) {

        return this.log.filter(entry => entry._id == userId);
    }
}

const logCollection = new LogCollection();

module.exports = logCollection;