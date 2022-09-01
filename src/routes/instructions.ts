import express from "express"
const router = express.Router()
export default router

import { getInstruction } from "./../custom_files/getdata"

router.get("/:id?", async (request, response) => {
    const { id } = request.params
    const results = await getInstruction(id)
    response.send(results)
})

