var router = require('express').Router();
var User = require('../api/users/user.model')

router.post('/login', (req, res, next) => {
    User.findOne({ where: req.body })
        .then(user => {
            if (user) {
                req.session.user = user;
                // Workshop had use sending 200 so login object on state was becomeing "Ok";
                res.send(user);
            }
            else res.sendStatus(401);
        })
        .catch(next)
})

router.post('/signup', (req, res, next) => {
    User.create(req.body)
        .then(user => {
            if (user) {
                req.session.user = user;
                res.send(user);
            }
            else res.sendStatus(401);
        })
        .catch(next)
})

router.post('/logout', (req, res, next) => {
    req.session.user = {} ; // thenable?
    res.sendStatus(200);

});

router.get('/me', (req, res, next) => {
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        console.log('You tried to get "me"');
        res.send('No user logged in');
    }
});


module.exports = router;
