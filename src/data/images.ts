import axios from "axios";

export interface GetImagesByTopicResponse {
  id: string;
  slug: string;
  links: {
    html: string
    self: string
    download: string
  };
}

export const getImagesByTopic = (topic: string) =>
  axios.get(`https://api.unsplash.com/topics/${topic}/photos`, {
    headers: {
      Authorization: 'Client-ID lYLE389mSuDNH7qBop4vu8-QZq1IRZdynK3sdOEHSfw',
    },
  });
