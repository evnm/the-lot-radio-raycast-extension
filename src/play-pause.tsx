import { Toast, popToRoot, showToast } from "@raycast/api";
import { showFailureToast } from "@raycast/utils";
import { play } from "./api/play";
import { STREAM_URL } from "./constants/constants";

export default async function Command() {
  try {
    await showToast({
      style: Toast.Style.Animated,
      title: "Opening The Lot Radio audio stream",
    });
    await play(STREAM_URL);
    await popToRoot();
  } catch (err) {
    await showFailureToast(err, { title: "Sorry! Could not open The Lot Radio audio stream" });
  }
}
