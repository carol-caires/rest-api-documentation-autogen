module.exports = function (app: any) {
    app.get('/users/:id', (req: any, res: any) => {
	// const filtro = req.query.filtro
    return res.status(404).send(false)

    })

}