const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT || 3001
const  OpenAI = require("openai")
const openAiApiKey = process.env.OPENAI
const openai = new OpenAI({
    apiKey: openAiApiKey,
})
const youtubeApiKey  = process.env.YOUTUBE
const { google } = require('googleapis')
const youtube = google.youtube('v3');

const whitelist = ['http://localhost:3000','http://localhost:3001', 'https://howimportant-next.vercel.app/', 'https://howimportant-next.vercel.app', 'https://howimportant-next-daviddix.vercel.app/', 'https://howimportant-next-git-master-daviddix.vercel.app/']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))


app.get("/:topic/:language", async (req, res)=>{
    //gets topic and language from request
    const {topic} = req.params
    const {language} = req.params

    
    const searchQuery = `${topic} in ${language}`

    const params = {
        part: 'snippet',
        q: searchQuery,
        type: 'video',
        maxResults: 4, 
        key: youtubeApiKey,
    } 
    try{
        const [openaiResponse, youtubeResponse] = await Promise.all([
          openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: `you will be given a programming language and a topic in that programming language, if you receive something that isn't related to any programming language, return {
                          "status" : "failed",
                          "message" : "enter a valid programming language or topic"
                        }. if it is related to a programming language but the topic does not exist in the programming language, return {
                          "status" : "failed",
                          "message" : "topic does not exist in that programming language"
                        }.
                        If it is related to a programming language and the topic exists in the programming language, return {
                          "status" : "success",
                          "usageInPercentage" : //an integer representing how beginners should be concerned about this topic,
"currentStatus" : //either "in use" if the topic is still being used or "depreciated" if the topic is not in use,
"documentation" : //URL of the original documentation,
"overviewOfTopic" : //a brief and easy to understand overview of the topic in the programming language. if it is something that is not used anymore, signify here, if it is something that is dangerous, signify here,
"syntaxExample" : //a formatted simple example of of the syntax of the topic, including comments that describe what the code is doing and the expected value of the code if any,
"articles" : [{"title" : "Article title", site: "name of the website the article is gotten from", link:"URL directing to the website of the article"}, {"title" : "Article title", site: "name of the website the article is gotten from", link:"URL directing to the website of the article"}, {"title" : "Article title", site: "name of the website the article is gotten from", link:"URL directing to the website of the article"}],
relatedTopics : [{topicName: //name of the related topic, "language": //related topic language}, {topicName: //name of the related topic, "language": //related topic language}, {topicName: //name of the related topic, "language": //related topic language}],
"simpleQuiz" : {q: //a simple true or false quiz question based on the topic given, a: //the answer to the question given, either true or false}
                        }
                        `,
              },
              {
                role: "user",
                content: searchQuery,
              },
            ],
            temperature: 1,
            max_tokens: 900,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          }),
          new Promise((resolve, reject) => {
            youtube.search.list(params, (err, response) => {
              if (err) {
                reject(err);
              } else {
                resolve(response);
              }
            });
          }),
        ]);
        const videos = await youtubeResponse.data.items;
        res.send({
           chatGPTValue : openaiResponse.choices[0].message.content,
          youtubeValue : videos  
                })
      }
    catch(err){
      res.status(400).send({message: err, status: "failed"})
    }
})

app.listen(port, ()=>{
    console.log("i'm alive")
})