var dog = require('../models/dog'); 
 
// List of all Costumes 
exports.dog_list = async function(req, res) { 
        try{ 
            let dogs = await dog.find(); 
            res.send(dogs); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
}; 
 // VIEWS 
// Handle a show all view 
exports.dog_view_all_Page = async function(req, res) { 
    try{ 
        theCostumes = await dogs.find(); 
        res.render('dog', { title: 'Dog Search Results', results: dogs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific dog. 
exports.dog_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id); 
}; 
 
// Handle dog create on POST. 
exports.dog_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog create POST'); 
}; 
 
// Handle dog delete form on DELETE. 
exports.dog_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id); 
}; 
 
// Handle dog update form on PUT. 
exports.dog_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id); 
}; 