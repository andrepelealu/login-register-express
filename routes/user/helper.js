const User = require('../../models/user')


exports.getUser = async function (req, res, next){
    try {
        user = await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({message: "user not found"})
        }
    } catch (err){
        return res.status(505).json({message: err.message})
    }

    res.user = user
    next()
}
