const poko=require('http')
const server=poko.createServer((req,res)=>{
    console.log('pokemon poko')

})
server.listen(8000)