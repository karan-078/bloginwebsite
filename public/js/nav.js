let ul = document.querySelector('.links-container');

console.log(ul)

auth.onAuthStateChanged((user)=>{
    if(user){
        // useer is loggin
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>

        <li class="link-item"><a href="#" class="link" onclick="logoutUser()">Logout</a></li>   
        `
    } else{
        // no one is logged in
        ul.innerHTML+= `
        <li class="link-item"><a href="/admin" class="link">login</a></li>

        `
    }
})