document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "linear-gradient(to right, #f2f6f9, #d6eaf8)";
document.body.style.padding = "20px";

const nav = document.createElement("nav");
nav.style.backgroundColor = "#007BFF";
nav.style.padding = "15px 20px";
nav.style.textAlign = "center";
nav.style.marginBottom = "30px";
nav.style.borderRadius = "10px";

["Home", "About Us", "Contact Us"].forEach((text, i) => {
    const link = document.createElement("a");
    link.href = ["index.html", "about.html", "contact.html"][i];
    link.textContent = text;
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.margin = "0 15px";
    link.style.fontSize = "18px";
    link.style.fontWeight = "bold";
    link.style.padding = "10px 20px";
    link.style.backgroundColor = "#0056b3";
    link.style.borderRadius = "5px";
    link.style.transition = "background-color 0.3s";
    link.onmouseover = () => link.style.backgroundColor = "#003f7d";
    link.onmouseout = () => link.style.backgroundColor = "#0056b3";
    nav.appendChild(link);
});
document.body.appendChild(nav);

function createSection(title, items) {
    const section = document.createElement("section");
    section.style.background = "#fff";
    section.style.padding = "20px";
    section.style.marginBottom = "30px";
    section.style.borderRadius = "12px";
    section.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    
    const h2 = document.createElement("h2");
    h2.textContent = title;
    h2.style.color = "#1a237e";
    section.appendChild(h2);

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "20px";

    items.forEach(item => {
        const div = document.createElement("div");
        div.style.flex = "1 1 45%";

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.title;
        img.style.width = "100%";
        img.style.borderRadius = "10px";
        img.style.border = "2px solid #ccc";

        div.appendChild(h3);
        div.appendChild(img);
        container.appendChild(div);
    });

    section.appendChild(container);
    document.body.appendChild(section);
}

const intro = document.createElement("section");
intro.style.background = "#fff";
intro.style.padding = "20px";
intro.style.marginBottom = "30px";
intro.style.borderRadius = "12px";
intro.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
intro.innerHTML = `
    <h1 style="color:#1a237e;">Welcome to Your Travel Explorer</h1>
    <p>Discover perfect travel destinations tailored to your interests. From serene beaches to historic temples, plan your next adventure with ease.</p>
`;
document.body.appendChild(intro);

createSection("Top Beach Destinations", [
    { title: "Goa Beach, India", img: "Goa.jpg" },
    { title: "Maldives", img: "maldives.jpg" }
]);

createSection("Top Temple Destinations", [
    { title: "Meenakshi Temple, India", img: "meenakshi.jpg" },
    { title: "Angkor Wat, Cambodia", img: "angkor_wat.jpg" }
]);

createSection("Recommendations by Country", [
    { title: "Japan", img: "japan.jpg" },
    { title: "Italy", img: "italy.jpg" }
]);
