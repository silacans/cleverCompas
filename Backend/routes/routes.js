const router = require('express').Router();


router.get('/', (req, res) =>
{
    res.json({mssg: 'get all'})

})


router.get('/:id', (req, res) =>
    {
        res.json({mssg: 'get single'})
    
    })

// post
router.post('/', (req, res) =>
    {
        res.json({mssg: 'Post'})
    
    })

//delete
router.delete('/:id', (req, res) =>
 {
    res.json({mssg: 'Delete'})
        
})


// Update
router.patch('/:id', (req, res) =>
    {
       res.json({mssg: 'Update'})
           
   })


//exporting the routers 
module.exports = router