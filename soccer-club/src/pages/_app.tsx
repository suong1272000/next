import { AppProps } from "next/app";
import DefaultLayout from "./defaultLayout";
import { Component } from "react";
import Login from "./login";

function MyApp({ Component, pageProps }: AppProps) {
	const isLoginPage = Component === Login;
	return (
		<>
		  {/* 로그인 페이지인 경우 DefaultLayout을 적용하지 않음 */}
		  {isLoginPage ? (
			<Component {...pageProps} />
		  ) : (
			<DefaultLayout>
			  <Component {...pageProps} />
			</DefaultLayout>
		  )}
		</>
	  );
}
export default MyApp;
