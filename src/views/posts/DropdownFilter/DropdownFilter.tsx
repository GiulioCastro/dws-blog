import { useCallback, useContext, useState } from 'react';
import { DropdownFilterProps, DropdownWrapper, DropdownBtn, DropdownContent, DropdownItem, filterTypes } from './DropdownFilterProps'
import { Typography } from '@/widgets';
import { iconSizes, spacing } from '@/themes';
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { AuthorFilter, CategoryFilter, FilterActions, FiltersContext, FiltersDispatchContext } from '../PostsProps';

export default function DropdownFilter({
	filterType,
}: DropdownFilterProps) {
	const filters = useContext(FiltersContext)
	const dispatch = useContext(FiltersDispatchContext)

	const [toggled, setToggled] = useState(false);

	const toggleDropdown = () => setToggled((toggled) => !toggled);

	const applyFilters = () => {
		dispatch?.({ type: FilterActions.APPLY_FILTERS })
	}

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

	const toggleItem = useCallback((itemId: string, selected: boolean) => {
		if (filterType === "category") toggleCategory(itemId, selected);
		else toggleAuthor(itemId, selected);

		applyFilters();
	}, [filterType])

	const filterList = filterType === "category" ? filters?.categories : filters?.authors;

	const selectedFilterList = filterList?.filter((f) => f.selected);

	return (
		<DropdownWrapper>
			<DropdownBtn onClick={toggleDropdown}>
				{!!selectedFilterList?.length ? (
					<>
						{selectedFilterList.map((item: CategoryFilter | AuthorFilter, index: number) => (
							<Typography key={item.id} variant="CaptionBold" >{index !== 0 && ", "}{item.name}</Typography>
						))}
					</>
				) : (
					<Typography variant="CaptionBold">{filterTypes[filterType]}</Typography>
				)}
				{toggled ? (
					<IoMdClose style={{ marginLeft: spacing.xxSmall }} size={iconSizes.xSmall} />
				) : (
					<IoIosArrowDown style={{ marginLeft: spacing.xxSmall }} size={iconSizes.xSmall} />
				)}
			</DropdownBtn>
			<DropdownContent $show={toggled}>
				{filterList?.map((item: CategoryFilter | AuthorFilter) => (
					<DropdownItem key={item.id} onClick={() => toggleItem(item.id, item.selected)}>
						<Typography style={{ textAlign: "left" }}>{item.name}</Typography>
					</DropdownItem>
				))}
			</DropdownContent>
		</DropdownWrapper>
	)
}
