let query = "alok";

// Link is a collection object of links.
let links = document.links;

// from() converts collection into an array
Array.from(links).forEach((element) => {
    if (element.href.includes(query)) {
        console.log(element.href);
    }
})
