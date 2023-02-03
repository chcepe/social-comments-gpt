import { Notyf } from "notyf";

import appendStyles from "../lib/styles";
import { ALLOWED_DOMAINS, Domains } from "../utils/constants";
import {
  injector as linkedInInjector,
  handler as linkedInHandler,
} from "../lib/linkedin";
import {
  injector as instagramInjector,
  handler as instagramHandler,
} from "../lib/instagram";
import {
  injector as twitterInjector,
  handler as twitterHandler,
} from "../lib/twitter";
import {
  injector as announcementInjector,
  handler as announcementHandler,
} from "../utils/announcements";

const service: Record<Domains, [() => void, () => Promise<void>]> = {
  [Domains.LinkedIn]: [linkedInInjector, linkedInHandler],
  [Domains.Instagram]: [instagramInjector, instagramHandler],
  [Domains.Twitter]: [twitterInjector, twitterHandler],
};

export let notyf: Notyf | undefined;

(() => {
  const hostname = window.location.hostname;
  const activeTabDomain = (hostname?.match(
    /^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/
  )?.[1] || "") as Domains;

  if (!ALLOWED_DOMAINS.includes(activeTabDomain)) return;

  const [injector, handler] = service[activeTabDomain];

  notyf = new Notyf();

  announcementHandler(activeTabDomain);
  appendStyles();
  handler();
  setInterval(injector, 200);
  setInterval(() => {
    announcementInjector(activeTabDomain);
  }, 1000);
})();
