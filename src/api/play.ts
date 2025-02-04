import { runAppleScript } from "run-applescript";
import { getErrorMessage } from "../utils/getError";
import { Toast, showToast } from "@raycast/api";

export async function play(streamUrl: string) {
  try {
    await showToast({
      style: Toast.Style.Animated,
      title: "Opening The Lot Radio stream"
    });
      await runAppleScript(`try
        tell application "QuickTime Player"
          if not (exists document 1) then
            -- No document open, start playing the stream
            open location "${streamUrl}"
            repeat while visible of window 1 = false
              delay 0.5
            end repeat
            set visible of window 1 to false
            return "Playing The Lot Radio"
          else
            -- A document is already open, If something's playing,
            -- then pause it. Otherwise, open the Lot stream.
            tell document 1
              close
              return "Closed The Lot Radio stream"
            end tell
          end if
        end tell
      on error
        return "err:noapp"
      end try`);
  } catch (err) {
    const error = getErrorMessage(err);
    console.log("Error playing selected audio stream: ", error);
    throw new Error(error);
  }
}
