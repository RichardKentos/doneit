


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
	{
		username: "Mamka",
		timeline: "Som super !"
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
const fail = document.querySelector(".alert-success");

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
		let loggedAs = document.createElement("h2");
		loggedAs.innerHTML = "Logged in as: " + loginName;
		news.appendChild(loggedAs);
		getNews(newsfeed);
		addPost();

	}
	else {
		alert("Failed to login");
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



const postSubmit = document.createElement("button");
postSubmit.style.position = "absolute";
postSubmit.style.right = "0";
postSubmit.style.top = "50%";
let postInput = document.createElement("textarea");
postInput.style.position = "absolute";
postInput.style.right = "0";
postInput.style.top = "40%";
let post = document.createElement("p");

const addPost = () => {
	postSubmit.innerText = "Add post";
	news.appendChild(postInput);
	news.appendChild(postSubmit);
}

postSubmit.addEventListener("click", function() {
	post.innerText = postInput.value;
	console.log(post);
	news.appendChild(post);
	postInput.value = ""
});