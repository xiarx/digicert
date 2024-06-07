import { useQuery } from "@tanstack/react-query";
import { redirect } from "react-router-dom";

import { getImagesByTopic } from "@data/images";
import { Path } from "@app/router";

import type { GetImagesByTopicResponse } from "@data/images";

const useImages = (topic: string) => {
  const { isPending, isError, data } = useQuery({
    queryKey: [topic + "images"],
    queryFn: () => getImagesByTopic(topic),
  });

  if (isError) {
    redirect(Path.ERROR);
  }

  return {
    loading: isPending,
    data: data ? (data.data as GetImagesByTopicResponse[]) : null,
  };
};

export default useImages;
