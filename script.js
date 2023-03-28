
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    // console.log(contests.name)
    //Cards and Dropdown menu
    ihtml = ""
    linkshtml = ``
    for (items in contests) {
        let randomimages = ["https://media.istockphoto.com/id/598178344/vector/contest-banner-hand-lettering.jpg?s=612x612&w=0&k=20&c=d0MXnz1BbHMUa70dNfCtLC8GpBljkVeZD4uZWdoeXcQ=", "https://www.shutterstock.com/image-vector/megaphone-contest-speech-bubble-banner-260nw-1949373370.jpg", "https://upload.wikimedia.org/wikipedia/en/9/90/ConTest_Logo.PNG", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZzaULzBe8mYe1F7LGQ64dXsc2ChyZ2tV4Q&usqp=CAU", "https://thumbs.dreamstime.com/b/contest-hanging-letters-over-blue-background-96130325.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc0lCIzv7_Q6_QsyY_skfyFr_zLFoZxexPg&usqp=CAU", "https://www.shutterstock.com/image-vector/contest-time-design-banner-poster-260nw-2130641654.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTGULqAQsB9jD5kNz9961xRyYvK-2bzhZXWwBqY1zwi5C0DxyKq1yoyKAzxImv7VweIo&usqp=CAU"]
        let a = Math.floor(Math.random() * randomimages.length)
        let images = randomimages[a]
        ihtml += `
    <div class="card" >
                <a href="${contests[items].url}"><img id="randomimg" src="${images}"></a>
                <div class="card-body">
                    <h5 class="card-title">${contests[items].name}</h5>
                    <p> by ${contests[items].site}</p>
                    <p> in 24 Hours : ${contests[items].in_24_hours}</p>
                    <h6>Satus : ${contests[items].status}</h6>
                    <p>Start time : ${contests[items].start_time}</p>
                    <p>End time : ${contests[items].end_time}</p>
                    <a href="${contests[items].url}" class="btn btn-primary">Go to site</a>
                </div>
            </div>
    `
        linkshtml += `
    <a class="alllinks" href="${contests[items].url}">${contests[items].name}</a>
    `
    }
    cardcontainer.innerHTML = ihtml
    contestlinks.innerHTML = linkshtml
})
//Search Function
let searchfunction = () => {
    let r = fetch(url)
    r.then((v) => {
        return v.json()
    }).then((cont) => {
        let input = document.getElementById("search").value.toLowerCase()
        for (j = 0; j < cont.length; j++) {
            txtvalue = cont[j].name.toLowerCase()
            if (txtvalue.indexOf(input) > -1) {
                document.getElementsByClassName("card")[j].style.display = ""
            }
            else {
                document.getElementsByClassName("card")[j].style.display = "none"

            }
        }
    })
}
//Dropdown menu toggle
let dropdown = () => {
    document.getElementById("contestlinks").classList.toggle("show")
}
window.onclick=(event)=>{
    if(!event.target.matches(".dropbtn")){
        let dropdowns=document.getElementsByClassName("contestlinks")
        for(let i=0;i<dropdowns.length;i++){
            opendrop=dropdowns[i]
            if(opendrop.classList.contains("show")){
                opendrop.classList.remove("show")
            }
        }
    }
}
//Filter
const filter=()=>{
let res=fetch(url)
res.then((v)=>{
    return v.json()
}).then((contest)=>{
    for(i=0;i<contest.length;i++){
    let checkbox=document.getElementById("filterbtn")
         if(checkbox.checked!=true){
            document.getElementsByClassName("card")[i].style.display = ""
        }
        else if(checkbox.checked==true){
            if(contest[i].in_24_hours=="Yes"){
                document.getElementsByClassName("card")[i].style.display = ""
            }
                else{
                    document.getElementsByClassName("card")[i].style.display = "none"
                }
        }
    }
})
}