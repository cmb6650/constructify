document.addEventListener("DOMContentLoaded", function() {
    // Data
    var devs = [
        { name: "Connor", github: "https://github.com/cmb6650"},
        { name: "Miguel", github: "img_avatar.jpg"},
        { name: "Brendan", github: "img_avatar.jpg"},
        { name: "Kamron", github: "https://github.com/Kamron247"}
    ];

    // Function to create chip objects
    function createChip(name, github) {
        var chip = document.createElement('a');
        chip.className = 'chip';
        chip.href = github;
        
        var img = document.createElement('img');
        img.src = github + ".png";
        img.alt = name + "'s Photo"; // Alt attribute for image
        
        var span = document.createElement('span');
        span.textContent = name;
        
        chip.appendChild(img);
        chip.appendChild(span);
        return chip;
    }

    // Display chip objects
    var chipsContainer = document.getElementById('devContainer');
    devs.forEach(function(dev) {
        var chip = createChip(dev.name, dev.github);
        chipsContainer.appendChild(chip);
    });
});
