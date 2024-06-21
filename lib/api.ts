import colors from "colors";
import { NextResponse } from "next/server";

const response = (success: boolean, msg: string, data?: any) => ({
	success,
	msg,
	data,
});

/**
 * API Utility function to handle success responses
 * @param msg Message string
 * @param data Data to return from api
 * @param status Response Code
 * @returns Next.js Response JSON
 */
export function handleSuccess(msg: string, data?: any, status?: number) {
	console.log(colors.green(`✅ ${msg}`));
	return NextResponse.json(response(true, msg, data), {
		status: status || 200,
	});
}

/**
 * API utility function to handle error responses
 * @param msg Error message string
 * @param err Error to print and return from api
 * @param status Response code
 * @returns Next.js response JSON
 */
export function handleError(msg: string, err?: any, status?: number) {
  console.log(colors.red(`❌ ${msg}`))
  console.error(colors.dim(err))
  return NextResponse.json(response(false, msg, err.message), {
    status: status || 500
  })
}
