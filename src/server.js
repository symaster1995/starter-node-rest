const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const v1 = require('./routes/v1')
const app = express()
const models = require('./database/models')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.set('port', process.env.PORT || 7000)

//CHECKING CONNECTION

models.sequelize.authenticate().then(() => {
        console.log('Connected to SQL database:', process.env.DB_NAME)
    })
    .catch(err => {
        console.error('Unable to connect to SQL database:', process.env.DB_NAME, err)
    })

//RUNNING SERVER
const server = app.listen(app.get('port'), () => {
    console.log(`SERVER IS RUNNNING ON PORT ${server.address().port}`)
})

app.use('/api/v1', v1)

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.',
}))

module.exports = app