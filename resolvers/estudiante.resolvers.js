;
'use strict'

const estudianteQueries = require('./queries/estudiante.queries ')
const estudiateMutations = require('./multations/estudiante.mutations')

module.exports = {
    Query: estudianteQueries,
    Mutation: estudiateMutations
}