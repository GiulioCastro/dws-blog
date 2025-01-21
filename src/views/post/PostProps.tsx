import { Post } from "@/types"

export interface UsePost {
  readonly isPending: boolean
  readonly isFetching: boolean
  readonly isError: boolean
  readonly error: Error | null
  readonly post?: Post
  readonly latestArticles: Post[]
  readonly isMobile: boolean
  readonly authorLastName: string
  readonly goBack: () => void
  readonly navigatePost: (postId: string) => void
}