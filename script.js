
//буду признателен, оно не работает, хотя я так и не могу понять в чем проблема.


function student(name,item) {
    this.name=name;
    this.item=item;
}

var liststud=[];

function loadj() {
    fetch("http://localhost:3000/Projonnode")
        .then(r=>r.json());
}



//console.log(liststud[0].name+" "+liststud[0].item);


function render() {
for(var i=0; i<liststud.length;i++) {
    var t = document.getElementById('studentrow');
    var tr = t.content.querySelector("tr");
    var td = tr.content.querySelector("td");
    td[i].innerHTML = liststud[i].name;
    td[i + 1].innerHTML = liststud[i].item;
    if (i > 0) {
        var tb = document.getElementsByTagName("tbody");
        var clone = document.importNode(t.content, true);
        tb[i].appendChild(clone);
        var clone2 = document.importNode(t.content, true);
        tb[i].appendChild(clone2);
    }
}
}
function createPost() {
    let postForm = document.getElementById("post-form");
    let title = postForm.getElementsByTagName("title");
    let title1 = postForm.getElementsByTagName("title1");
    let promise = fetch("http://localhost:3000/Projonnode",{
        method:'POST',
        body:JSON.stringify({title}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    return promise;
}

function  init() {
    loadj()
        .then(render)

    let postForm = document.getElementById("post-form");
    postForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        createPost()
            .then(loadj)
            .then(render);
    });
}

window.onload=init;


