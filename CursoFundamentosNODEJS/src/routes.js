const { response } = require("express");

app.get("/courses", (resquest, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["Curso01","Curso2","Curso3"]);
});    

app.post("/courses", (resquest, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

app.put("/courses/:id", (resquest, response) =>{
    const {id} = resquest.params;           
    console.log(id);
    return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
}); 

app.patch("/courses/:id",(resquest, response)=>{
    return response.json(["Curso6 ","Curso2", "Curso3", "Curso4"]);
});

app.delete("/courses/:id",(resquest, response)=>{
    return response.json(["Curso6", "Curso2", "Curso4"]);
});

app.listen(3030)