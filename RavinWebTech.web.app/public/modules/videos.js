export async function mountVideoGrid(root) {
    if (!root) return;

    try {
        const response = await fetch('data/videos.json');
        if (!response.ok) throw new Error('Failed to load videos');
        const videos = await response.json();

        const frag = document.createDocumentFragment();
        videos.forEach(v => {
            const card = document.createElement('article');
            card.className = 'video-card';
            card.innerHTML = `
        <button class="video-thumb" aria-label="Play ${v.title}" data-id="${v.videoId}"
          style="background-image: url('${v.thumbnail}');">
          <span class="play-badge"><i class="fas fa-play"></i></span>
        </button>
        <h3 class="video-title">${v.title}</h3>
      `;
            frag.appendChild(card);
        });
        root.appendChild(frag);

        root.addEventListener('click', e => {
            const btn = e.target.closest('.video-thumb');
            if (!btn) return;

            const id = btn.dataset.id;
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
            iframe.loading = 'lazy';
            iframe.title = 'YouTube video';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;

            btn.replaceWith(iframe);
        });
    } catch (error) {
        console.error('Video load error:', error);
        root.innerHTML = '<p class="error-text">Unable to load videos at this time.</p>';
    }
}
