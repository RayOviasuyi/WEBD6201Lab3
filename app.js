/*
Authors: Ray Oviasuyi, Naa-adjoa Taylor
*/

//IIFE function
(function() {
    //Depending on the open page, a function will run
    function Start() {
        console.log("App Started");
        switch (document.title) {
            case "Home Page":
                DisplayHomePage();
                break;
            case "Projects":
                DisplayProjectsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }
    }
    window.addEventListener("load", Start)
})()

//Grabbing the main container element and creating a welcome message for each page
const mainContainer = document.querySelector("#main-container");
const pageHeader = document.createElement("h1");
const pageMutedHeader = document.createElement("p");
pageMutedHeader.setAttribute("class", "text-muted");

//Prepending the welcome message on the main container which will be present on every page
mainContainer.prepend(pageHeader, pageMutedHeader);


//Creating and appending the bottom navbar
const bottomNavbarHTML = `<nav class="navbar fixed-bottom navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Bottom Navbar</a>
                            </div>
                        </nav>`;
document.body.insertAdjacentHTML("beforeend", bottomNavbarHTML);


//Changing "Products" to "Projects in the top navbar, and adding a "Human Resources" link to the navbar
const projectsAnchor = document.querySelector("li a[href=\"projects.html\"]");
const servicesAnchor = document.querySelector("li a[href=\"services.html\"]");
let humanResourceHTML = `<li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-person"></i> Human Resources</a>
                         </li>`;
projectsAnchor.innerHTML = projectsAnchor.innerHTML.replace("Products", "Projects");
servicesAnchor.parentElement.insertAdjacentHTML("afterend", humanResourceHTML);




//Main page
function DisplayHomePage(){
    pageHeader.textContent = "Welcome to the Home Page";
    pageMutedHeader.textContent = "Nothing to see here.";

    $("#AboutUsBtn").on("click", () => {
        location.href = "about.html";
    });

    $("main").append(`<p id="MainParagraph" class="mt-3">This is my main paragraph</p>`)

    $("body".append(`<article class="container">
                                    <p id="ArticleParagraph" This is my private article</p></article>`))
}

//Projects page
function DisplayProjectsPage(){
    pageHeader.textContent = "Our Favorite Projects";
    pageMutedHeader.textContent = "That we were completely a part of.";

    //Creating an array of li elements
    const listOfProjects = document.createElement("ol");
    listOfProjects.append(
        createLiElement ("The CN Tower - a 553.3 m-high concrete communications and observation tower in " +
            "downtown Toronto, Ontario, Canada.")
    );
    listOfProjects.append(
        createLiElement("The International Space Station (ISS) - the largest modular space station in low Earth " +
            "orbit involving 5 space agencies and us.")
    );
    listOfProjects.append(
        createLiElement("Apollo Program - The third United States human spaceflight program carried out by the National Aeronautics" +
            ", Space Administration, and us. Landing the first humans on the moon.")
    );
    mainContainer.append(listOfProjects);

    const projectImages = [
        createImgElement("https://fastly.4sqi.net/img/general/200x200/12523313_EqwRB2h8ehawQfm83aIXgf7S29S_0zwzNcYhZyI2QYw.jpg"),
        createImgElement("https://www.howitworksdaily.com/wp-content/uploads/2016/04/International_Space_Station_after_undocking_of_STS-132-200x200.jpg"),
        createImgElement("https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Apollo_program.svg/200px-Apollo_program.svg.png")
        ];

    //appending them to the main container
    mainContainer.append(...projectImages);
}

//Services/Skills Page
function DisplayServicesPage(){
    pageHeader.textContent = "Our Services";
    pageMutedHeader.textContent = "Very real skills.";

    //Creating an array of li elements
    const listOfSkills = document.createElement("ol");
    listOfSkills.append(
        createLiElement("Excellent Project Management with real experience.")
    );
    listOfSkills.append(
        createLiElement("A wide variety of thoughtful and unique ideas.")
    );
    listOfSkills.append(
        createLiElement("Software development related experienced")
    );
    mainContainer.append(listOfSkills);

    const servicesImages = [
        createImgElement("https://static.vecteezy.com/system/resources/thumbnails/003/738/370/small/management-project-icon-free-vector.jpg"),
        createImgElement("https://img.freepik.com/free-icon/girl-thinking_318-39631.jpg?auto=format&h=200"),
        createImgElement("https://static.thenounproject.com/png/3843527-200.png")
    ]

    //appending the li elements to the main container
    mainContainer.append(...servicesImages);


}

//About Us Page
function DisplayAboutPage(){
    pageHeader.textContent = "About Us";
    pageMutedHeader.textContent = "Everything you need to know.";

    //Creating a header and paragraph for each team member
    const aboutUsOne = document.createElement("h2");
    aboutUsOne.textContent = "Ray Oviasuyi";
    const aboutUsParagraphOne = document.createElement("p");
    aboutUsParagraphOne.textContent = "My huge experience in building skyscrapers will definitely help build your software."

   // const aboutUsTwo = document.createElement("h2");
    //aboutUsTwo.textContent = "ireoror";
   // const aboutUsParagraphTwo = document.createElement("p");
    //aboutUsParagraphTwo.textContent = "Best in building skyscrapers."



    mainContainer.append(aboutUsOne, aboutUsParagraphOne, aboutUsTwo, aboutUsParagraphTwo);
    mainContainer.append(createImgElement("https://static.thenounproject.com/png/1582633-200.png"));
}

//Contact page
function DisplayContactPage(){
    pageHeader.textContent = "Contact Page";
    pageMutedHeader.textContent = "Make sure to check the console!";


    //Getting each of the DOM elements from the form on the page
    const nameInput = document.querySelector("#full-name");
    const contactInput = document.querySelector("#contact-number");
    const emailInput = document.querySelector("#email-address");
    const messageInput = document.querySelector("#user-message");
    const formButton = document.querySelector("#console-message-button");

    //Adding an event to the page.
    //Everytime the button is clicked, the console will display a message based on the values inside the form
    //3 seconds later it will redirect you to the front page
    formButton.addEventListener("click", () => {
        console.log(`Name: ${nameInput.value}\nContact: ${contactInput.value}\n Email:${emailInput.value}
        Message:${messageInput.value}`);

        setTimeout(() =>{
            window.location.href = "index.html";
        }, 3000);
    })
}


function createLiElement(itemText){
    const newListItem = document.createElement("li");
    newListItem.textContent = itemText;
    return newListItem;
}


function createImgElement(imageSrc){
    const itemImage = document.createElement("img");
    itemImage.src = imageSrc;
    return itemImage;
}

// Get the entered username and update the navbar
$("#loginBtn").click(function() {
    const username = $("#usernameInput").val();
    let navbarText;
    navbarText.text("Contact Us  " + username + "  Login/Logout");
});

// Create a new div element with id "ErrorMessage"
const errorMessage = $("<div>").attr("id", "ErrorMessage");

// Hide the error message by default
errorMessage.hide();

// Append the error message to the register form
$("#registerForm").append(errorMessage);

// Check the first name input
const firstNameInput = $("#firstNameInput");
if (firstNameInput.val().length < 2) {
    // Display an error message
    $("#ErrorMessage").text("First name must be at least 2 characters long.");
    $("#ErrorMessage").show();
}

// Check the last name input
const lastNameInput = $("#lastNameInput");
if (lastNameInput.val().length < 2) {
    // Display an error message
    $("#ErrorMessage").text("Last name must be at least 2 characters long.");
    $("#ErrorMessage").show();
}

// Check the email input
const emailInput = $("#emailInput");
if (emailInput.val().length < 8 || !emailInput.val().includes("@")) {
    // Display an error message
    $("#ErrorMessage").text("Please enter a valid email address.");
    $("#ErrorMessage").show();
}

// Check the password inputs
var passwordInput = $("#passwordInput");
var confirmPasswordInput = $("#confirmPasswordInput");
if (passwordInput.val() != confirmPasswordInput.val()) {
    // Display an error message
    $("#ErrorMessage").text("Passwords do not match.");
    $("#ErrorMessage").show();

} else if (passwordInput.val().length < 6) {
    // Display an error message
    $("#ErrorMessage").text("Password must be at least 6 characters long.");
    $("#ErrorMessage").show();
}

// Prevent form submission when Register button is clicked
$("#registerBtn").click(function(event) {
    event.preventDefault();
    // Validate form inputs and create User instance
    // ...
});

class User {
    lastName;

    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName
    }
}

