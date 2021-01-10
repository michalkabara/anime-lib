import React from "react"

const Sidebar = ({ topAnime }) => {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
          <a
            key={anime.mal_id}
            target="_blank"
            href={anime.url}
            rel="noreferer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
