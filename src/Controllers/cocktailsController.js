const cocteles = require('../Config/cocktails')

const getAllCocktails= (req, res) =>{
    cocteles.find((err, docs)=> {
        if (err) throw new Error(err);
        console.log(docs)
        res.json(docs)
    } ) 
};

const getOneCocktail = (req, res) => {
    cocteles.find({_id:req.params._id},(err, docs)=> {
        if (err) throw new Error(err);
        console.log(docs)
        res.json(docs)
    } ) 
};

const createNewCocktail= (req, res) => {
    cocteles.create(req.body, (err, docs)=> {
        if (err) throw new Error(err);
        console.log(docs)
        res.json(docs)
    } ) 
};

const updateOneCocktail =(req, res) =>{
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

    const deleteOneCocktail =(req, res) => {
        cocteles.findOneAndDelete({_id:req.params._id}, function(docs, err){
            if(!err){
                res.send(docs);
            } else {
                res.send(err);
            }
        }) 
    };

    module.exports= {
        getAllCocktails,
        getOneCocktail,
        createNewCocktail,
        updateOneCocktail,
        deleteOneCocktail  }   
