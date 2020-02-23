let div=document.querySelector("#data");
let getData=(information)=>{
    let request=new XMLHttpRequest();
request.open("GET","student.json");
request.send();

request.addEventListener("readystatechange",()=>{
    if(request.status===200 && request.readyState===4){
        const info=JSON.parse(request.responseText);
        information(undefined,info);
        info.forEach(infos=>{
            div.innerHTML+=`
            <div class="card-group col-md-4">
                <div class="card">
                <h5 class="card-header">Title</h5>
                    <div class="card-body">
                    <p class="card-text">${infos.name}</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                 `;
        });
    }else if(request.readyState===4){
        information("No Data",undefined);
    }
});
};

getData((err,info)=>{
    if(info){
        console.log(undefined,info);
    }else{
        console.log(err,undefined);
    }
})
