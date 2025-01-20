
import { colors, spacing, strokeSizes } from '@/themes';
import { Avatar, BlogThumbnail, Button, Col, Divider, PageContainer, Row, Typography } from '@/widgets';
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
		authorLastName,
		goBack
	} = usePost()

	console.log("data", post)

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
				<Row $gutter="12px">
					<Col $xs="12" $lg="2">
						<Button onClick={goBack} LeftIcon={FaArrowLeft} variant="outlined" border="pill" size="small" text="Back" />
					</Col>
					<Col $xs="12" $lg="8">
						<Typography variant="H1" style={{ marginBottom: spacing.large }}>
							{post.title}
						</Typography>

						<div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
							<Avatar size="large" src={post.author.profilePicture} alt="author profile image" />
							<div style={{ marginLeft: spacing.xSmall }}>
								<Typography variant="Body" style={{ marginBottom: spacing.xxSmall }}>
									Written by: <b>{authorLastName}</b>
								</Typography>
								<Typography variant="Body" $color={colors.neutral.dark}>
									{format(post.createdAt, "PP")}
								</Typography>
							</div>
						</div>

						<BlogThumbnail height={350} src={post.thumbnail_url} />

						<Typography>{post.content}</Typography>

						<Divider stroke={strokeSizes.thin} inset={spacing.xLarge} />

						<Typography variant="H2" style={{ marginBottom: spacing.large }}>
							Latest articles
						</Typography>

						{/* <Row $gutter="12px">
							<Col $xs="12" $lg="4">
								<BlogPost />
							</Col>
							<Col $xs="12" $lg="4">
								<BlogPost />
							</Col>
							<Col $xs="12" $lg="4">
								<BlogPost />
							</Col>
						</Row> */}
					</Col>
				</Row>
			</PageContainer>
		</>
	)
}
