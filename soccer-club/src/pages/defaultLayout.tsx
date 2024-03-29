import SelectedListItem from "@/components/atoms/SelectedListItem";
import { ReactNode } from "react";
import styled from "styled-components";
import Registry from './registry';

type LayoutProps = {
	children: ReactNode;
};
const DefaultLayout = ({ children }: LayoutProps) => {
	const PageStyle = styled.div`
    width: 100%;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 584px;
`
	return (
		<Registry>
		<div style={{display:"flex"}}>
			<SelectedListItem />
			<PageStyle>{children}</PageStyle>
		</div>
		</Registry>

	);
};
export default DefaultLayout;
