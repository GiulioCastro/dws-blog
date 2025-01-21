
import { colors, spacing, strokeSizes } from '@/themes';
import { Avatar, BlogPost, BlogThumbnail, Button, Col, Divider, PageContainer, Row, Typography } from '@/widgets';
import Topbar from '@/widgets/Topbar/Topbar';
import { FaArrowLeft } from "react-icons/fa";
import { usePost } from './usePost';
import { format } from "date-fns";

export default function Post() {
	const {
		isPending,
		isFetching,
		isError,
		error,
		post,
		latestArticles,
		authorLastName,
		goBack,
		navigatePost,
		isMobile
	} = usePost();

	if (isPending || isFetching) {
		return <span>Loading...</span>
	}

	if (isError || !post) {
		return <span>Error: {error?.message}</span>
	}

	return (
		<>
			<Topbar />
			<PageContainer>
				<Row $gutter={isMobile ? "8px" : "12px"}>
					<Col $xs="12" $lg="2">
						<Button onClick={goBack} LeftIcon={FaArrowLeft} variant="outlined" border="pill" size={isMobile ? "small" : "large"} text="Back" />
					</Col>
					<Col $xs="12" $lg="8">
						<Typography variant={isMobile ? "H2" : "H1"} style={{ marginBottom: spacing.large }}>
							{post.title}
						</Typography>

						<div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
							<Avatar size={isMobile ? "medium" : "large"} src={post.author.profilePicture} alt="author profile image" />
							<div style={{ marginLeft: spacing.xSmall }}>
								<Typography variant="Body" style={{ marginBottom: spacing.xxSmall }}>
									Written by: <b>{authorLastName}</b>
								</Typography>
								<Typography variant="Body" $color={colors.neutral.dark}>
									{format(post.createdAt, "PP")}
								</Typography>
							</div>
						</div>

						<BlogThumbnail src={post.thumbnail_url} />

						<Typography>{post.content}</Typography>

						<Divider stroke={strokeSizes.thin} inset={spacing.xLarge} />

						{!!latestArticles.length && (
							<>
								<Typography variant="H2" style={{ marginBottom: spacing.large }}>
									Latest articles
								</Typography>
								<Row $gutter={isMobile ? "8px" : "12px"}>
									{latestArticles.map((post) => (
										<Col key={post.id} $xs="12" $lg="4">
											<BlogPost post={post} handleClick={() => navigatePost(post.id)} />
										</Col>
									))}
								</Row>
							</>
						)}
					</Col>
				</Row>
			</PageContainer>
		</>
	)
}
