
const baseURL = 'https://fakestoreapi.com/'
const categoriesEl = document.querySelector('.categories')
const productsEl = document.querySelector('.products')


// methods
async function getCategories () {
  let result = await fetch(`${baseURL}products/categories`)
  let categories = await result.json()

  categories.forEach((category) => {
    categoriesEl.innerHTML += `
    <div class="category">${category}</div>
    `
  })
}

async function getAllProducts () {
  let result = await fetch(`${baseURL}products/`) 
  let products = await result.json()

  let newProducts = products.slice(5, 15)
  console.log(newProducts)

  newProducts.forEach((product) => {
   productsEl.innerHTML += `
   <div class="card" style="width: 18rem; ">
    <img class="thumbnail" src="${product.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <span class="card-price">${product.price}TL<span>
      <a href='#'>Satın Al<a>
    </div>
  </div>
   `
  })
   
} 
  // const productlist =()=>{
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //           .then(json=>{console.log(json);
  //             setProducts(json);
  //             console.log(products);
        
  //           })
  // } 


let thumbnails=document.getElementsByClassName("thumbnail")
let slider=document.getElementById("slider")
let buttonright=document.getElementById("slide-right")
let buttonleft=document.getElementById("slide-left")

buttonleft.addEventListener("click",()=>{
  slider.scrollLeft -=125;
})

buttonright.addEventListener("click",()=>{
  slider.scrollLeft +=125;
})

const maxScrollLeft=slider.scrollWidth - slider.clientWidth;

function autoplay(){
  if(slider.scrollLeft > (maxScrollLeft-1)){
    slider.scrollLeft -=maxScrollLeft;
  }
  else{
    slider.scrollLeft +=1
  }
}
// let play = setInterval(autoplay,50);
getAllProducts()
getCategories()


// toggle sidebar
const categoryBtn = document.querySelector('.category-btn')
const sideBar = document.querySelector('.sidebar')

function toggleSideBar() {
  let display = window.getComputedStyle(sideBar).display
  console.log(display)
  
  if(display == 'flex') {
    sideBar.style.display = 'none'
  }
  else if (display == 'none') {
    sideBar.style.display = 'flex'
  }
}
