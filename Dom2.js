//selecting elements
let a=document.getElementById("hello")
a.style.backgroundColor="lightgreen"
let b=document.createElement("div")
let kohliimage=document.createElement("Img")
kohliimage.src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662657385-7641.jpg"
b.textContent="This is div tag in p tag"
kohliimage.width="400"
a.append(b,kohliimage)
a.removeChild(b)
let flower=document.createElement("iframe")
flower.frameBorder=1;
flower.src="https://media.istockphoto.com/id/2111424340/photo/orange-gerbera-flower-head-macro-top-view.jpg?b=1&s=612x612&w=0&k=20&c=bIfhCQvfogD8ELzBPowmIf0MJU2HrUzSj7fK1fkVK0o="
flower.width="400"
a.replaceChild(flower,kohliimage)
const clonedElem=a.cloneNode(true);
document.body.append(clonedElem)
//modifying Attributes
let cat=document.createElement("img")
cat.setAttribute("src","https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg")
cat.setAttribute("width","300")
cat.setAttribute("backgroundColor","lightpink")
cat.style.padding="30px"
 document.body.append(cat)
console.log(cat.getAttribute("background"))
console.log(cat.removeAttribute("background"))
//working with classes
let divTag=document.createElement("div")
divTag.className="container"
divTag.classList.add("siddi")
divTag.classList.add("Akhila")
divTag.classList.remove("siddi")
divTag.classList.replace("Akhila","Ishu")
console.log(divTag)
//Event Handling
cat.addEventListener("click",function(){
    alert("cat img is clicked")
    
})
//Navigating the Dom tree
let p=document.querySelector("p")
console.log(p.parentElement)
let div=document.querySelector("div")
console.log(div.children);
console.log(div.firstElementChild);
console.log(div.lastElementChild);
let thirdp=document.querySelector(".three")
console.log(thirdp.nextElementSibling)
 //Other useful methods
let t=document.querySelector(".three");
t.insertAdjacentElement("beforebegin",kohliimage)