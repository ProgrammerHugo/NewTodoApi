var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ProgrammerHugo:ProgrammerHugo1978.@ds163738.mlab.com:63738/todoapi'|| 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
