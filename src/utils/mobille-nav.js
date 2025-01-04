const mobileNavigation = () => {
    const headerBars = document.querySelector(".header__bars");
    const mobileNav = document.querySelector(".mobile__nav");
    const mobileLinks = document.querySelectorAll(".mobile__nav__link");

    // state
    let isMobileNavOpen = false;

    headerBars.addEventListener('click', () => {
        if (isMobileNavOpen == false) {
            isMobileNavOpen = !isMobileNavOpen
            mobileNav.style.display = "flex";
            document.body.style.overflowY = "hidden";
        }else{
                mobileNav.style.display = "none";
                isMobileNavOpen = false;
                document.body.style.overflowY = "auto";

            }

    });
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = "none";
            document.body.style.overflowY = "auto";
        });
    });
}
export default mobileNavigation;