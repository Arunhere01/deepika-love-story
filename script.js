function next() {
    const name = document.getElementById("nameInput").value.trim() || "Deepika";

    document.body.innerHTML = `
        <div class="container">
            <h1>Shall we go on a ride of memories, ${name}?</h1>
            <button id="yes">YES</button>
            <button id="no">NO</button>
        </div>
    `;

    const no = document.getElementById("no");
    no.addEventListener("mouseover", () => {
        no.style.position = "absolute";
        no.style.left = Math.floor(Math.random() * 80) + "vw";
        no.style.top = Math.floor(Math.random() * 80) + "vh";
    });

    const yes = document.getElementById("yes");
    yes.addEventListener("click", () => {
        startStory(name);
    });
}

function startStory(name) {
    const slides = [
        { type: "text", content: `Hi ${name}, this is where it all begins...` },
        { type: "image", src: "images/1.jpg", caption: "The beginning of our journey 💑" },
        { type: "image", src: "images/2.jpg", caption: "Every little smile, a memory for life 🥰" },
        { type: "image", src: "images/3.jpg", caption: "When we laughed endlessly..." },
        { type: "image", src: "images/4.jpg", caption: "Even when we argued... we never gave up ❤️" },
        { type: "image", src: "images/5.jpg", caption: "I made your day... and sometimes I worsened it 😔" },
        { type: "image", src: "images/6.jpg", caption: "But every bit of it, I lived for you 💖" },
        { type: "image", src: "images/7.jpg", caption: "You are my peace, my person 💫" },
        { type: "text", content: "Thank you for being you." },
        { type: "image", src: "images/8.jpg", caption: "I love you, my dear Deepika. 💋" },
        { type: "text", content: "🌸 The End 🌸" }
    ];

    let current = 0;

    function renderSlide() {
        const slide = slides[current];
        let html = '<div class="story-container">';

        if (slide.type === "text") {
            html += `<div class="slide-text">${slide.content}</div>`;
        } else if (slide.type === "image") {
            html += `
                <div class="slide-img">
                    <img src="${slide.src}" alt="Slide ${current + 1}" />
                    <p>${slide.caption}</p>
                </div>`;
        }

        html += `<button id="next">Next</button></div>`;
        document.body.innerHTML = html;

        document.getElementById("next").addEventListener("click", () => {
            current++;
            if (current < slides.length) {
                renderSlide();
            } else {
                document.body.innerHTML = "<h1>💖 Thank you for the ride of memories 💖</h1>";
            }
        });
    }

    renderSlide();
}

