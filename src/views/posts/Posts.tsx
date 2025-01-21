
import { Typography, PageContainer, Row, Col, BlogPost } from '@/widgets'
import Topbar from '@/widgets/Topbar/Topbar';
import Filters from '@/views/posts/Filters/Filters';
import SortBy from '@/views/posts/SortBy/SortBy';
import DropdownFilter from '@/views/posts/DropdownFilter/DropdownFilter';
import { usePosts } from './usePosts';
import { FiltersContext, FiltersDispatchContext } from './PostsProps';
import { spacing } from '@/themes';

export default function Posts() {
	const {
		isPending,
		isFetching,
		isError,
		error,
		posts,
		navigatePost,
		filters,
		dispatchFilters,
		isMobile
	} = usePosts();

	if (isPending || isFetching) {
		return <span>Loading...</span>
	}

	if (isError) {
		return <span>Error: {error?.message}</span>
	}

	return (
		<FiltersContext.Provider value={filters}>
			<FiltersDispatchContext.Provider value={dispatchFilters}>
				<Topbar />
				<PageContainer>
					<Row $gutter={isMobile ? "8px" : "12px"} style={{ marginBottom: spacing.medium }}>
						<Col $xs="auto" $md="8">
							{isMobile ? (
								<>
									<DropdownFilter filterType="category" />
								</>
							) : (
								<Typography variant="H2">DWS blog</Typography>
							)}
						</Col>
						<Col $xs="auto" $md="none" $lg="none" $xl="none" $xxl="none">
							<DropdownFilter filterType="author" />
						</Col>
						<Col $xs="auto" $md="4" style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
							<SortBy />
						</Col>
					</Row>

					<Row $gutter={isMobile ? "8px" : "12px"}>
						<Col $xs="none" $sm="none" $lg="3">
							<Filters />
						</Col>
						<Col $xs="12" $lg="9">
							<Row $gutter={isMobile ? "8px" : "12px"}>
								{!posts?.length ? (
									<Typography>No post found</Typography>
								) : posts.map((post) => (
									<Col key={post.id} $xs="12" $lg="4">
										<BlogPost post={post} handleClick={() => navigatePost(post.id)} />
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</PageContainer>
			</FiltersDispatchContext.Provider>
		</FiltersContext.Provider >
	)
}
