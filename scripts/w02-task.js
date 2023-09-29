/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */
let fullName = 'Masashi Ota';
/* Step 2 - Variables */
let currentYear = new Date().getFullYear()
let profilePicture = "images/myimage.jpeg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement= document.querySelector('img')




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = `${currentYear}`
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`)








/* Step 5 - Array */
let foods = ["Ramen", "Sushi", "Hummburger", "Lemon"]
foodElement.innerHTML = `${foods}`
let food = "Pizza"
foods.push(food)
foodElement.innerHTML += `<br>${foods}`
foods.shift()
foodElement.innerHTML += `<br>${foods}`
foods.pop()
foodElement.innerHTML += `<br>${foods}`

console.log(foods)




