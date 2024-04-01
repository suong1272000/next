import { GetServerSideProps } from "next";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export const checkCookie = async (req: NextRequest) => {
	const cookies = req.cookies;
	const userAuth = cookies.get("success");

	if (!userAuth) {
		const url = new URL("/login", req.url);
		await NextResponse.redirect(url);
		return false; // Return false if not authenticated
	}
	return true; // Return true if authenticated
};
