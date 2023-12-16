import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const useSuperheroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000
    // staleTime: 30000
    // refetchOnMount: true
    // refetchOnWindowFocus: true
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true
    enabled: false,
    onSuccess,
    onError,
  });
};

export { useSuperheroesData };
