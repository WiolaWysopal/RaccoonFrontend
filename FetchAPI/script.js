async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const postList = document.getElementById("post-list");
        postList.innerHTML = ""; // wyczyść listę przed dodaniem nowych elementów

        json.slice(0, 5).forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            postList.appendChild(li);
        });

    } catch (error) {
        console.error(error.message);
    }
}
