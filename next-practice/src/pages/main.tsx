import { GetServerSideProps } from "next";
import { FC } from "react";
export const getServerSideProps: GetServerSideProps = async (context): Promise<any> => {
    const userAuth = false;
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