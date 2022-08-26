const router = require('express').Router();
const Spot = require('../models/Spot');
const { paramValueIsOk, setParamUnity } = require('./helper/paramHelper');

router.post('/', async (req, res) => {
    const {name, coords } = req.body;

    const spot = {
        name,
        coords
    }


    if(!name || !coords){
        res.status(422).json({error: 'empty info'})
    }

    try{
        if(await Spot.findOne({coords: coords}) ) {
        res.status(400).json({message: 'spot with these coords already exists'})

        } else {
        await Spot.create(spot);
        res.status(201).json({message: 'spot sucessfully created'})
        }

    } catch (error) {
        res.status(500).json({error: error})
    }
});

router.get('/', async (req, res) => {
    try{
        const spots = await Spot.find();
        res.status(200).json(spots)
    } catch (error) {
        res.status(500).json({error: error})
    }
});

router.get('/:id', async (req, res) => {
   const id = req.params.id; 

   try{
    const spot = await Spot.findOne({_id: id});
    res.status(200).json(spot)
} catch (error) {
    res.status(500).json({error: error})
}
})

router.put('/:id', async (req, res) => {
    const spotId = req.params.id;
    const { paramName, value, date } = req.body;
    const unity = setParamUnity(paramName);    
    try{
        const spot = await Spot.findByIdAndUpdate(spotId, {$push: { 'params': {paramName: paramName, value: value, date: date, unity: unity, limit: paramValueIsOk(paramName, value)}}});
        res.status(200).json(spot)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

module.exports = router;