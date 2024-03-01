document.addEventListener('DOMContentLoaded', function() {
    var name = "Wallace Goremusandu";
    var typedName = document.getElementById('typed-name');
    var index = 0;

    function type() {
        if (index < name.length) {
            typedName.innerHTML += name.charAt(index);
            index++;
            setTimeout(type, 150); // Typing speed
        }
    }
    type();
});

// Toggle the navigation links when the menu icon is clicked
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
    this.classList.toggle('close');
});

