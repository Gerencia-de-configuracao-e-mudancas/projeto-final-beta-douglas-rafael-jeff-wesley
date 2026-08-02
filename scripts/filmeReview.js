const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));

const movie = movies.find(m => m.id === movieId);

if (movie) {
  document.getElementById("page-title").innerText = movie.title + " - CineBox";
  document.getElementById("title").innerText = movie.title;
  document.getElementById("description").innerText = movie.description;

  const poster = document.getElementById("movie-poster");
  
  if (poster && movie.poster) {
    poster.src = movie.poster;
    poster.style.display = "block";
  }
}

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const movieComments = comments.filter(c => c.movieId === movieId);
  
  // Cálculo da média geral de notas
  const averageContainer = document.getElementById("average-rating");
  if (movieComments.length > 0) {
    const soma = movieComments.reduce((acc, c) => acc + Number(c.rate), 0);
    const media = (soma / movieComments.length).toFixed(1);
    averageContainer.innerHTML = `Nota Geral: ${media} / 5.0 (${movieComments.length} ${movieComments.length === 1 ? 'avaliação' : 'avaliações'})`;
  } else {
    averageContainer.innerHTML = "Ainda não há avaliações para este filme.";
  }

  //função para carregar a quantidade certa de estrelas cinzas e amarelas (filled)
  function renderStars(rate) {
    let starsHtml = "";

    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="individual-rate ${i <= rate ? 'filled' : ''}">&#9733;</span>`;
    }

    return starsHtml;
  }

  document.getElementById("comments").innerHTML = movieComments
    .map(c => `
      <div class="comment-card">
          <div class="comment-header">
              <strong>${c.user?.name || 'Usuário'}</strong>
              <div class="comment-stars">${renderStars(c.rate)}</div>
          </div>
          <p class="comment-text">${c.text}</p>
      </div>
    `).join("");

  // aquela rolagem até o comentario que eu tinha citado
  setTimeout(() => {
    const lastComment = document.querySelector("#comments .comment-card:last-child");

    if (lastComment) {
      lastComment.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      // dar um destaque no comentario
      lastComment.style.background = "#1a1820";
      lastComment.style.transition = "1s";

      setTimeout(() => {
        lastComment.style.background = "";
      }, 1200);
    }
  }, 100);
}

function addComment() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!user) {
    alert("Faça login para comentar");
    return;
  }

  const text = document.getElementById("comment").value;

  if (text.length < 5) {
    alert('Comentário muito curto.');
    return;
  }

  if (selectedValue < 1) {
    alert('Você deve avaliar de 1 a 5 estrelas para comentar.');
    return;
  }
  
  const rate = selectedValue;
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  
  const indexComentarioExistente = comments.findIndex(c => 
    c.movieId === movieId && c.user?.name === user?.name
  );

  if (indexComentarioExistente !== -1) {
    const querSubstituir = confirm("Você já deixou uma avaliação para este filme. Deseja excluir a anterior e salvar esta nova?");
    
    if (!querSubstituir) {
      return; 
    }
    
    comments.splice(indexComentarioExistente, 1);
  }

  comments.push({ movieId, user, text, rate });

  localStorage.setItem("comments", JSON.stringify(comments));
  document.getElementById("comment").value = "";
  
  selectedValue = 0;
  clearSelected(); 

  document.querySelector(".comment-btn").innerText = "Feito ✓";
  setTimeout(()=>{document.querySelector(".comment-btn").innerText = "Comentar";}, 1500);

  loadComments();
}

// basicamente, daqui pra baixo tô fazendo a estilização da interação com as estrelas
const stars = document.querySelectorAll('.star');
let selectedValue = 0;

function clearHover() {
  stars.forEach(s => s.classList.remove('hovered'));
}

function clearSelected() {
  stars.forEach(s => s.classList.remove('selected'));
}

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    clearHover();
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('hovered');
    }
  });

  star.addEventListener('mouseout', () => {
    clearHover();
  });

  //esse laço aqui calcula as estrelas de cada comentario
  star.addEventListener('click', () => {
    const value = star.getAttribute('value');
    selectedValue = parseInt(value);
    
    clearSelected(); 
    for (let i = 0; i < selectedValue; i++) {
      stars[i].classList.add('selected');
    }
  });
});

loadComments();
