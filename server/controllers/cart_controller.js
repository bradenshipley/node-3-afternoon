const swag = require("../models/swag")
module.exports = {
  add: (req, res, next) => {
    let { cart } = req.session.user
    //this will return -1 if the index is not found
    const index = cart.findIndex(swag => swag.id == id)
    if (index === -1) {
      const selectedSwag = swag.find(swag => swag.id === id)
      cart.push(selectedSwag)
      req.session.user.total += selectedSwag.price
    }
    res.status(200).send(req.session.user)
  },
  delete: (req, res, next) => {
    const { id } = req.query
    const { cart } = req.session.user

    const item = cart.find(swag => swag.id == id)
    if (item) {
      const index = cart.findIndex(swag => swag.id == id)
      cart.splice(index, 1)
      req.session.user.total -= item.price
    }
    res.status(200).send(req.session.user)
  },
  checkout: (req, res, next) => {
    const { user } = req.session
    user.cart = []
    user.total = 0
    res.status(200).send(req.session.user)
  }
}
