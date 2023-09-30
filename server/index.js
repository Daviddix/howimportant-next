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

app.use(cors())


app.get("/:topic/:language", async (req, res)=>{
    //gets topic and language from request
    const {topic} = req.params
    const {language} = req.params

    
    const searchQuery = `${topic} in ${language}`
    let youtubeVideos = []
    let gptResponse

    const params = {
        part: 'snippet',
        q: searchQuery,
        type: 'video',
        maxResults: 4, 
        key: youtubeApiKey,
    } 

    try{
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "you will be given a programming language and a topic in that programming language and you should check if the topic does not exist in the provided programming language,  return:\n\n{\n    \"message\": \"Topic not found\",\n    \"status\": \"failed\"\n}\n\nif it exist, return a javascript object object containing useful information about that topic, do this in the context that the information will be provided to a beginner in programming in the format of:\n\n{\n    \"status\": \"success\",\n    \"usageInPercentage\": 70, // Integer representing how much beginners should be concerned about it\n    \"currentStatus\": \"in use\", // Either \"in use\" or \"deprecated\"\n    \"documentation\": \"URL to official documentation\",\n    \"overviewOfTopic\": \"A brief overview of the topic in the programming language, if it is something that is not used anymore, signify here, if it is something that is not safe to use, signify here, if it is something that has a better version or way to do it, signify here\",\n    \"syntaxExample\": \"An example of the syntax for the topic that best describes the topic, including comments that describes what the code is doing and the expected value of the code if any and make sure it is formatted properly\",\n    \"articles\": [\n        {\n            \"title\": \"Article title\",\n            \"site\": \"Article Site\",\n            \"link\": \"URL to the article\"\n        },\n        // Repeat for up to 3 more articles and make sure the articles are from the year 2020\n    ],\n    \"relatedTopics\": [{\n            \"topicName\": \"Related topic name e.g arrays\" and make sure that if it has a slash, it should be replaced by a - ,\n            \"language\": \"Related topic language e.g javascript\",\n      } repeat for up to 3 more times,\n ]\"simpleQuiz\": \"{q : A simple true or false quiz question based on the topic given, a:the answer to the given question. either true or false}\",\n \n}\n\n\ndo not respond with any other text other than the javascript object, do not respond with any other commentary text or contextual text or explanation, only the object"
              },
            {
              "role": "user",
              "content": searchQuery
            }
          ],
          temperature: 1,
          max_tokens: 900,
          top_p: 1,
          frequency_penalty: 0, 
          presence_penalty: 0,
        });
        gptResponse = response.choices[0].message.content
    
        //makes youtube api request 
         youtube.search.list(params, async (err, response) => {
            if (err) {
              console.error('Error searching for videos:', err);
              return;
            }
          
            const videos = await response.data.items;
          
            if (videos.length === 0) {
              console.log('No videos found.');
            } else {
              youtubeVideos = videos
              res.send({
                chatGPTValue : gptResponse,
                youtubeValue : youtubeVideos  
              })
             
            }
        })
    }
    catch(err){
      res.status(400).send({message: err, status: "failed"})
    }
})

app.listen(port, ()=>{
    console.log("i'm alive")
})