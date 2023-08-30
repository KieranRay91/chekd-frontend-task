import axios from "axios";

const matchApi = axios.create({
  baseURL: "https://frontend-tech-test-ashy.vercel.app/api/match",
});

export function fetchAllMatchData() {
  return matchApi.get().then((response) => {
    return response.data;
  });
}
