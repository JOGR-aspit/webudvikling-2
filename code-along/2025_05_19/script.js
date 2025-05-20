function createNewElement() {
    const newElement = document.createElement('div');
    // element is now created
    newElement.textContent = 'Test JS';
    newElement.className = 'test';
    newElement.style.color = 'darkgreen';
    newElement.style.backgroundColor = 'lightblue';
    newElement.setAttribute('style', 'color: darkgreen; background-color: lightblue;');
    document.body.appendChild(newElement);
}

// createNewElement();

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute('style', "border: 1px solid black; background-color: lightpink;")
container.appendChild(div);

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
div.appendChild(h1)

const p2 = document.createElement("p")
p2.textContent = "ME TOO!"
div.appendChild(p2)

const btn = document.querySelector("#btn")

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
