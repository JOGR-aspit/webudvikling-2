const tabs = document.querySelectorAll(".tabs__tab");
const contents = document.querySelectorAll(".tabs__content");
let activeTab = 0;

function switchTab(newTab) {
    if (newTab === activeTab) return;
    let direction;
    if (newTab > activeTab) {
        direction = "right";
    } else {
        direction = "left";
    }
    let oldContent = contents[activeTab];
    let newContent = contents[newTab];

    // Animate old content out
    oldContent.classList.remove("tabs__content--active");
    if (direction === "right") {
        oldContent.classList.add("tabs__content--slide-left");
    } else {
        oldContent.classList.add("tabs__content--slide-right");
    }

    // Prepare new content: set initial slide direction
    newContent.classList.remove(
        "tabs__content--slide-left",
        "tabs__content--slide-right"
    );
    newContent.style.transition = "none";
    if (direction === "right") {
        newContent.style.transform = "translateX(100%)";
    } else {
        newContent.style.transform = "translateX(-100%)";
    }
    // Force reflow to apply the initial transform
    newContent.offsetWidth;
    newContent.style.transition = "";
    newContent.classList.add("tabs__content--active");
    newContent.style.transform = "";

    // Update tab buttons
    tabs[activeTab].classList.remove("tabs__tab--active");
    tabs[newTab].classList.add("tabs__tab--active");

    // After animation, reset old content
    setTimeout(function () {
        oldContent.classList.remove(
            "tabs__content--slide-left",
            "tabs__content--slide-right"
        );
    }, 400);

    activeTab = newTab;
}

for (let i = 0; i < tabs.length; i++) {
    (function (idx) {
        tabs[idx].addEventListener("click", function () {
            switchTab(idx);
        });
    })(i);
}
