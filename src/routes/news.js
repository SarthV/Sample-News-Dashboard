const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')



newsRouter.get('/bbc', async(req, res) => {
    try {
        const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=bbc-news&' +
        'apiKey=c8d4a412788240cab0761e15d9c72fac')
        //console.log(newsAPI.data)
        var sour = 'BBC'
        res.render('news', {topic : 'BBC', articles : newsAPI.data.articles })

    } catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error!', err.message)
        }
    }


})

newsRouter.get('/cnn', async(req, res) => {
    try {
        const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=cnn&' +
        'apiKey=c8d4a412788240cab0761e15d9c72fac')
        //console.log(newsAPI.data)
        res.render('news', {topic : 'CNN', articles : newsAPI.data.articles })

    } catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error!', err.message)
        }
    }


})

newsRouter.post('/new', async(req, res) => {
    let srch = req.body.search
    console.log(srch)

    try {
        const newsAPI = await axios.get('https://newsapi.org/v2/everything?q=${srch}&apiKey=c8d4a412788240cab0761e15d9c72fac')
        //console.log(newsAPI.data.articles)
        res.render('newsSearch', {articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    }
})

module.exports = newsRouter

