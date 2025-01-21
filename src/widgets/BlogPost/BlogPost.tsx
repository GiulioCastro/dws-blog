import { Typography } from "@/widgets/Typography/Typography";
import { BlogPostProps, Card, CardHeader, CardImage, CardBody, CardFooter, Tag, BulletPoint } from "./BlogPostProps";
import { colors, spacing } from "@/themes";
import { useState } from "react";
import { format } from "date-fns";
import { getLastName } from "@/utils";

export function BlogPost({
	post,
	handleClick
}: BlogPostProps) {
	const [isPressed, setIsPressed] = useState(false);
	const authorLastName = getLastName(post.author.name);

	const handleMouseDown = () => setIsPressed(true);
	const handleMouseUp = () => setIsPressed(false);

	return (
		<Card $isPressed={isPressed} onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
			<CardHeader>
				<CardImage src={post.thumbnail_url} alt="Blog Post Image" />
			</CardHeader>
			<CardBody>
				<Typography variant="Caption" $color={colors.neutral.dark} style={{ marginBottom: spacing.medium }}>
					{format(post.createdAt, "PP")} <BulletPoint /> {authorLastName}
				</Typography>
				<Typography variant="H3" $noWrap $numOfLines={2} style={{ marginBottom: spacing.xSmall }}>
					{post.title}
				</Typography>
				<Typography variant="Body" $noWrap $numOfLines={2}>
					{post.content}
				</Typography>
			</CardBody>
			<CardFooter>
				{post.categories.map((category) => (
					<Tag key={category.id}>
						<Typography variant="Caption" $color={colors.neutral.extraDark}>{category.name}</Typography>
					</Tag>
				))}
			</CardFooter>
		</Card>
	)
}