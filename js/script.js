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


/* =====================================================
   RESUME & CV VERSION SWITCHER (v2.2, v2.1, v2.0)
===================================================== */
function switchResume(version) {
    const iframe = document.getElementById('resumeIframe');
    const openLink = document.getElementById('resumeOpenLink');
    const downloadLink = document.getElementById('resumeDownloadLink');
    const btnV22 = document.getElementById('btnResumeV22');
    const btnV21 = document.getElementById('btnResumeV21');
    const btnV20 = document.getElementById('btnResumeV20');

    if (btnV22) btnV22.className = 'btn btn-outline-secondary px-3 py-2';
    if (btnV21) btnV21.className = 'btn btn-outline-secondary px-3 py-2';
    if (btnV20) btnV20.className = 'btn btn-outline-secondary px-3 py-2';

    let file = 'resume_v2.2.pdf';
    let label = 'CV v2.2 (1-Page)';

    if (version === 'v2.1') {
        file = 'resume_v2.1.pdf';
        label = 'CV v2.1 (2-Page)';
        if (btnV21) btnV21.className = 'btn btn-primary px-3 py-2';
    } else if (version === 'v2.0') {
        file = 'resume_v2.0.pdf';
        label = 'CV v2.0 (Master)';
        if (btnV20) btnV20.className = 'btn btn-primary px-3 py-2';
    } else {
        file = 'resume_v2.2.pdf';
        label = 'CV v2.2 (1-Page)';
        if (btnV22) btnV22.className = 'btn btn-primary px-3 py-2';
    }

    if (iframe) iframe.src = file;
    if (openLink) openLink.href = file;
    if (downloadLink) {
        downloadLink.href = file;
        downloadLink.download = `Aashray_Jain_Resume_${version}.pdf`;
        downloadLink.innerHTML = `<i class="fas fa-download me-2"></i> Download Selected (${label})`;
    }
}

/* =====================================================
   DOCUMENT / COVER LETTER PREVIEW CONTROLLER
===================================================== */
function previewDocument(filePath, docTitle) {
    const container = document.getElementById('coverLetterViewerContainer');
    const iframe = document.getElementById('coverLetterIframe');
    const title = document.getElementById('coverLetterTitle');
    const openTab = document.getElementById('coverLetterOpenTab');

    if (!container || !iframe) return;

    iframe.src = filePath;
    if (title) title.textContent = docTitle;
    if (openTab) openTab.href = filePath;

    container.classList.remove('d-none');
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeDocumentPreview() {
    const container = document.getElementById('coverLetterViewerContainer');
    const iframe = document.getElementById('coverLetterIframe');
    if (iframe) iframe.src = '';
    if (container) container.classList.add('d-none');
}
