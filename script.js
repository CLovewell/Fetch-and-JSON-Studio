// TODO: add code here
function compareSpaceHours(astronaut1, astronaut2) {
    return astronaut2.hoursInSpace - astronaut1.hoursInSpace;
}

window.addEventListener("load", function () {


    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (fullfillment) {
            fullfillment.json().then(function (astronautData) {
                document.querySelector("h1").innerHTML += `: ${astronautData.length}`;
                astronautData.sort(compareSpaceHours);
                let container = document.getElementById("container");
                for (astronaut of astronautData) {
                    let activeColor = astronaut.active ? "green" : "black";
                    container.innerHTML += `<div class="astronaut">
                <div class="bio"> 
                  <h3> ${astronaut.firstName} ${astronaut.lastName} </h3>
                    <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li style="color:${activeColor}">Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                  </div>
                  <img class="avatar" src=${astronaut.picture}> </img>
                </div>`;
                }
            });
        });
});