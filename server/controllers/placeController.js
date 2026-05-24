const Place = require('../models/Place');

exports.addPlace = async (req,res)=>{
    try{
        const userData = req.user;
        const {
            title,
            address,
            addedPhotos,
            description,
            perks,
            extraInfo,
            maxGuests,
            price,
        } = req.body;
        const place = await Place.create ({
            owner: userData.id,
            title, 
            address,
            photos: addedPhotos,
            description,
            perks,
            extraInfo,
            maxGuests,
            price,
        });
        res.status(200).json({
            place,
        });
    } catch (err){
        res.status(500).json({
            message: "Internal server error",
            error: err,
        });
    }
};
//retuirn the user specific places
exports.userPlaces = async (req,res)=>{
    try{
        const userData = req.user;
        const id = userData.id;
        res.status(200).json(await Place.find({owner: id}));
    } catch (err){
        res.status(500).json({
            message: "Internal server error",
        });
    }
}
//update the places 
exports.updatePlace = async (req,res) => {
    try{
        const userData = req.user;
        const userId = userData.id;
        const{
            id,
            title,
            address,
            addedPhotos,
            description,
            perks,
            extraInfo,
            maxGuests,
            price,
        } = req.body;
        const place = await Place.findById(id);
        if (userId == place.owner.toString()){
            place.set({
                title,
                address,
                addedPhotos,
                description,
                perks,
                extraInfo,
                maxGuests,
                price,
            });
            await place.save();
            res.status(200).json({
                messgae: 'place updated',
            });
        }
    } catch (err){
        res.status(500).json({
            message: "Internal server error",
        });
    }
};
//Return all the places in DB
exports.getPlaces = async(req,res) => {
    try{
        const places = await Place.find();
        res.status(200).json({
            places,
        });
    } catch (err){
        res.status(500).json({
            message: "Internal server error",
        });
    }
}
// return the single places based on a id
exports.singlePlace = async(req,res) =>{
    try{
        const{id} = req.params;
        const place = await Place.findById(id);
        if(!place){
            res.send(400).json({
                message: 'place not found',
            });
        }
        res.status(200).json({
            place,
        });
    } catch (err){
        res.status(500).json({
            message: "Internal server error",
        });
    }
}
//searching the places in the db

exports.searchPlaces = async(req,res)=>{
    try{
        const searchword = req.params.key;
        if (searchword == '') return res.status(200).json(await Place.find());
        const searchMatches = await Place.find({address: {$regex: searchword, $options: "i"} })
        res.status(200).json(searchMatches);
    } catch (err){
        res.status(500).json({
            message: "Internal server error",
        });
    }
}