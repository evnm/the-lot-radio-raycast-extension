import { Toast, popToRoot, showToast } from "@raycast/api";
import { play } from "./api/play";
import { STREAM_URL } from "./constants/constants";
import { getErrorMessage } from "./utils/getError";

export default async function Command() {
    try {
	await showToast({
	    style: Toast.Style.Animated,
	    title: "Opening The Lot Radio audio stream",
	});
	await play(STREAM_URL);
	await popToRoot();
    } catch (err) {
	const error = getErrorMessage(err);
	await showToast({
	    style: Toast.Style.Failure,
	    title: "Sorry! Could not open The Lot Radio audio stream",
	});
	console.log("Error when playing stream:", error);
    }
}
