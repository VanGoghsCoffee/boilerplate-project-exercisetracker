const userCollection = require('../collections/UserCollection');

const ExerciseBuilder = require('../entities/ExerciseBuilder');
const logCollection = require('../collections/LogCollection');

function handleCreateExercise(req, res, next) {

    const userId = req.params['_id'];
    const user = userCollection.findById(userId);

    const description = req.body['description'];
    const duration = req.body['duration'];
    let date = req.body['date'];

    if (date === '' || date === undefined)
        date = Date.now();

    const exercise = new ExerciseBuilder()
        .withUser(user[0])
        .withDescription(description)
        .withDuration(duration)
        .withDate(new Date(date)
        .toDateString()).build();

    const log = logCollection.findLogByUserId(userId)[0];
    log.add(exercise);

    res.json(exercise);
}

module.exports = handleCreateExercise;