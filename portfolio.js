
runpercentage=document.querySelector(".running-percentage")
circlerotating=document.querySelector(".rotating-circle")

runpercentage2=document.querySelector(".running-percentage2")
circlerotating2=document.querySelector(".rotating-circle2")

runpercentage3=document.querySelector(".running-percentage3")
circlerotating3=document.querySelector(".rotating-circle3")

runpercentage4=document.querySelector(".running-percentage4")
circlerotating4=document.querySelector(".rotating-circle4")

startvalue=-2
endvalue=90
speed=35
running = setInterval(()=>{
    startvalue++
    runpercentage.textContent= startvalue + "%"
    circlerotating.style.background= `conic-gradient(cyan  ${startvalue * 3.6}deg, lightgrey 0deg)`

    if(startvalue==endvalue)
    {
        clearInterval(running)
    }

},speed)

startvalue2=-2
endvalue2=85
running2 = setInterval(()=>{
    startvalue2++
    runpercentage2.textContent= startvalue2 + "%"
    circlerotating2.style.background= `conic-gradient(cyan  ${startvalue2 * 3.6}deg, lightgrey 0deg)`

    if(startvalue2==endvalue2)
    {
        clearInterval(running2)
    }

},speed)

startvalue3=-2
endvalue3=80
running3 = setInterval(()=>{
    startvalue3++
    runpercentage3.textContent= startvalue3 + "%"
    circlerotating3.style.background= `conic-gradient(cyan  ${startvalue3 * 3.6}deg, lightgrey 0deg)`

    if(startvalue3==endvalue3)
    {
        clearInterval(running3)
    }

},speed)

startvalue4=-2
endvalue4=75
running4 = setInterval(()=>{
    startvalue4++
    runpercentage4.textContent= startvalue4 + "%"
    circlerotating4.style.background= `conic-gradient(cyan  ${startvalue4 * 3.6}deg, lightgrey 0deg)`

    if(startvalue4==endvalue4)
    {
        clearInterval(running4)
    }

},speed)


// Scroll on top


// hash = window.location.hash

// if( hash )
// {   
//     if( hash.length )
//     {
//         $('html, body').animate({
//             scrollTop: hash.offset().top
//         },900)
//     }

// }

// nav toggle starts

sidenav=document.querySelector(".side-nav")
navbtn=document.getElementById("nav-btn")


navbtn.addEventListener("click", ()=>{
    sidenav.classList.toggle("side-nav2")
})

// Loader

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("#loader").style.visibility = "visible";
        document.querySelector("body").style.visibility = "hidden";
        
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};