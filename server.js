const express=require('express')
const app=express()
const path=require('path')
const port=3000


app.use(express.static(path.join(__dirname,'public')))



app.listen(port,()=>{
    console.log('Aplicacion esta ejecutandose en puerto 3000')
}
)
