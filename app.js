const express=require('express')
const mongoose=require('mongoose')
const exerciseRouter=require('./Router/ExerciseRouter');
const nutrationRouter=require('./Router/NutrationRouter');
const userRouter=require('./Router/UserRouter')
mongoose.connect('mongodb://localhost:27020/MSDFinalProject-MEAN', err => {
if(err){
 console.log('DB Error: ', err.message)
}else{
console.log("DB connected")
}
})


const app= express();
app.use(express.json());

app.use('/exercise', exerciseRouter);
app.use('/nutration', nutrationRouter);
app.use('/users', userRouter)

app.use((req, res, next) => {
res.send("This API is not supported")
})
app.use((err, req, res, next) => {
if(err && err.message){
res.send(err.message);
}
else res.send("Unknown Error")
})


app.listen(3000, console.log("3000 is listing"))