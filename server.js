const express= require('express');

const app=express();
data=[{name:"ali",id:1},{name:"ahmad",id:2}]
app.use(express.json());


app.get('/',(req,res)=>{
res.json(data);
})

app.post('/add',(req,res)=>{
    let {name,id}=req.body;
    let newUser={name,id}
    data.push(newUser);
    res.json(data);
})
app.put('/changename/:id',(req,res)=>{
    targetID=req.params.id;
    newName=req.body.name;
    for(let i=0;i<data.length;i++){
        if(data[i].id==targetID){
            data[i].name=newName;
        break;
        }
    }
    res.json(data);
})
app.delete('/delete/:id',(req,res)=>{
    let targetID = req.params.id;
data=data.filter(item=>item.id!=targetID)
res.json(data);
})
app.listen(8080,()=>{
    console.log("listening at 8080")
});

