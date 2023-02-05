import { Announcement } from "./src/utils/announcements";

declare module "*.module.css";

declare global {
  interface Window {
    announcementsLoading: boolean;
    allAnnouncements: Announcement[];
    filteredAnnouncements: Announcement[];
    announcementsFinishedLoading: boolean;
  }
}
