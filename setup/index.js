;
'use strict'

/*const env = require('dotenv').config(),
    app = require('./app'),
    port = process.env.port || 3000

app.listen(port, (err) => {
    if(!err) return console.log(`El servidor esta levantado en http://localhost:${port}`)

    return console.log('El servicio no funciona')
})*/

const env = require('dotenv').config(),
    { graphqlHTTP } = require('express-graphql'),
    { schema } = require('../schemas/configSchema'),
    port = process.env.port || 3000


let app = require('./app')

app.use('/gql', graphqlHTTP ({
    schema: schema,
    graphiql: true
}))


app.listen(port, () => {
    console.log(`El servidor funciona en el puerto http://localhost:${port}`)
})
