import { Router } from 'express'
import {
    userPage, aboutPage,
    getAllUser, addUser, updateUser,
    deleteUser, searchUser, signin
} from './controller/user.js'
const router = Router()
/*
1-method
2-url 
3- recive data
4- code logic
*/
router.get('/', userPage)
router.get("/about", aboutPage)


router.get('/user', getAllUser)

router.post("/user", addUser)
router.post("/signin", signin)


router.patch("/user/:id", updateUser)


router.delete('/user/:id', deleteUser)

router.get("/user/search", searchUser)

export default router
