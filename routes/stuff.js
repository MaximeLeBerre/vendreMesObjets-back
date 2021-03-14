const express = require('express');
const router = express.Router();
const stuffctrl = require('../controllers/stuff');
const auth = require('../middleware/auth');


router.post('/', auth, stuffctrl.createThing);
router.put('/:id',auth,  stuffctrl.modifyThing);
router.delete('/:id',auth,  stuffctrl.deleteThing)
router.get('/:id', auth, stuffctrl.getOneThing)
router.get('/', auth, stuffctrl.getAllThing); 


module.exports = router;