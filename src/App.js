import "./App.css";

function App() {
  return (
    <div className="App">
      <Movielist />
    </div>
  );
}

function Movielist() {
  const newMovies = [
    {
      id: "101",
      poster:
        "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2020/04/08/Stylish-Star-Allu-Arjun-First-Look-Posters-as-Pushpa-Raj-From-Pushpa-Movie-in-5-languages-.jpg?quality=80&zoom=1&ssl=1",
      name: "Pushpa",
      language: "Telugu",
      certificate: "U/A",
      type: "Action Drama Thriller",
      dateofrelease: "12/17/2021",
      duration: "2hrs 59min",
      actors: "Allu Arjun Rashmika Mandanna",
      director: "Sukumar Bandreddi",
      musicdirector: "Devi Sri Prasad",
      synopsis:
        "A drama film directed by Sukumar Bandreddi, starring Allu Arjun in a lead role.",
      trailer: "https://www.youtube.com/embed/Q1NKMPhP8PY",
    },
    {
      id: "102",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y0YTlkZmMtZDMwZi00MDQwLThmYmUtZjQzMjRlMmQzMTNiXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
      name: "Akanda",
      language: "Telugu",
      certificate: "U/A",
      type: "Action Drama",
      dateofrelease: "12/2/2021",
      duration: "-",
      actors: "Anjali Nandamuri Balakrishna Pragya Jaiswala",
      director: "Boyapati Srinu",
      musicdirector: "S. Thaman",
      synopsis: "A fierce devotee of Lord Shiva stands tall against evildoers.",
      trailer: "https://www.youtube.com/embed/gJZQ_YFkUdY",
    },
  ];

  return (
    <div className="movie-list">
      {newMovies.map((movie) => (
        <MovieDisplay newmovie={movie} />
      ))}
    </div>
  );
}

function MovieDisplay({ newmovie }) {
  console.log(newmovie);
  console.log(newmovie.name);
  return (
    <div className="movie-container">
      <img className="movie-poster" src={newmovie.poster} alt="movie-poster" />
      <p>{newmovie.name}</p>
      <p>{newmovie.language}</p>

      <button className="book-button">Book</button>
    </div>
  );
}

export default App;
