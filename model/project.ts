import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tools: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    liveUrl: {
        type: String,
        required: true
    },
    gitUrl: {
        type: String,
        required: true
    }
})

export const Projects = model('Projects', ProjectSchema)