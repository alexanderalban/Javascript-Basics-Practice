
const disappear = (element) => {
   console.log("element was clicked. And the ID is: " + element.id)
//    console.log(element.style)

    document.getElementById(element.id).style.display = "none"
}


// 1. Build disappear function
// 1.5 What is the console? And it's methods...
// 2. Test for clicking with console.log "(Element was clicked ")
// 3. How to get the id compare to className & style and all the null items -  console.log(element.)

//4. the document
//5. Method of the document: getElementById() and pass the id
// 6. Tie all together to set the style.display property to "none"! - document.getElementById(element.id).style.display = "none"







// From Geeks for Geeks - https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/

// document.getElementById("circle").onclick = function() {

//    document.getElementById("circle").style.display = "none";

// }

// document.getElementById("rounded").onclick = function() {

//      document.getElementById("rounded").style.display = "none";

// }

// document.getElementById("square").onclick = function90 {

//      document.getElementById("square").style.display = "none";

// }