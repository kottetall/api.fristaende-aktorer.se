import { getTroubleshooting } from "./../custom_files/getdata"
import express from "express"
const router = express.Router()
export default router

router.get("/:id?", async (request, response) => {
    const { id } = request.params
    const results = await getTroubleshooting(id)
    response.send(results)
})
