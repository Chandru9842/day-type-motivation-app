import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    const today = new Date("Jan 31,2026 11:13:00");
    const day = today.getDay();
    // console.log(day);
    let type="a weekday";
    let adv="It's time to work hard ";
    if(day==0||day==6){
          type="a weekend";
          adv="It's time to have some fun";


    }

    res.render("index.ejs",{
        daytype:type,
        advice:adv,
    })
})

app.listen(port,()=>{
    console.log(`Server runnning on port ${port}.`);
});


