import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Switch, Route, Link } from "react-router-dom";

function SecondaryAppBar({ SignUp }) {
  console.log(SignUp);
  const pages = [
    "Movies",
    "Stream",
    "Events",
    "Plays",
    "Sports",
    "Activities",
    "Buzz",
  ];
  return (
    <Box sx={{ flexGrow: 1, height: 40, display: { xs: "none", md: "block" } }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#142848",
          height: "40px",
        }}
      >
        <Toolbar style={{ height: "40px" }}>
          <ul>
            <Link to="/movies">
              <li>Movies</li>
            </Link>
            <Link to="/stream">
              <li>
                Stream<sup>NEW</sup>
              </li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
            <Link to="/plays">
              <li>Plays</li>
            </Link>
            <Link to="/sports">
              <li>Sports</li>
            </Link>
            <Link to="/sctivities">
              <li>Activities</li>
            </Link>
            <Link to="/buzz">
              <li>Buzz</li>
            </Link>
          </ul>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "block" } }} />
          <ul className="second-ul">
            <Link to="/listyourshow">
              <li className="second-li">
                ListYourShowsup<sup>NEW</sup>
              </li>
            </Link>
            <Link to="/corporates">
              <li className="second-li">Corporates</li>
            </Link>
            <Link to="/offers">
              <li className="second-li">Offers</li>
            </Link>
            <Link to="/giftcards">
              <li className="second-li">Gift Cards</li>
            </Link>
          </ul>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/movies">
          <Movielist />
        </Route>
        <Route path="/signin">
          <SignUp />
        </Route>
      </Switch>
    </Box>
  );
}

function Movielist() {
  const newMovies = [
    {
      id: "101",
      poster:
        "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2020/04/08/Stylish-Star-Allu-Arjun-First-Look-Posters-as-Pushpa-Raj-From-Pushpa-Movie-in-5-languages-.jpg?quality=80&zoom=1&ssl=1",
      name: "Pushpa: The Rise Part 01",
      language: "Telugu, Tamil, Malayalam",
      certificate: "U/A",
      type: "Action/Drama/Thriller",
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
      type: "Action/Drama",
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
    <div>
      <div>
        <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Recommended Movies
        </p>
      </div>
      <div className="movie-list">
        {newMovies.map((movie) => (
          <MovieDisplay newmovie={movie} />
        ))}
      </div>
    </div>
  );
}

function MovieDisplay({ newmovie }) {
  console.log(newmovie);
  console.log(newmovie.name);
  return (
    <div className="movie-container">
      <div>
        <img
          className="movie-poster"
          src={newmovie.poster}
          alt="movie-poster"
        />
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "5px",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        ❤️ 85% 337k votes
      </div>

      <div style={{ lineHeight: "100%" }}>
        <p style={{ fontWeight: "bold" }}>{newmovie.name}</p>
        <p style={{ color: "#a3a3a3" }}>{newmovie.type}</p>
      </div>

      {/* <button className="book-button">Book</button> */}
    </div>
  );
}

export default SecondaryAppBar;
