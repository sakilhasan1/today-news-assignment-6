
// ..........category-name ...........
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
}
const displayCategory = Categoris => {
    const divContainer = document.getElementById('container')
    Categoris.forEach(item => {
        const ul = document.createElement('ul')
        ul.innerHTML = ` 
        <a >${item.category_name}</a>
        `;
        divContainer.appendChild(ul);
    });
}
loadCategory();

// ...............card start ...............

const loadCategoris = () => {
    const url = ' https://openapi.programming-hero.com/api/news/category/02'
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.data))
}

const displayCategories = categories => {
    const categoriesContainer = document.getElementById('categories-container')
    categories.forEach(category => {
        // console.log(category);
        const categorieDiv = document.createElement('div');
        categorieDiv.classList.add('col');
        categorieDiv.innerHTML = `
        <div class="card mb-3 text-center mt-5 ms-5 " style="max-width: 840px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${category.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8 ">
                <div class="card-body">
                    <h5 class="card-title">${category.title}</h5>
                    <p class="card-text">${category.details.slice(0, 260)}</p>
                  <div class="d-flex">
                 <div class="d-flex me-4">
                  <img src="${category.author.img}"  class="img-fluid rounded-circle" style=" max-width:10%;" >
                 <p> ${category.author.name} </br>${category.author.published_date}<p/>
                 </div>
                 <p> view: ${category.total_view}</p>
                  </div> 
                </div>
            </div>
        </div>
    </div>
        `;
        categoriesContainer.appendChild(categorieDiv);
    })
}
loadCategoris();
