document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "a745469b971aa99dbd282ddc3592bc23";
    const keywords = "informatique OR cybersécurité OR développement OR intelligence artificielle";
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(keywords)}&lang=fr&max=3&token=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById("news-container");
        container.innerHTML = "";
  
        if (!data.articles || data.articles.length === 0) {
          container.innerHTML = `<p class="text-white text-center">Aucune actualité disponible.</p>`;
          return;
        }
  
        data.articles.forEach(article => {
          const newsCard = `
            <div class="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-md">
              <img class="object-cover object-center w-full mb-6 h-48 rounded-xl" src="${article.image || 'https://via.placeholder.com/300x200'}" alt="Image actualité">
              <h1 class="text-2xl font-semibold text-white mb-2">${article.title}</h1>
              <p class="text-gray-300 text-sm">${article.description || ''}</p>
              <div class="mt-4">
                <a href="${article.url}" target="_blank" class="text-blue-500 font-medium hover:underline">Lire la suite »</a>
              </div>
            </div>
          `;
          container.innerHTML += newsCard;
        });
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des actualités :", error);
        const container = document.getElementById("news-container");
        container.innerHTML = `<p class="text-white text-center">Impossible de charger les actualités pour le moment.</p>`;
      });
  });
  