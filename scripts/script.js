document.addEventListener("DOMContentLoaded", () => {
    console.log("hello console!");
    addExampleBlogEntry();
    setStandardCookie();
    
  //Button Function
    
    const btnClicky = document.getElementById("btnClicky");
    btnClicky.addEventListener("click", () => {
      document.getElementById("blogEntry").textContent = 
        "Have an amazing day!!";
    });
  });
  
  function addExampleBlogEntry() {
    const blogEntries = document.getElementById('blog-container');
    if (blogEntries) {
      const entry = document.createElement('div');
      entry.className = 'card shadow-sm blog-entry';
      entry.innerHTML = `
        <div class="card-body">
          <h5 class="card-title"><i class="bi bi-pencil-square"></i> Blog dom mutated</h5>
          <p class="card-text">Example of a new blog entry being added when the page loads.</p>
          
        </div>
      `;
      blogEntries.prepend(entry);
    }
  }
  
  // Cookie function that I got from w3s
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function setStandardCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 30);
      }
    }
  }

