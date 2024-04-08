import "navbar.css"
navbar_items = [
    {
        name: "Synopsis",
        link: "/synopsis"
    },
    {
        name: "Devs",
        link: "/devs"
    },
    {
        name: "Timesheet",
        link: "/timesheet"
    },
    {
        name: "Timeline",
        link: "/timeline"
    },
    {
        name: "Artifacts",
        link: "/artifacts"
    }
]

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
