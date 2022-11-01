const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  let isConnected = false
  if (req.session.user) {
    isConnected = true
  }
  res.render('index', { isConnected })
})

router.get('/profile', (req, res) => {
  console.log('SESSION =====> ', req.session)
  if (req.session.user) {
    res.render('profile', { user: req.session.user, isConnected: true })
  } else {
    res.redirect('/auth/login')
  }
})

module.exports = router
