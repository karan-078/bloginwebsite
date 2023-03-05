const blogSection = document.querySelector(".blogs-section");

let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector(".login");

auth.onAuthStateChanged((user) => {
  if (user) {
    login.style.display = "none";
    getUserWrittenBlogs();    
  } else {
    setupLoginBUtton();
  }
});
const setupLoginBUtton = () => {
  ui.start("#loginUI", {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectURL) {
        login.style.display = "none";
        return false;
      },
    },

    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  });
};

// fetch user written blogs

const getUserWrittenBlogs = () => {
  db.collection("blogs")
    .where("author", "==", auth.currentUser.email.split("@")[0])
    .get()
    .then((blogs) => {
      blogs.forEach((blog) => {
        createBlog(blog);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


const createBlog = (blog) =>{
    let data = blog.data();
    blogSection.innerHTML += `
 
     <div class="blog-card">
     <div className="image-conatiner">
     <figure> 
    <img src="${data.bannerImage}" class="blog-image" alt="">
    </figure>
    </div>
    <div class="blog-containt"> 
    <h1 class="blog-title">${data.title.substring(0, 50) + '...'}</h1>
    <p class="blog-overview">${data.article.substring(0, 100) + '...'}</p>

 </div>
 <div class="btn-container">
 <a href="/${blog.id}" class="btn dark">Read</a>

 <a href="/${blog.id}/editor"class="btn dark">Edit</a>
<a href="#"class="btn dark" onclick="deleteBlog('${blog.id}')">Delete</a>

</div>
</div>


    `
;
    
}




const deleteBlog = (id) => {
  db.collection("blogs")
    .doc(id)
    .delete()
    .then(() => {
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
