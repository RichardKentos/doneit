


const user = {
    username: "riso",
    password: "riso"
}


const database = [
    user
]

let newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	},
];

const loginNameInput = document.querySelector("input[type='name']");
const loginPasswordInput = document.querySelector("input[type='password']");
// console.log(loginNameInput);
const loginButton  = document.querySelector(".btn-primary");
let loginName = "";
let loginPassword = "";

const signUp = document.querySelector(".sign-up");
const news = document.querySelector(".newsfeed");
let feedName = "";
let timeline = "";


const signup = () => {
	let newUser = {};
	newUser.username = prompt("What is your name ?");
	newUser.password = prompt("What is your password ?");
	database.push(newUser);
}
signUp.addEventListener("click", signup);


const success = document.querySelector(".alert-success");
const fail = document.querySelector(".alert-danger");
const failPar = document.querySelector(".fail-p");
const loginDiv = document.querySelector(".login");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const logo = document.querySelector(".facebook");

const login = () => {
	loginName = loginNameInput.value;
	loginPassword = loginPasswordInput.value;
	let checkName;
	let checkPass;
	for (i=0; i < database.length; i++) {
		checkName = database[i].username;
		checkPass = database[i].password;
	}
	if (loginName === checkName && loginPassword === checkPass) {
		loginNameInput.value = "";	
		loginPasswordInput.value = "";
		news.innerHTML = "";
		loginDiv.style.display = "none";
		header.style.borderBottom = "4px solid  rgb(142, 228, 71)";
		footer.style.borderTop = "4px solid  rgb(142, 228, 71)";
		logo.style.color = "rgb(142, 228, 71)";
		setTimeout(function() {
			header.style.borderBottom = "4px solid  rgb(255, 81, 0)";
			footer.style.borderTop = "4px solid  rgb(255, 81, 0)";
			logo.style.color = "rgb(255, 81, 0)";
		}, 1000);
		fail.style.display = "none";
		let loggedAs = document.createElement("h2");
		loggedAs.innerHTML = "Logged in as: " + loginName;
		news.appendChild(loggedAs);
		getNews(newsfeed);
		addPost();
	}
	else if (loginName === checkName && !(loginPassword === checkPass) ) {
		fail.style.display = "block";
		failPar.textContent = "Correct username, incorrect password";
		setTimeout(function() {
			fail.style.display = "none";
		}, 2000);
		loginNameInput.value = "";
		loginPasswordInput.value = "";
	}
	else if (!(loginName === checkName) && loginPassword === checkPass ) {
		fail.style.display = "block";
		failPar.innerText = "Incorrect username, correct password";
		setTimeout(function() {
			fail.style.display = "none";
		}, 2000);
		loginNameInput.value = "";
		loginPasswordInput.value = "";
	}
	else {
		fail.style.display = "block";
		failPar.innerText =  "We don't know you yet ! Please sign up ";
		setTimeout(function() {
			fail.style.display = "none";
		}, 2000);
		loginNameInput.value = "";
		loginPasswordInput.value = "";
	}
}

loginButton.addEventListener("click", login);



const loginEnter = (event) => {
	if (event.keyCode === 13) {
		login();
	}
}
loginPasswordInput.addEventListener("keypress", loginEnter);



const getNews = (newsfeed) => {
	newsfeed.forEach(element => {
		feedName = element.username;
		timeline = element.timeline;
		const text = document.createElement("p");
		text.innerHTML = feedName + "<br>" + timeline;
		news.appendChild(text);
	});
}


// Adding posts

const postSubmit = document.createElement("button");
postSubmit.style.position = "absolute";
postSubmit.classList.add("btn","btn-primary");
postSubmit.style.right = "5%";
postSubmit.style.top = "80%";
let postInput = document.createElement("textarea");
postInput.classList.add("form-control");
postInput.placeholder = "Share your thoughts !";
postInput.style.position = "absolute";
postInput.style.height = "350px";
postInput.style.width = "300px";
postInput.style.right = "5%";
postInput.style.top = "25%";

const addPost = () => {
	postSubmit.innerText = "Add post";
	news.appendChild(postInput);
	news.appendChild(postSubmit);
}

postSubmit.addEventListener("click", function() {
	let post = document.createElement("p");
	post.innerText = postInput.value;
	console.log(post);
	news.appendChild(post);
	postInput.value = ""
});
