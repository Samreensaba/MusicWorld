/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import FavouritesPage from "./pages/FavouritesPage";
import PlayListPage from "./pages/PlayListPage";
import PaymentPage from "./pages/PaymentPage";
import PremiumPage from "./pages/PremiumPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id" element={<AlbumPage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/searchResults" element={<SearchResultsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/playlists" element={<PlayListPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
