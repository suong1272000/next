import { GetServerSideProps } from "next";
import { FC, useState } from "react";
export const getServerSideProps: GetServerSideProps = async (context): Promise<{props:any}> => {
    return {
        props: {},
    };
};

type LoginProps = {
    props: any;
};

const Login: FC<LoginProps> = ({props}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const UnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const PwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const Login = () => {
        if (username === "mega" && password === "123") {
            alert("true");
        } else {
            alert("false");
        }
    };

    return (
        <div>
            <input type="text" value={username} onChange={UnChange}/>
            <input type="password" value={password} onChange={PwChange}/>
            <button onClick={Login}>로그인</button>
        </div>
    );
};
export default Login;