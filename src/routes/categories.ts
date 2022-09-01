import express from "express"
const router = express.Router()
export default router

import { getCategory } from "./../custom_files/getdata"

router.get("/:id?", async (request, response) => {
    const { id } = request.params
    const results = await getCategory(id)
    response.send(results)
})

