const require = require(express)


const router = express.Router()


router.get('/', (req, res) =>
{
    res.json({mssg: 'get all'})

})


module.exports = router