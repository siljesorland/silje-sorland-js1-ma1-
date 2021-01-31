question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();

question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

question 3

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";
heading.style.fontSize = "2em";


question 4

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";
heading.style.fontSize = "2em";
heading.classList.add("Subheading");


question 5

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.classList.add("resultsContainer");
resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


question 7

function animal(list) {
    console.log(list);
}

function animal(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

animal("cats");

question 8

function greatCats(cats) {

    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i]);
    }
    

