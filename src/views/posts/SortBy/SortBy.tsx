import { iconSizes, spacing } from '@/themes'
import { Wrapper, SortByButton } from './SortByProps'
import { BiSortAlt2 } from "react-icons/bi";
import { FilterActions, FiltersContext, FiltersDispatchContext, sortByTypes } from '@/views/posts/PostsProps';
import { useCallback, useContext } from 'react';
import { Typography } from '@/widgets';

export default function SortBy() {
	const filters = useContext(FiltersContext)
	const dispatch = useContext(FiltersDispatchContext)

	const toggleSortBy = useCallback(() => {
		dispatch?.({
			type: FilterActions.TOGGLE_SORT_BY,
			data: filters?.sortBy === "newest" ? "oldest" : "newest"
		})
	}, [filters?.sortBy])

	return (
		<Wrapper>
			<Typography variant="BodyBold" style={{ marginRight: spacing.xSmall }}>Sort by:</Typography>
			<SortByButton type="button" onClick={toggleSortBy}>
				{!!filters?.sortBy && <Typography variant="Body">{sortByTypes[filters.sortBy]}</Typography>}
				<BiSortAlt2 size={iconSizes.small} />
			</SortByButton>
		</Wrapper>
	)
}
