var router = require('express').Router();
var User = require('../api/users/user.model')

router.post('/login', (req, res, next) => {
    User.findOne({ where: req.body })
        .then(user => {
            if (user) {
                req.session.user = user
                res.sendStatus(200)
            }
            else res.sendStatus(401)
        })
        .catch(next)
})

router.post('/signup', (req, res, next) => {
    User.create(req.body)
        .then(user => {
            if (user) {
                req.session.user = user
                res.sendStatus(200)
            }
            else res.sendStatus(401)
        })
        .catch(next)
})



module.exports = router;