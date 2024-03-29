import SelectedListItem from "@/components/atoms/SelectedListItem";
import { ReactNode } from "react";
type LayoutProps = {
	children: ReactNode;
};
const DefaultLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<SelectedListItem />
			<div>{children}</div>
		</>
	);
};
export default DefaultLayout;
