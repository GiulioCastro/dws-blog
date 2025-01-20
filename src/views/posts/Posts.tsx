
import { Typography, PageContainer, Row, Col, BlogPost } from '@/widgets'
import Topbar from '@/widgets/Topbar/Topbar';
import Filters from '@/views/posts/Filters/Filters';
import SortBy from '@/views/posts/SortBy/SortBy';
import { usePosts } from './usePosts';
import { FiltersContext, FiltersDispatchContext } from './PostsProps';

export default function Posts() {
	const {
		isPending,
		isFetching,
		isError,
		error,
		posts,
		navigatePost,
		filters,
		dispatchFilters
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
					<Row $gutter="12px">
						<Col $xs="none" $sm="none" $md="6">
							<Typography variant="H2">DWS blog</Typography>
						</Col>
						<Col $xs="12" $md="6" style={{ display: "flex", justifyContent: "flex-end" }}>
							<SortBy />
						</Col>
					</Row>

					<Row $gutter="12px">
						<Col $xs="12" $lg="3">
							<Filters />
						</Col>
						<Col $xs="12" $lg="9">
							<Row $gutter="12px">
								{!posts?.length ?
									<Typography>No post found</Typography>
									: posts.map((post) => (
										<Col key={post.id} $xs="12" $lg="4">
											<BlogPost post={post} handleClick={() => navigatePost(post.id)} />
										</Col>
									))}
							</Row>
						</Col>
					</Row>
				</PageContainer>
			</FiltersDispatchContext.Provider>
		</FiltersContext.Provider>
	)
}
