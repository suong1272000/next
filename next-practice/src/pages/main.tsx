import { GetServerSideProps } from "next";
import { parse } from "cookie";
import { FC } from "react";
import * as React from "react";
import {
	Button,
	Breadcrumbs,
	Link,
	Typography,
	BottomNavigation,
	BottomNavigationAction,
} from "@mui/material";
import { checkCookie } from "@/middleware";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<any> => {
	const { req } = context;
	checkCookie(req);
	return {
		props: {},
	};
};
type MainProps = {
	props: any;
};
const Main: FC<MainProps> = ({ props }) => {
	const [value, setValue] = React.useState();

	return (
		<div>
			메인 페이지
			<Button variant="contained">Hello world</Button>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="/">
					MUI
				</Link>
				<Link
					underline="hover"
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					Core
				</Link>
				<Typography color="text.primary">Breadcrumbs</Typography>
			</Breadcrumbs>
		</div>
	);
};
export default Main;
