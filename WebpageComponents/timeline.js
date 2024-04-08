    document.addEventListener("DOMContentLoaded", function() {
    // Data for timeline cards
    const timelineData = [
        { 
            title: "Design", 
            timeline: "2 weeks",
            content: "\
                Research and Developing Arch. Documentation \
                Patterns considered: \
                Microservices Pattern to leverage Cloud deployment \
                MVC architecture to separate concerns and promote modifiability\
                Artifacts: System Diagram, 1 Architecture Structure(C&C is most common)\
            " 
        },
        { 
            title: "Implementation",
            timeline: "2 weeks",
            content: "\
                UI/Basic Platform: 3-4 weeks \
                Creating a UI without backend functionalities \
                Will be able to do a full walkthrough \
                Setting up basic cloud platform \
                AWS Amplify \
                Will be able to access and show off \
                Backend Features \
                Set up \
            " 
        },
        { 
            title: "Testing",
            timeline: "2 weeks", 
            content: "Jasmine: automates python test & javascript" 
        },
    ];

    // Function to create timeline cards
    function createTimelineCards() {
        const timelineCardsContainer = document.getElementById('timelineCards');

        timelineData.forEach((data, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const info = document.createElement('div');
            info.classList.add('info');

            const title = document.createElement('h2');
            title.classList.add('title');
            title.textContent = data.title;

            const timeline = document.createElement('h4');
            timeline.textContent = data.timeline;

            const content = document.createElement('p');
            content.textContent = data.content;

            info.appendChild(title);
            info.appendChild(timeline);
            info.appendChild(content);
            card.appendChild(info);
            timelineCardsContainer.appendChild(card);
        });
    }

    createTimelineCards();
});