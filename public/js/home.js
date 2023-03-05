const blogSection = document.querySelector('.blogs-section')

db.collection("blogs").get().then((blogs)=>{
   blogs.forEach( blog=> {
    if(blog.id !=decodeURI(location.pathname.split("/").pop())){
        createBlog(blog);
    }
   }); 
})

const createBlog = (blog) =>{
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
 
    <div className="image-conatiner">
    <figure> 
   <img src="${data.bannerImage}" class="blog-image" alt="">
   </figure>
   </div>
     </br>
    <div class="blog-containt">
    <h1 class="blog-title">${data.title.substring(0, 50) + '...'}</h1>
    <p class="blog-overview">${data.article.substring(0, 100) + '...'}</p>

    </div>
    <div class="btn-container">
    <a href="/${blog.id}" class="dark">read more</a>
    </div>
</div>

    `
}