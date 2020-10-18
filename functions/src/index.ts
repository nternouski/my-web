import { resolve } from "path";
import * as functions from "firebase-functions";
// tslint:disable-next-line: import-blacklist
import * as admin from "firebase-admin";

if (process.env.NODE_ENV === "development") {
	process.env.GOOGLE_APPLICATION_CREDENTIALS = resolve(
		"./nternouski-firebase-adminsdk-p6za3-f78c63bafd.json"
	);
}
admin.initializeApp();

import { listener as apiServer } from "./http";
export const api = functions.https.onRequest(apiServer);
