import { ReactNode } from "react";
type LayoutProps = {
    children: ReactNode;
};
const DefaultLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <header>머리입니다.</header>
            <div>{children}</div>
            <footer>발</footer>
        </>
    );
};
export default DefaultLayout;