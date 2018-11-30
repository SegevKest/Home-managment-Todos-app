var express = require('express');
var router = express.Router();
const familyMember=require('../modals/familyMember');

/* GET hole family Members. */
router.get('/', async function(req, res, next) {
    let allFamily= await familyMember.find();
    res.json(allFamily);
});

/* GET a family Member By id. */
router.get('/:id', async function(req, res, next) {
    let aFamilyMember= await familyMember.findById(req.params.id);
    res.json(aFamilyMember);
});

router.post('/', async function(req,res,next){
    let newFamMem= new familyMember(req.body);
    console.log(newFamMem);
    let addedMember= await newFamMem.save();
    res.json(addedMember);
});


module.exports = router;
