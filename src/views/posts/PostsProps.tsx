import { createContext } from 'react';
import { Author, Category, Post } from "@/types"

export const sortByTypes = {
  newest: "Newest first",
  oldest: "Oldest first",
}

export type SortByType = keyof typeof sortByTypes

export enum FilterActions {
  ADD_POSTS = 'ADD_POSTS',
  ADD_CATEGORIES = 'ADD_CATEGORIES',
  SELECT_CATEGORY = 'SELECT_CATEGORY',
  REMOVE_CATEGORY = 'REMOVE_CATEGORY',
  ADD_AUTHORS = 'ADD_AUTHORS',
  SELECT_AUTHOR = 'SELECT_AUTHOR',
  REMOVE_AUTHOR = 'REMOVE_AUTHOR',
  TOGGLE_SORT_BY = 'TOGGLE_SORT_BY',
  SEARCH_FILTER = 'SEARCH_FILTER',
  APPLY_FILTERS = 'APPLY_FILTERS',
}

interface AddPostsAction {
  type: FilterActions.ADD_POSTS;
  data: Post[];
}

interface AddCategoriesAction {
  type: FilterActions.ADD_CATEGORIES;
  data: Category[];
}

interface SelectCategoryAction {
  type: FilterActions.SELECT_CATEGORY;
  data: string;
}

interface RemoveCategoryAction {
  type: FilterActions.REMOVE_CATEGORY;
  data: string;
}

interface AddAuthorsAction {
  type: FilterActions.ADD_AUTHORS;
  data: Author[];
}

interface selectAuthorAction {
  type: FilterActions.SELECT_AUTHOR;
  data: string;
}

interface RemoveAuthorAction {
  type: FilterActions.REMOVE_AUTHOR;
  data: string;
}

interface ToggleSortByAction {
  type: FilterActions.TOGGLE_SORT_BY;
  data: SortByType;
}

interface SearchFiltersByAction {
  type: FilterActions.SEARCH_FILTER;
  data: string;
}

interface ApplyFiltersByAction {
  type: FilterActions.APPLY_FILTERS;
}

export type FilterAction = AddPostsAction
  | AddCategoriesAction
  | SelectCategoryAction
  | RemoveCategoryAction
  | AddAuthorsAction
  | selectAuthorAction
  | RemoveAuthorAction
  | ToggleSortByAction
  | ApplyFiltersByAction
  | SearchFiltersByAction

export type CategoryFilter = Category & { selected: boolean }
export type AuthorFilter = Author & { selected: boolean }

export interface FilterState {
  posts: Post[]
  filteredPosts: Post[]
  categories: CategoryFilter[]
  authors: AuthorFilter[]
  sortBy: SortByType
}

export const FiltersContext = createContext<FilterState | null>(null);
export const FiltersDispatchContext = createContext<React.Dispatch<FilterAction> | null>(null);

export interface UsePosts {
  readonly isPending: boolean;
  readonly isFetching: boolean;
  readonly isError: boolean;
  readonly error: Error | null;
  readonly posts?: Post[];
  readonly navigatePost: (postId: string) => void;
  readonly filters: FilterState;
  readonly dispatchFilters: React.Dispatch<FilterAction>;
  readonly isMobile: boolean;
}
