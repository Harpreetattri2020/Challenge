const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const { createProxyMiddleware } = require('http-proxy-middleware');
// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/', createProxyMiddleware({ target: 'http://coding-challenge-api.bounceinsights.com/', changeOrigin: true }));

app.get("/users", cors(),async (req, res) => {
	res.send("This is working")
})


app.post("/post_name", async (req, res) => {
	let { name } = req.body
	console.log(name)
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
