import SelectedListItem from "@/components/atoms/SelectedListItem";
import { Layout } from "@/styles/Layout";
import { ReactNode } from "react";
type LayoutProps = {
	children: ReactNode;
};
const DefaultLayout = ({ children }: LayoutProps) => {
	return (
		<Layout>
			<SelectedListItem />
			<div>{children}</div>
		</Layout>
	);
};
export default DefaultLayout;
