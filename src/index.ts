import dotenv from "dotenv"
dotenv.config()
const { PORT } = process.env
import express from "express"
const app = express()

// Middleware
import helmet from "helmet"

app.use(helmet())

// Importing routes
import misc from "./routes/misc"
import felsokning from "./routes/troubleshooting"
import systemstod from "./routes/systems"
import tjanster from "./routes/services"
import kategorier from "./routes/categories"
import instruktioner from "./routes/instructions"

// Using routes
// ( regex for åäö )
app.use("/", misc)
app.use(/\/(felsokning|fels%C3%B6kning)/, felsokning)
app.use(/\/(systemstod|systemst%C3%B6d)/, systemstod)
app.use(/\/(tjanster|tj%C3%A4nster)/, tjanster)
app.use("/kategorier", kategorier)
app.use("/instruktioner", instruktioner)


// Starting server
app.listen(PORT, () => {
    console.log(`\n\t\t*** Server available on localhost:${PORT} ***\n`)
})