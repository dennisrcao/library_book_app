/* js code for creating backgrounds  */
var colour = "#00baff";
var sparkles = 120;

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
    if (document.getElementById) {
        var i, rats, rlef, rdow;
        for (var i = 0; i < sparkles; i++) {
            var rats = createDiv(3, 3);
            rats.style.visibility = "hidden";
            document.body.appendChild(tiny[i] = rats);
            starv[i] = 0;
            tinyv[i] = 0;
            var rats = createDiv(5, 5);
            rats.style.backgroundColor = "transparent";
            rats.style.visibility = "hidden";
            var rlef = createDiv(1, 5);
            var rdow = createDiv(5, 1);
            rats.appendChild(rlef);
            rats.appendChild(rdow);
            rlef.style.top = "2px";
            rlef.style.left = "0px";
            rdow.style.top = "0px";
            rdow.style.left = "2px";
            document.body.appendChild(star[i] = rats);
        }
        set_width();
        sparkle();
    }
}

function sparkle() {
    var c;
    if (x != ox || y != oy) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++)
            if (!starv[c]) {
                star[c].style.left = (starx[c] = x) + "px";
                star[c].style.top = (stary[c] = y) + "px";
                star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                star[c].style.visibility = "visible";
                starv[c] = 50;
                break;
            }
    }
    for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
    }
    setTimeout("sparkle()", 40);
}

function update_star(i) {
    if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        if (stary[i] < shigh + sdown) {
            star[i].style.top = stary[i] + "px";
            starx[i] += (i % 5 - 2) / 5;
            star[i].style.left = starx[i] + "px";
        } else {
            star[i].style.visibility = "hidden";
            starv[i] = 0;
            return;
        }
    } else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible"
    }
}

function update_tiny(i) {
    if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
    }
    if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        if (tinyy[i] < shigh + sdown) {
            tiny[i].style.top = tinyy[i] + "px";
            tinyx[i] += (i % 5 - 2) / 5;
            tiny[i].style.left = tinyx[i] + "px";
        } else {
            tiny[i].style.visibility = "hidden";
            tinyv[i] = 0;
            return;
        }
    } else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;

function mouse(e) {
    set_scroll();
    y = (e) ? e.pageY : event.y + sdown;
    x = (e) ? e.pageX : event.x + sleft;
}

function set_scroll() {
    if (typeof (self.pageYOffset) == "number") {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
    } else if (document.body.scrollTop || document.body.scrollLeft) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
    } else {
        sdown = 0;
        sleft = 0;
    }
}

window.onresize = set_width;

function set_width() {
    if (typeof (self.innerWidth) == "number") {
        swide = self.innerWidth;
        shigh = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientWidth) {
        swide = document.documentElement.clientWidth;
        shigh = document.documentElement.clientHeight;
    } else if (document.body.clientWidth) {
        swide = document.body.clientWidth;
        shigh = document.body.clientHeight;
    }
}

function createDiv(height, width) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.overflow = "hidden";
    div.style.backgroundColor = colour;
    return (div);
}




/*  practice code on udemy*/

let currentResult = 0;
let enteredNumber = 12;
const calcDescription = `${currentResult} + ${enteredNumber}`;
console.log(calcDescription);

















/* begin logic code */

const openPopupButton = document.querySelectorAll('[data-popup-target]'); //returns NodeList representing a list of document's elements that match the specified group of selectors
const closePopupButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");

console.log("open popupbutton is ");
console.log(openPopupButton);
console.log("close Popup button is");
console.log(closePopupButton);
console.log("overlay");
console.log(overlay);

let books = JSON.parse(localStorage.getItem("books")) || [];
const bookshelf = document.querySelector(".bookshelf");

openPopupButton.forEach (button => 
{
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget); 
        console.log("inside event listener popup is");
        console.log(popup);
        openModal(popup); 
    })
})

// overlay.addEventListener ('click', () => {
//     const modals = document.querySelectorAll('.popup.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })


closePopupButton.forEach(button => 
{
    button.addEventListener('click', ()=> {
        const popup = button.closest('.popup');
        console.log("inside closepopupbutton event listener popup is");
        closeModal(popup);
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


let myLibrary = []; //my array of books


class Book {
 constructor (title, author, pages, read) {
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.read = read; 
 }

}



function addBook(i) {
    let bookNode = document.createElement("div");
    bookNode.classList.add("book");
    bookNode.setAttribute("data-index", '${i}');
    console.log("added book to library");



    const title = document.getElementById("title").value;
    let titleNode = document.createElement("h2");
    titleNode.innerHTML = `Title: ${title}`;

    const author = document.getElementById("author").value;
    let authorNode = document.createElement("h3");
    authorNode.innerHTML = `Author: ${author}`;

    const pages = document.getElementById("pages").value;
    let pageNode = document.createElement("h3");
    pageNode.innerHTML = `Pages: ${pages}`;

    const read = document.getElementById("read").value;
    let readNode = document.createElement("h3");
    readNode.innerHTML = `Read? ${read}${read === "Yes" ? "😃" : "😢"}`;

    let updateNode = document.createElement("button");
    console.log(updateNode);
    updateNode.classList = "update";
    updateNode.innerHTML = `Update <i class="fas fa-pen"></i>`;

    let trashNode = document.createElement("button");
    trashNode.classList = "trash";
    trashNode.innerHTML = `Delete <i class="fas fa-trash-alt">`;

    const book = new Book(title, author, pages, read);
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    bookNode.appendChild(titleNode);
    bookNode.appendChild(authorNode);
    bookNode.appendChild(pageNode);
    bookNode.appendChild(readNode);
    bookNode.appendChild(updateNode);
    bookNode.appendChild(trashNode);
    bookshelf.appendChild(bookNode);
    formOpenOrClosed();
    form.reset();

  // update book status
  updateNode.addEventListener("click", () => {
    if (readNode.innerHTML === "Read? No😢") {
      readNode.innerHTML = "Read? Yes😃";
      console.log("in the update node, was no, trigger this");
      book.read = "Yes";
      localStorage.setItem("books", JSON.stringify(books));
    } else {
      readNode.innerHTML = "Read? No😢";
      console.log("in the update node, was yes, trigger this");
      book.read = "No";
      localStorage.setItem("books", JSON.stringify(books));
    }
  });
  // delete book
  trashNode.addEventListener("click", () => {
    bookshelf.removeChild(bookNode);
    books.splice(bookNode, 1);
    localStorage.setItem("books", JSON.stringify(books));
  });
}

function getBooks() {
    books.forEach(function (book, i) {
      let bookNode = document.createElement("div");
      bookNode.classList.add("book");
      bookNode.setAttribute("data-index", `${i}`);
  
      const title = document.getElementById("title").value;
      let titleNode = document.createElement("h2");
      titleNode.innerHTML = `Title: ${book.title}`;
  
      const author = document.getElementById("author").value;
      let authorNode = document.createElement("h3");
      authorNode.innerHTML = `Author: ${book.author}`;
  
      const pages = document.getElementById("pages").value;
      let pageNode = document.createElement("h3");
      pageNode.innerHTML = `Pages: ${book.pages}`;
  
      const read = document.getElementById("read").value;
      let readNode = document.createElement("h3");
      readNode.innerHTML = `Read? ${book.read}${
        book.read === "Yes" ? "😃" : "😢"
      }`;
  
      let updateNode = document.createElement("button");
      updateNode.classList = "update";
      updateNode.innerHTML = `Update <i class="fas fa-pen"></i>`;
  
      let trashNode = document.createElement("button");
      trashNode.classList = "trash";
      trashNode.innerHTML = `Delete <i class="fas fa-trash-alt">`;
  
      bookNode.appendChild(titleNode);
      bookNode.appendChild(authorNode);
      bookNode.appendChild(pageNode);
      bookNode.appendChild(readNode);
      bookNode.appendChild(updateNode);
      bookNode.appendChild(trashNode);
      bookshelf.appendChild(bookNode);
  
      // update book status
      updateNode.addEventListener("click", () => {
        if (readNode.innerHTML === "Read? No😢") {
          readNode.innerHTML = "Read? Yes😃";
          book.read = "Yes";
          localStorage.setItem("books", JSON.stringify(books));
        } else {
          readNode.innerHTML = "Read? No😢";
          book.read = "No";
          localStorage.setItem("books", JSON.stringify(books));
        }
      });
      // delete book
      trashNode.addEventListener("click", () => {
        bookshelf.removeChild(bookNode);
        books.splice(bookNode, 1);
        localStorage.setItem("books", JSON.stringify(books));
      });
    });
  }
  

  form.addEventListener("submit", (e, i) => {
    e.preventDefault();
    addBook(i);
  });