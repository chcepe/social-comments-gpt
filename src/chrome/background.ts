import { UNINSTALL_PAGE, WELCOME_PAGE } from "../utils/constants";

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == "install") {
    chrome.tabs.create({
      url: WELCOME_PAGE,
    });
  }
});

chrome.runtime.setUninstallURL(UNINSTALL_PAGE);
