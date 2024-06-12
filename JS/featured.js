// This is the articles' array
const articles = [
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
    id: 1,
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
]

// These are the html elements for each article card
function generateArticleCards(articles, start, end) {
    let cardsHtml = "";
    for (let i = start; i < end; i++) {
      const article = articles[i];
      var articlePage = '/page' + article.id ;
      cardsHtml += `
        
      <div class="article-card" data-id="${article.id}" >
      <img class="card-image" src="${article.image}" alt="${article.title}">
  
      <div class="card-heading"> <h3 class="card-headline"> <a href="${articlePage}">${article.title}</a></h3></div>
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

      </ul>
    </div>
      `;
    }
    return cardsHtml;
  }
  
  // Assign the generated HTML to the article-blocks in the Featured section
  document.querySelector("#section1 .article-blocks").innerHTML = generateArticleCards(articles, 0, 5);
  document.querySelector("#section2 .article-blocks").innerHTML = generateArticleCards(articles, 5, 10);
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
  
  


  

  