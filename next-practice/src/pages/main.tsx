import { GetServerSideProps } from "next";
import { parse } from "cookie";
import { FC } from "react";
export const getServerSideProps: GetServerSideProps = async (context): Promise<any> => {
    const { req } = context;
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    console.log(cookies.success)
    const userAuth = cookies.success == "true";
    if(!userAuth){
        return{
            redirect:{
                destination: "/login",
            },
        }
    }

    return {
        props: {},
    };
};
type MainProps = {
    props: any;
};
const Main: FC<MainProps> = ({ props }) => {
    return <div>메인 페이지</div>;
};
export default Main;