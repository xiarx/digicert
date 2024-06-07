import axios from "axios";

export interface GetTopicsResponse {
  id: string;
  slug: string;
  title: string;
}

export const getTopics = () =>
  axios.get("https://api.unsplash.com/topics", {
    headers: {
      Authorization: 'Client-ID lYLE389mSuDNH7qBop4vu8-QZq1IRZdynK3sdOEHSfw',
    },
  });
