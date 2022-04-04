import express from 'express';
import mongoose from "mongoose";
import path from 'path';
import color from "colors";
const keys = require('./keys')

const app = express();
const PORT: (string | number) = process.env.PORT || 4567;

app.use(express.static("public"));
app.use(express.json());

//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))

try {
    mongoose.connect(keys.MONGODB_URI, () => {
        console.log(color.bgGreen.black(`DATA CONNECTED`))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}

import { Projects } from './model/project';

// async function saved() {
//     const project = new Projects({ title: "Quiz please", tools: "React, MongoDB, NodeJs, Scss", desc: "This project is a trivia questionnaire with a time limit. The trivia contains 23 questions which are limited to 10 minute. The questionnaire can be answered alone or with friends.", liveUrl: "https://quiz-question-app.herokuapp.com/", gitUrl: "https://github.com/RuKatya/Quiz-project" })
//     try {
//         await project.save()
//         if (project.save()) {
//             console.log(`saved`)
//         } else {
//             console.log('hui')
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// saved()



const index = require('./routes/index')

app.use('/', index)


app.listen(PORT, () => {
    return console.log(color.bgCyan.black(`Listening at http://localhost:${PORT}`));
});
