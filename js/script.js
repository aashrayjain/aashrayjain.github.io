/* =========================================================
   AASHRAY JAIN PORTFOLIO
   CUSTOM JAVASCRIPT
========================================================= */


/* =====================================================
   THEME
===================================================== */

function toggleTheme() {

    const root = document.documentElement;

    const currentTheme =
        root.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    root.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        "portfolio-theme",
        newTheme
    );

    updateThemeIcon(newTheme);
}


function updateThemeIcon(theme) {

    const icon =
        document.querySelector(
            ".theme-toggle i"
        );

    if (!icon) return;

    icon.className =
        theme === "dark"
            ? "fas fa-sun"
            : "fas fa-moon";
}


/* =====================================================
   RESTORE SAVED THEME
===================================================== */

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );

if (savedTheme) {

    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );

    updateThemeIcon(savedTheme);
}


/* =====================================================
   SCROLL TOP
===================================================== */

const scrollBtn =
    document.getElementById(
        "scrollTopBtn"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            document.documentElement.scrollTop > 450 ||
            document.body.scrollTop > 450
        ) {

            scrollBtn.style.display =
                "block";

        } else {

            scrollBtn.style.display =
                "none";
        }
    }
);


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   CLOSE MOBILE NAVBAR AFTER CLICK
===================================================== */

document
    .querySelectorAll(
        ".navbar-nav .nav-link"
    )
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const navbar =
                    document.getElementById(
                        "mainNavbar"
                    );

                if (
                    navbar.classList.contains(
                        "show"
                    )
                ) {

                    new bootstrap.Collapse(
                        navbar
                    ).hide();
                }

            }
        );

    });


/* =====================================================
   CURRENT YEAR / LOAD MESSAGE
===================================================== */

console.log(
    "Aashray Jain Portfolio loaded successfully."
);