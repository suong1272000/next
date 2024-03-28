import Link from "next/link";

const Home = () => {
    return (
        <main>
            <div>hello next.js!</div>
            <Link href={"/megastudy/frontend"}>프엔반 가기 😋</Link>
        </main>
    );
};
export default Home;