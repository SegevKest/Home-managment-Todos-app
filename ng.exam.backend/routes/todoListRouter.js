var express = require('express');
var router = express.Router();
const todoTask=require('../modals/todoTask');
const familyMember=require('../modals/familyMember');


/* GET all Todos . */
router.get('/', async function(req, res, next) {
    let allTodos= await todoTask.find();
    res.json(allTodos);
});

/* GET a Todo . */
router.get('/:id', async function(req, res, next) {
    let aTodo= await todoTask.findById(req.params.id);
    res.json(aTodo);
});

// Add Todo Task to Collection
router.post('/', async function(req,res,next){
    let newTodo= new todoTask(req.body);
    let addedTodo= await newTodo.save();
    res.json(addedTodo);
});

//Delete a Todo
router.delete('/:id', async function(req,res,next){
    let deletedTodo= await todoTask.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);

});

router.get('/merge',  function(req,res,next){
    let mergerd=  todoTask.aggregate([{
        // $lookup: {
        //         from: "familyMember.collection",
        //         localField: "famMemberID",
        //         foreignField: "_id",
        //         as: "famMemberName"
        //     }
        $lookup: {
            from: "familyMember",
            localField: "famMemberID",
            foreignField: "_id",
            as: "famMemberName"
        }
    }]).then(data=>console.log(data))
    .catch(err=>console.log(err));
    // console.log(mergerd);
    // res.json(mergerd);
});
  module.exports = router;


