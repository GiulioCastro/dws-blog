import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { getPost } from "@/services";
import { Post } from "@/types";
import { UsePost } from './PostProps';
import { useLocalStorage } from "@/hooks";
import { useEffect } from "react";
import { getLastName } from "@/utils";
import { useMatchMedia } from "@/hooks/useMatchMedia";

export function usePost(): UsePost {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { isPending, isFetching, isError, error, data } = useQuery<Post>({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId)
  });

  const latestArticles = useLocalStorage<Post[]>("latestArticles", []);
  const isMobile = useMatchMedia("md");
  const authorLastName = getLastName(data?.author.name);

  useEffect(() => {
    if (!!data) {
      const articleOnStorage = latestArticles.value.some((post: Post) => post.id === data.id);
      if (!articleOnStorage) latestArticles.setValue([data, ...latestArticles.value.slice(0, 2)]);
    }
  }, [data]);

  const goBack = () => {
    navigate(-1);
  }

  const navigatePost = (postId: string) => {
    navigate(`/post/${postId}`);
  }

  return {
    isPending,
    isFetching,
    isError,
    error,
    post: data,
    latestArticles: latestArticles.value,
    isMobile,
    authorLastName,
    goBack,
    navigatePost,
  }
}