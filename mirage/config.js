export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = ''    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = ''    // make this `api`, for example, if your API is namespaced
  // this.timing = 400      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts')
    this.post('/posts')
    this.get('/posts/:id')
    this.put('/posts/:id') // or this.patch
    this.del('/posts/:id')

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/cflines')

  this.get('/liabilities/:id')

  this.get('/liabilities', (schema, request) => {
    console.log(request)
    if (request.queryParams.enterpriseId !== undefined) {
      return {
        data: schema.db.liabilities
          .where({enterpriseId: request.queryParams.enterpriseId})
            .map(attrs => (
              { type: 'liabilities', id: attrs.id, attributes: attrs }
            ))
      }
    } else {
      return {
        data: schema.db.liabilities.map(attrs => (
          {
            type: 'liabilities',
            id: attrs.id,
            attributes: attrs,
            relationships: {
              enterprise: {
                data: {
                  type: 'enterprises',
                  id: attrs.enterpriseId
                }
              }
            }
          }
        )),
        included: schema.db.enterprises.map(attrs => (
              { type: 'enterprises', id: attrs.id, attributes: attrs }
        ))
      }
    } // else
  })

  this.get('/balance-lines')

  this.get('/users')

  this.get('/enterprises')
  this.get('/enterprises/:id')
  this.get('/enterprises/:id/liabilities')

  this.get('/costcenters')
}
