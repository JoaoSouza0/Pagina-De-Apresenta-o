const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const videos = require('./data')
const { query } = require('express')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {

    const dados = {

        name: "João Victor",
        link: "https://avatars2.githubusercontent.com/u/60666522?s=400&u=9e80b1316a08ea2412d2ed74d9755d09938eba63&v=4",
        title: "Desenvolvedor em treinamento",
        descript: 'Desenvolvedor focado em trazer bons resultados em busca de uma vaga internacional <a href="https://www.facebook.com/" target="_blank">Facebook</a>'
    }
    return res.render('about', { data: dados })
})
server.get('/Class', (req, res) => {
    return res.render('Class', { items: videos })
})

server.get('/video', (req, res) => {

    const id = req.query.id

    const video = videos.find((video) => {

        return video.id == id
    })

    if(!video){
        return res.send('achei nada não')
    }

    return res.render('video', {items: video})

})
server.listen(5000, () => {
    console.log('Voce pode ir até: http://localhost:5000')
})