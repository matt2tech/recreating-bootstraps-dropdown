function myFunction() {
    var x = document.querySelectorAll(".dropdown");
    x.forEach(function(dropdown) {
        var btn = dropdown.querySelector(".btn");
        btn.addEventListener("click", function() {
            dropdown.querySelector(".dropdown-menu").classList.toggle("show");
        });
    });
}

myFunction();
