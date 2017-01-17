const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
});

Todo.findByIdAndRemove({_id: '58793fb8ced3f9d0e75c95fd' }).then ((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('58793fb8ced3f9d0e75c95fd').then ((todo)=>{
    console.log(todo);
});