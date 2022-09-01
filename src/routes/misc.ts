import express, { Router } from "express"
const router: Router = express.Router()
export default router

router.get("/", (_, response) => {
    response.sendStatus(404)
})

router.get("/coffee", (_, response) => {
    response.sendStatus(418)
})
