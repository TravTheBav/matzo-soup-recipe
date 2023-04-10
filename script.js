// opacity transition for nav bar when scrolling
let navBar = document.querySelector('.nav-wrapper');
let heroImage = document.querySelector('.title-wrapper');
window.onscroll = function () {
    if ( document.body.scrollTop >= ( heroImage.clientHeight - navBar.clientHeight ) ||
         document.documentElement.scrollTop >= ( heroImage.clientHeight - navBar.clientHeight )) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
    }   else {
        navBar.classList.add("nav-transparent");
        navBar.classList.remove("nav-colored");
    }
};

// Event listeners for sharing page link to social media
let shareButton = document.getElementById('share-button');
let shareDialog = document.querySelector('.share-dialog');
shareButton.addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: 'https://travthebav.github.io/matzo-soup-recipe/'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);        
    } else {
        shareDialog.classList.add('is-open');
    }
});

let exitShareDialogButton = document.querySelector('button.exit');
exitShareDialogButton.addEventListener('click', function() {
    shareDialog.classList.remove('is-open');
});

let redditShareButton = document.getElementById('reddit');
redditShareButton.addEventListener('click', function () {
    window.open("https://www.reddit.com/submit?url=https://travthebav.github.io/matzo-soup-recipe/&title=Classic%20Matzo%20Ball%20Soup%20Recipe", "_blank");
});

// fade in for photos
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }   else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});