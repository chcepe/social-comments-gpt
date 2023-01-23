import appendStyles from "./utils/styles";
import { ALLOWED_DOMAINS, Domains } from "./utils/constants";
import {
  injector as linkedInInjector,
  handler as linkedInHandler,
} from "./utils/linkedin";
import {
  injector as instagramInjector,
  handler as instagramHandler,
} from "./utils/instagram";

const service: Record<Domains, [() => void, () => Promise<void>]> = {
  [Domains.LinkedIn]: [linkedInInjector, linkedInHandler],
  [Domains.Instagram]: [instagramInjector, instagramHandler],
};

(() => {
  const hostname = window.location.hostname;
  const activeTabDomain = (hostname?.match(
    /^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/
  )?.[1] || "") as Domains;

  if (!ALLOWED_DOMAINS.includes(activeTabDomain)) return;

  const [injector, handler] = service[activeTabDomain];

  appendStyles();
  handler();
  setInterval(injector, 100);
})();
