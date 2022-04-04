import { Router } from 'express';
const router = Router();

//COLORS
import color from 'colors'

//PROJECTS
import { Projects } from '../model/project'

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find({})
        if (projects) {
            res.render('index', {
                title: "CV Katya Ru",
                projects
            })
        } else {
            console.log(`no projects`)
        }
    } catch (error) {
        console.log(color.bgRed.black(error))
    }
})

router.post('new-project', (req, res) => {

})
// router.get('/get-all-projects', async (req, res) => {
//     try {
//         const projects = await Projects.find({})
//         if (projects) {
//             res.send({ projects })
//         } else {
//             console.log(`no projects`)
//         }
//     } catch (error) {
//         console.log(color.bgRed.black(error))
//     }
// })

module.exports = router;