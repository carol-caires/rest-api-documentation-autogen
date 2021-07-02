import { Application, Request, Response } from 'express';

module.exports = function (app: Application) {
    app.get('/users/:id', (req: Request, res: Response) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Find a user by its ID'
        // #swagger.parameters['id'] = { description: 'User ID.' }

        /* #swagger.parameters['filter'] = {
               description: 'Filter user information',
               type: 'string'
        } */
	    const filter = req.query.filter
        
        if(false)
            return res.status(404).send(false)
      
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'User found.' 
        } */
        return res.status(200).send({"name": "José"})
    })

    app.post('/users', (req: Request, res: Response) => {
        /* #swagger.tags = ['User']
           #swagger.description = 'Add a new user' */

        /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'user info',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddUser" }
        } */

        const newUser = req.body

        if (true) {
            // #swagger.responses[201] = { description: 'User registered successfully' }
            return res.status(201).send({})
        }
        return res.status(500)    // #swagger.responses[500]
    })

}