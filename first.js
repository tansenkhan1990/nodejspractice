const poko=require('http')
const server=poko.createServer((req,res)=>{
    console.log(req.url)
})
server.listen(8000)