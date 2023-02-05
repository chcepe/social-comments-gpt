import { ANNOUNCEMENTS_API, Domains } from "./constants";
import { generateAnnouncementId } from "./generators";

export type Announcement = {
  id: string;
  message: string;
  title: string;
  version: number;
};

export const ANNOUNCEMENT_LIST_WRAPPER = "social-comments-gpt-alerts";
export const ANNOUNCEMENT_WRAPPER = "social-comments-gpt-alert";

export const handler = (domain: Domains) => {
  document.body.addEventListener("click", async (e) => {
    const target = e.target as Element;
    const btn = target?.closest(`.${ANNOUNCEMENT_WRAPPER} .close-btn`);
    if (!btn) return;

    target?.closest(`.${ANNOUNCEMENT_WRAPPER}`)?.remove();

    const announcementId = generateAnnouncementId(
      btn.getAttribute("announcement-id") || "",
      domain
    );

    chrome?.storage?.local?.set({ [announcementId]: true }).catch(() => {
      console.warn(`useChromeStorage set error: ${announcementId}`);
    });
  });
};

window.announcementsLoading = false;
window.allAnnouncements = [];
window.filteredAnnouncements = [];
window.announcementsFinishedLoading = false;

const getAnnouncementsList = () =>
  document.querySelector(`.${ANNOUNCEMENT_LIST_WRAPPER}`);

export const injector = (domain: Domains) => {
  (async () => {
    if (
      window.announcementsLoading ||
      // Finished loading without announcements
      (window.announcementsFinishedLoading &&
        !window.filteredAnnouncements.length) ||
      // Finished loading with announcements
      (window.announcementsFinishedLoading &&
        window.filteredAnnouncements.length &&
        getAnnouncementsList() !== null)
    )
      return;

    window.announcementsLoading = true;
    const manifestData = chrome.runtime.getManifest();
    const currentVersion = manifestData.version;

    const resp = await fetch(ANNOUNCEMENTS_API + `?version=${currentVersion}`);

    window.allAnnouncements = await resp.json();
    window.filteredAnnouncements = await asyncFilter(
      window.allAnnouncements,
      async (a) => {
        const isSeen = await isAnnouncementSeen(
          generateAnnouncementId(a.id, domain)
        );
        return !isSeen;
      }
    );

    const content = `<div class="${ANNOUNCEMENT_LIST_WRAPPER}">${window.filteredAnnouncements
      .map(
        (a) =>
          `<div class="${ANNOUNCEMENT_WRAPPER} ${domain.replace(".com", "")}">
            <div class="close-btn" announcement-id="${a.id}"></div>
            <p class="title">${a.title}</p>
            <p>${a.message}</p>
          </div>`
      )
      .join("")}</div>`;

    switch (domain) {
      case Domains.LinkedIn:
        document
          .querySelector("main > div:first-of-type")
          ?.insertAdjacentHTML("afterend", content);
        break;
      case Domains.Instagram:
        document
          .querySelector(`section > div > div:first-of-type`)
          ?.insertAdjacentHTML("afterend", content);
        break;
      case Domains.Twitter:
        document
          .querySelector(`nav[aria-live="polite"]`)
          ?.insertAdjacentHTML("afterend", content);
        break;
    }

    window.announcementsFinishedLoading = true;
    window.announcementsLoading = false;
  })();
};

const isAnnouncementSeen = (announcementId: string): Promise<boolean> => {
  return new Promise((resolve, reject) =>
    chrome?.storage?.local?.get([announcementId], (result) => {
      resolve(`${announcementId}` in result);
    })
  );
};

const asyncFilter = async <T>(
  arr: T[],
  predicate: (v: T) => void
): Promise<T[]> => {
  const results = await Promise.all(arr.map(predicate));

  return arr.filter((_v: any, index: any) => results[index]);
};
