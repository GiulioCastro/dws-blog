import { iconSizes, spacing } from '@/themes'
import { Card, FilterItem, FilterWrapper, TitleWrapper } from './FiltersProps'
import { IoMdOptions } from "react-icons/io";
import { useContext } from 'react';
import { FilterActions, FiltersContext, FiltersDispatchContext } from '@/views/posts/PostsProps';
import { Button, Typography } from '@/widgets';

export default function Filters() {
	const filters = useContext(FiltersContext)
	const dispatch = useContext(FiltersDispatchContext)

	const toggleCategory = (categoryId: string, selected: boolean) => {
		if (selected) {
			dispatch?.({ type: FilterActions.REMOVE_CATEGORY, data: categoryId })
			return;
		}
		dispatch?.({ type: FilterActions.SELECT_CATEGORY, data: categoryId })
	}

	const toggleAuthor = (authorId: string, selected: boolean) => {
		if (selected) {
			dispatch?.({ type: FilterActions.REMOVE_AUTHOR, data: authorId })
			return;
		}
		dispatch?.({ type: FilterActions.SELECT_AUTHOR, data: authorId })
	}

	const applyFilters = () => {
		dispatch?.({ type: FilterActions.APPLY_FILTERS })
	}

	return (
		<Card>
			<TitleWrapper>
				<IoMdOptions size={iconSizes.small} />
				<Typography variant="H3" style={{ marginLeft: spacing.xSmall }}>Filters</Typography>
			</TitleWrapper>

			<Typography variant="BodyLgBold" style={{ marginTop: spacing.medium, marginBottom: spacing.xxSmall }}>Category</Typography>
			<FilterWrapper>
				{filters?.categories.map((category) => (
					<FilterItem
						type="button"
						key={category.id}
						selected={category.selected}
						onClick={() => toggleCategory(category.id, category.selected)}
					>
						<Typography>{category.name}</Typography>
					</FilterItem>
				))}
			</FilterWrapper>

			<Typography variant="BodyLgBold" style={{ marginTop: spacing.medium, marginBottom: spacing.xxSmall }}>Author</Typography>
			<FilterWrapper>
				{filters?.authors.map((author) => (
					<FilterItem
						type="button"
						key={author.id}
						selected={author.selected}
						onClick={() => toggleAuthor(author.id, author.selected)}
					>
						<Typography>{author.name}</Typography>
					</FilterItem>
				))}
			</FilterWrapper>

			<Button onClick={applyFilters} style={{ width: "100%", marginTop: spacing.large }} border="pill" text="Apply filters" />
		</Card>
	)
}
