var dropdown = document.getElementsByClassName("admin-child");
        icon= document.getElementById("fa")
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                this.classList.toggle("active");
                icon.classList.toggle("active")
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "flex") {
                dropdownContent.style.display = "none";
                } else {
                dropdownContent.style.display = "flex";

                }
            });
        }