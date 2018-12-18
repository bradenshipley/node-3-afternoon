const swag = require("../models/swag")

module.exports = {
  search: (req, res, next) => {
    const { category } = req.query
    if (category) {
      const filteredStuff = swag.filter(swag => {
        swag.catergory == category
      })
      res.status(200).send(filteredStuff)
    } else {
      res.status(200).send(swag)
    }
  }
}
