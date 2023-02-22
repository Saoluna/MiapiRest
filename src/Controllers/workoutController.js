const cocteles = require('../Config/workout')

const getAllworkouts= (req, res) =>{
    cocteles.find((err, docs)=> {
        if (err) throw new Error(err);
        console.log(docs)
        res.json(docs)
    } ) 
};

const getOneWorkout = (req, res) => {
    cocteles.find({_id:req.params._id},(err, docs)=> {
        if (err) throw new Error(err);
        console.log(docs)
        res.json(docs)
    } ) 
};

const createNewWorkout= (req, res) => {
    cocteles.create(req.body, (err, docs)=> {
        if (err) throw new Error(err);
        console.log(docs)
        res.json(docs)
    } ) 
};

const updateOneWorkout =(req, res) =>{
    cocteles.updateOne({_id:req.params._id},{
        Name: req.body.Name,
        liqueur: req.body.liqueur,
        Origin: req.body.Origin,
        type: req.body.Types,
        img: req.body.img,
    }, (err) => {
        if(!err){
            res.send('Card Update');
        } else {
            res.send(err);
        }
    })
};

    const deleteOneWorkout =(req, res) => {
        cocteles.findOneAndDelete({_id:req.body._id}, function(docs, err){
            if(!err){
                res.send(docs);
            } else {
                res.send(err);
            }
        }) 
    };

    module.exports= {
        getAllworkouts,
        getOneWorkout,
        createNewWorkout,
        updateOneWorkout,
        deleteOneWorkout  }   
