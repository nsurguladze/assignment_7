

// "<input type = "button" id = "hider" value = "click to hide the text"/>"
// <div id = "text"> Text </div>
// button - ზე დაჭერის შემთხვევაში დამალე <div id = "text"> Text </div> ელემენტი

const btn = document.getElementById("hider");
const text = document.getElementById("text");

btn.addEventListener("click", function (){
    text.style.display = "none"
})

