import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { getPost } from "@/services";
import { Post } from "@/types";
import { UsePost } from './PostProps';
import { getLastName } from "@/utils/string";

export function usePost(): UsePost {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { isPending, isFetching, isError, error, data } = useQuery<Post>({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId)
  })

  const authorLastName = getLastName(data?.author.name)

  const goBack = () => {
    navigate(-1);
  }

  return {
    isPending,
    isFetching,
    isError,
    error,
    post: data,
    authorLastName,
    goBack
  }
}