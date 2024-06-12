// This is the articles' array
const articles = [
  {
    id: 1,
    title: "The Rise of Quantum Computing",
    author: "John Doe",
    date: "20 Sep",
    likes: 150,
    comments: 45,
    isLiked: false,
    isCommented: false,
    isRead: false,
    category: "Technology",
    image: "/quantumcomp.jpg",
    url: "https://installars/article1" 
  }, //tech
  {
    id: 2,
    title: "Exploring the Wonders of Space",
    author: "Jane Smith",
    date: "15 Mar",
    likes: 200,
    comments: 60,
    isLiked: true, // Article has been liked
    isCommented: false,
    isRead: true, // Article has been read
    category: "Technology",
    image: "/scpacetech.png",
  }, //tech
  {
    id: 3,
    title: " Apple Vision Pro: A Futuristic Leap in Wearable Technology",
    author: "Stephen Walker",
    date: "2 Feb",
    likes: 120,
    comments: 30,
    isLiked: false,
    isCommented: false,
    isRead: false,
    category:"Technology",
    image:"/apple-vision-pro-preview-ben-lang.jpg",
  },  //tech
  {
  id: 4,
  title: "Exploring the Latest Events in Tech: A Glimpse into Innovation",
  author: "Alex Turner",
  date: "7 Jul",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Technology",
  image:"/techinn.jpg",
  },  //tech
  {
    id: 5,
    title: "Exploring the Latest Trends in Software Engineering at Google",
    author: "Emily Blunt",
    date: "18 Aug",
    likes: 76,
    comments: 66,
    isLiked: false,
    isCommented: false,
    isRead: false,
    category:"Technology",
    image:"/google.jpg",

  },  //tech
  {
    id: 6,
    title: "Rhythms of Harmony: Exploring the Vibrant World of Music",
    author: "Robert Gosling",
    date: "9 May",
    likes: 120,
    comments: 30,
    isLiked: false,
    isCommented: false,
    isRead: false,
    category:"Music",
    image:"/piano-3505109_640.jpg",
  },  //music

  {
    id: 7,
    title: "Harmonizing with the Times: Exploring the Latest Trends in Music",
    author: "Karen Davis",
    date: "15 Dec",
    likes: 90,
    comments: 60,
    isLiked: false,
    isCommented: false,
    isRead: false,
    category: "Music",
    image: "/music2.png",
  }, //music

  {
    id: 8,
    title: "Indila's Musical Odyssey Continues: A Journey into Her New Album",
    author: "Jessica Albert",
    date: "12 Nov",
    likes: 120,
    comments: 30,
    isLiked: false,
    isCommented: false,
    isRead: false,
    category:"Music",
    image:"/indila-960x640.jpg",
  },  //music
  {
  id: 9,
  title: "Coachella 2024: Unveiling the Latest News and Highlights from the Iconic Music Festival",
  author: "Kendrick Lamar",
  date: "8 Oct",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Music",
  image:"/coachella.jpg",


  }, //music
  {
  id: 10,
  title: "Diving into the Latest NBA News: Unveiling the Thrilling Action and Game-Changing Trades",
  author: "John Krasinki",
  date: "1 Jan",
  likes: 30,
  comments: 35,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Sports",
  image:"/NBA.jpg",


  },  //sports
  {
  id: 11,
  title: "Exploring the Latest News from the 2024 Olympics: A Showcase of Sporting Excellence and Global Unity",
  author: "Michael Scott",
  date: "28 Mar",
  likes: 50,
  comments: 20,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Sports",
  image:"/olympics.jpeg",


  },  //sports
  {
  id: 12,
  title: "Rafael Nadal: A Tennis Legend Continues to Dominate the Court",
  author: "David John",
  date: "4 Jun",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Sports",
  image:"/LC24-Player_Announcement_WEB_TE-ALT-1440x726.jpg",


  },  //sports

  {
  id: 13,
  title: "Unlocking the Power of Sports: A Comprehensive Guide",
  author: "Alice Cooper",
  date: "7 Jul",
  likes: 180,
  comments: 80,
  isLiked: true,
  isCommented: true,
  isRead: true,
  category: "Sports",
  image: "/sportspower.jpg",
  }, //sports
  { 
  id: 14,
  title: "The Evolution of Sports: Embracing Diversity and Inclusion",
  author: "Anne Johansson",
  date: "3 Aug",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Sports",
  image:"/5-5.jpg",


  },  //sports

  {
  id: 15,
  title: "Exploring the Latest Developments in Politics: Navigating a Complex Landscape of Policy and Power",
  author: "John Smith",
  date: "6 Sep",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Politics",
  image:"/1234.jpeg",


  },
  {
  id: 16,
  title: "Biden's Executive Order: Banning TikTok in the United States",
  author: "Emile Mosseri",
  date: "23 Nov",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Politics",
  image:"/ban.jpg",


  },
  {
  id: 17,
  title: "The Resilience Amidst Adversity: The Struggle of the Gazan People",
  author: "Ted Jasper",
  date: "20 Dec",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category: "Poltics",
  image:"/Gaza.jpg",


  },
  {
  id: 18,
  title: "Navigating Political Polarization: Challenges and Opportunities in Today's Divided Landscape",
  author: "Jacob Collier",
  date: "12 Jan",
  likes: 80,
  comments: 10,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category:"Politics",
  image:"/pol.png",


  },
  {
  id: 19,
  title: "The Role of Political Satire: Lampooning Power and Holding Leaders Accountable",
  author: "Solana Imani",
  date: "22 Feb",
  likes: 120,
  comments: 30,
  isLiked: false,
  isCommented: false,
  isRead: false,
  category: "Poltics",
  image:"/last.jpg",


  },
  {
  id: 20,
  title: "Exploring the Latest Trends in Music: A Look at the Newest Releases and Emerging Artists",
  author: "Chris Johnson",
  date: "10 Jul",
  likes: 250,
  comments: 90,
  isLiked: true,
  isCommented: false,
  isRead: false,
  category: "Poltics",
  image: "/music1.webp",
  }, //politics
]
    
//  this function is for generating html element for each card
function generateArticleCards(articles, start, end) {
  let cardsHtml = "";
  for (let i = start; i < end; i++) {
    const article = articles[i];
var articlePage = '/page' + article.id ;
    cardsHtml += `
      <div class="article-card" data-id="${article.id}" >
        <img class="card-image" src="${article.image}" alt="${article.title}">
    
        <div class="card-heading" data-is-read="${article.isRead}" onclick="readArticle(this)"> <h3 class="card-headline"> <a href="${articlePage}">${article.title}</a></h3></div>
        <div class="card-author"> <p>${article.author}</p></div>
        <ul class="share-info">
          <li class="card-date">${article.date}</li>
          <li class="card-like">
          <i class="fa fa-light fa-heart"></i>
           <span class="like-count"> ${article.likes} </span>
          </li>
          <li class="card-comment">
          <i class="fa fa-light fa-comment" ></i>
          <span class="comment-count"> ${article.comments} </span>
          </li>
          <li class="save" data-url="${article.url}" data-title="${article.title}" data-id="${article.id}">
          <i class="fa fa-solid fa-bookmark"></i>
          </li>
        </ul>
      </div>
    `;
  }
  return cardsHtml;
}


// Assign the generated HTML to each section with unique IDs
document.querySelector("#section1 .article-blocks").innerHTML = generateArticleCards(articles, 0, 5);
document.querySelector("#section2 .article-blocks").innerHTML = generateArticleCards(articles, 5, 10);
document.querySelector("#section3 .article-blocks").innerHTML = generateArticleCards(articles, 10, 15);
document.querySelector("#section4 .article-blocks").innerHTML = generateArticleCards(articles, 15, 20);

//Slider Code
const sliders = document.querySelectorAll(".section-slider");

sliders.forEach((slider) => {

  // Get the references to the arrow buttons
  const arrowBtns = slider.querySelectorAll(".prev-button, .next-button");

  // Get the carousel and determine the width of the first card
  const carousel = slider.querySelector(".article-blocks");
  const firstCardWidth = carousel.querySelector(".article-card").offsetWidth;


  // Event listener for when the arrow buttons are clicked
  arrowBtns.forEach((btn) => {
    const isLeft = btn.querySelector("i").id === "left"; // Determine if it's a left or right button

    btn.addEventListener("click", () => {
      const scrollAmount = firstCardWidth + 20; // Extra space between cards
      const newScrollPosition = isLeft ? carousel.scrollLeft - scrollAmount : carousel.scrollLeft + scrollAmount;

      // Scroll with smooth behavior
      carousel.scrollTo({
        left: newScrollPosition,
        behavior: "smooth", // Enable smooth scrolling
      });

    });
  });
});


// Like and Comment code
const cards = document.querySelectorAll(".article-card");

cards.forEach((card) => {
  const likeButton = card.querySelector(".card-like");
  const likeCount = card.querySelector(".like-count");
  const commentButton = card.querySelector(".card-comment");
  const commentCount = card.querySelector(".comment-count");

  // Like button event
  let isLiked = false;
  likeButton.addEventListener("click", () => {
    isLiked = !isLiked;

    if (isLiked) {
      likeButton.classList.add("liked");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
      likeButton.classList.remove("liked");
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
  });

  // Comment button event
  let isCommented = false;
  commentButton.addEventListener("click", () => {
    isCommented = !isCommented;

    if (isCommented) {
      commentButton.classList.add("commented");
      commentCount.textContent = parseInt(commentCount.textContent) + 1;
    } else {
      commentButton.classList.remove("commented");
      commentCount.textContent = parseInt(commentCount.textContent) - 1;
    }
  });
});



//Pop-up message appear whenever the user read more than 3 articles
let articleCount = 0;

function readArticle(articleElement) {
    // Check if the article has already been read
    const isRead = articleElement.getAttribute("isRead") === "true";
    if (isRead) {
        // If the article is already read, do nothing
        return;
    }

    // Mark the article as read
    articleElement.setAttribute("data-is-read", "true");
    articleCount++; // Increment the read count

    if (articleCount >= 4) {
        // Show subscription message
        document.getElementById("subscribeMessage").style.display = "block";
        // Disable further reading
        disableArticleReading();
    }
}
// Function to disable further reading
function disableArticleReading() {
  const articleCards = document.querySelectorAll(".article-card");

  articleCards.forEach(articleCard => {
    // Disable click event
    articleCard.querySelector(".card-heading").removeAttribute("onclick");
    articleCard.querySelector("a").removeAttribute("href"); // Remove the link
    
    // Change the appearance to indicate it's disabled
    articleCard.style.cursor = "not-allowed"; 
    articleCard.style.opacity = 0.5;
  });
}


// subscription message
const subscribeMessage = `
  <div id="subscribeMessage" >
    <p>You've read 3 articles. Please subscribe for unlimited access!</p>
    <a href="/subscribe"><button>Subscribe</button></a>
    <button onclick="closeSubscribeMessage()">OK</button>
  </div>
`;

document.body.insertAdjacentHTML("beforeend", subscribeMessage);

function closeSubscribeMessage() {
    document.getElementById("subscribeMessage").style.display = "none";
}


// Read Later Section
var articlesL = []; // Use a consistent variable to hold the list of articles to read later

// Function to add an article to the Read Later list
function addArticleToReadLater(event) {
  var id = event.target.dataset.id; 
  var title = event.target.dataset.title;
  var url = event.target.dataset.url;

  // If it's not a duplicate, add the article to the array
  var article = { id: id, title: title, url: url };
  articlesL.push(article); // Use articlesL, not articles

  updateReadLaterTable(); // Update the table with the correct list
}

// Function to update the Read Later table
function updateReadLaterTable() {
  var tableBody = document.getElementById("readLaterTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ''; // Clear existing content

  // Add each article to the table
  articlesL.forEach(function(article) {
  var articlePage = '/page' + article.id ; //to change the distenation accodrding to the id

  var newRow = "<tr><td>" + article.title + "</td><td><a href='" + articlePage + "'>" + articlePage + "</a></td></tr>";

    tableBody.innerHTML += newRow;
  });
}

// Add event listeners to the "Read Later" buttons
function assignReadLaterEvents() {
  var addButtons = document.querySelectorAll('.save'); // Assuming .save is the class for "Read Later" buttons
  addButtons.forEach(function(button) {
    button.addEventListener('click', addArticleToReadLater); // Attach the event listener
  });
}

// Ensure the event listeners are assigned
assignReadLaterEvents();


//fix the undefined error
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    
  }
});
window.addEventListener("beforeunload", function(event) {
  // Optional: Add code to execute before the page unloads
  event.returnValue = 'Are you sure you want to leave?';
});

window.navigator.sendBeacon('/analytics', JSON.stringify({ action: 'page_unload' }));


