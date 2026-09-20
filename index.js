import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello i am md farhan i am doing bca in cmr university from bengaluru' })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})