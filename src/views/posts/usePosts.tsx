import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAuthors, getCategories, getPosts } from "@/services";
import { Author, Category, Post } from "@/types";
import { FilterAction, FilterActions, FilterState, UsePosts } from './PostsProps';
import { compareAsc, compareDesc, parseISO } from "date-fns";

function filtersReducer(filters: FilterState, action: FilterAction) {
  switch (action.type) {
    case FilterActions.ADD_POSTS: {
      return {
        ...filters,
        posts: action.data,
        filteredPosts: action.data,
      };
    }
    case FilterActions.ADD_CATEGORIES: {
      return {
        ...filters,
        categories: action.data.map((c) => ({ ...c, selected: false }))
      };
    }
    case FilterActions.SELECT_CATEGORY: {
      return {
        ...filters,
        categories: filters.categories.map((c) => ({ ...c, selected: c.id === action.data ? true : c.selected }))
      };
    }
    case FilterActions.REMOVE_CATEGORY: {
      return {
        ...filters,
        categories: filters.categories.map((c) => ({ ...c, selected: c.id === action.data ? false : c.selected }))
      };
    }
    case FilterActions.ADD_AUTHORS: {
      return {
        ...filters,
        authors: action.data.map((a) => ({ ...a, selected: false }))
      };
    }
    case FilterActions.SELECT_AUTHOR: {
      return {
        ...filters,
        authors: filters.authors.map((a) => ({ ...a, selected: a.id === action.data ? true : a.selected }))
      };
    }
    case FilterActions.REMOVE_AUTHOR: {
      return {
        ...filters,
        authors: filters.authors.map((a) => ({ ...a, selected: a.id === action.data ? false : a.selected }))
      };
    }
    case FilterActions.TOGGLE_SORT_BY: {
      console.log("action.data", action.data)
      const sortFn = action.data === "newest" ? compareAsc : compareDesc;
      return {
        ...filters,
        sortBy: action.data,
        filteredPosts: filters.filteredPosts.sort((a, b) => sortFn(a.createdAt, b.createdAt))
      };
    }
    case FilterActions.APPLY_FILTERS: {
      const hasCategorySelected = filters.categories.some(c => c.selected);
      const hasAuthorSelected = filters.authors.some(c => c.selected);

      const categoryFilteredPosts = hasCategorySelected
        ? filters.posts.filter((p) => filters.categories.some(c1 => c1.selected && p.categories.some(c2 => c2.id === c1.id)))
        : filters.posts

      const authorsFilteredPosts = hasAuthorSelected
        ? categoryFilteredPosts.filter((p) => filters.authors.some(a => a.selected && a.id === p.author.id))
        : categoryFilteredPosts

      const sortFn = filters.sortBy === "newest" ? compareAsc : compareDesc;

      const filteredAndSortedPosts = authorsFilteredPosts.sort((a, b) => sortFn(a.createdAt, b.createdAt));
      return {
        ...filters,
        filteredPosts: filteredAndSortedPosts
      };
    }
    default: {
      throw Error('Unknown action');
    }
  }
}

export function usePosts(): UsePosts {
  const navigate = useNavigate();

  const posts = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => getPosts()
  })

  const categories = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  })

  const authors = useQuery<Author[]>({
    queryKey: ['authors'],
    queryFn: () => getAuthors()
  })

  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    {
      posts: [],
      filteredPosts: [],
      categories: [],
      authors: [],
      sortBy: "newest"
    }
  );

  useEffect(() => {
    if (!!posts.data) {
      dispatchFilters({ type: FilterActions.ADD_POSTS, data: posts.data })
    }
  }, [posts.data])

  useEffect(() => {
    if (!!categories.data) {
      dispatchFilters({ type: FilterActions.ADD_CATEGORIES, data: categories.data })
    }
  }, [categories.data])

  useEffect(() => {
    if (!!authors.data) {
      dispatchFilters({ type: FilterActions.ADD_AUTHORS, data: authors.data })
    }
  }, [authors.data])

  const navigatePost = (postId: string) => {
    navigate(`/post/${postId}`);
  }

  return {
    isPending: posts.isPending || categories.isPending || authors.isPending,
    isFetching: posts.isFetching || categories.isFetching || authors.isFetching,
    isError: posts.isError || categories.isError || authors.isError,
    error: posts.error,
    posts: filters.filteredPosts,
    navigatePost,
    filters,
    dispatchFilters
  }
}