
const form = document.querySelector("form")
const hiddenmsg = document.querySelector(".hiddenmsg")
form.addEventListener("submit",(ev) => {
    ev.preventDefault();
    hiddenmsg.style.display = "inline"
})




function loadfech(breedList,load) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadImg(this.value)">
       <option>Choose a dog Breed</option>
       ${Object.keys(breedList).map( x => `<option>${x}</option>`).join('')}
    </select> `
   if (load) {
    loadImg("akita")
   }
  

  }


function loadBread(loadv) {
fetch("https://dog.ceo/api/breeds/list/all").then( (response) => response.json()).then((breeds) => {
    loadfech(breeds.message,loadv)
})
}


loadBread(true);
