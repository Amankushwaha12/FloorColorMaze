import axios from "axios";

const API =
  "http://localhost:5000/api/games";

export const getGames = () =>
  axios.get(API);

export const getGame = (id) =>
  axios.get(`${API}/${id}`);