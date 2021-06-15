const axios = require('axios')

module.exports = {
  'POST /api': (req, res) => {
    return res.send('Hello world')
  },
  'POST /api/gql': async (req, res) => {
    const reqBody = req.body
    const { data: result } = await axios({
      url: 'http://localhost:4000',
      method: 'POST',
      data: reqBody
    }).catch(e => e)
    return res.send({
      data: result.data
    })
  }
}