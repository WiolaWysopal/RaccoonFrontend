document.addEventListener("DOMContentLoaded", function () 
    {
        // Nasłuchujemy kliknięcia na przycisku .flexbutton
        document.querySelector(".flexbutton").addEventListener("click", function () {
            window.location.href = "flex.html";
        });
        
        // Nasłuchujemy kliknięcia na przycisku .gridbutton
        document.querySelector(".gridbutton").addEventListener("click", function () {
            window.location.href = "grid.html";
        });
    }
);


