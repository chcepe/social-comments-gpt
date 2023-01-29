import { ANNOUNCEMENT_ALERT_WRAPPER } from "../utils/announcements";
import { CHATGPT_BTN_ID } from "../utils/constants";

export default () => {
  const styles = `<style>
    .${ANNOUNCEMENT_ALERT_WRAPPER} {
      background: #fff;
      border: 1px solid #2196F3;
      padding: 16px;
      border-radius: 8px;
      margin: 8px 0;
      position: relative;
      cursor: auto;
    }

    .${ANNOUNCEMENT_ALERT_WRAPPER} p {
      margin: 0;
    }

    .${ANNOUNCEMENT_ALERT_WRAPPER} a {
      text-decoration: none;
    }
    
    .${ANNOUNCEMENT_ALERT_WRAPPER} .title {
      font-weight: bold;
    }

    .${ANNOUNCEMENT_ALERT_WRAPPER} .close-btn {
        cursor: pointer;
      	background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.00005 8.3998L2.10005 13.2998C1.91672 13.4831 1.68338 13.5748 1.40005 13.5748C1.11672 13.5748 0.883382 13.4831 0.700048 13.2998C0.516715 13.1165 0.425049 12.8831 0.425049 12.5998C0.425049 12.3165 0.516715 12.0831 0.700048 11.8998L5.60005 6.9998L0.700048 2.0998C0.516715 1.91647 0.425049 1.68314 0.425049 1.3998C0.425049 1.11647 0.516715 0.883138 0.700048 0.699804C0.883382 0.516471 1.11672 0.424805 1.40005 0.424805C1.68338 0.424805 1.91672 0.516471 2.10005 0.699804L7.00005 5.5998L11.9 0.699804C12.0834 0.516471 12.3167 0.424805 12.6 0.424805C12.8834 0.424805 13.1167 0.516471 13.3 0.699804C13.4834 0.883138 13.575 1.11647 13.575 1.3998C13.575 1.68314 13.4834 1.91647 13.3 2.0998L8.40005 6.9998L13.3 11.8998C13.4834 12.0831 13.575 12.3165 13.575 12.5998C13.575 12.8831 13.4834 13.1165 13.3 13.2998C13.1167 13.4831 12.8834 13.5748 12.6 13.5748C12.3167 13.5748 12.0834 13.4831 11.9 13.2998L7.00005 8.3998Z' fill='black'/%3E%3C/svg%3E");
        background-size: contain;
        position: absolute;
        width: 10px;
        height: 10px;
        top: 14px;
        right: 14px;
    }

    .instafeed-chatgpt-btn {
      padding: 8px 10px 8px 0;
    }

    .instareels-chatgpt-btn {
      padding-right: 6px;
    }

    .instafeed-chatgpt-btn, .instareels-chatgpt-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .instafeed-chatgpt-btn:not([disabled="true"]):hover, .instareels-chatgpt-btn:not([disabled="true"]):hover {
      opacity: 0.6;
    }

    .insta-with-chatgpt {
      display: flex !important; 
      align-items: center;
    }

    #${CHATGPT_BTN_ID}.twitter{
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
    }

    #${CHATGPT_BTN_ID}.twitter svg {
      width: 18px;
      height: 18px;
    }

    #${CHATGPT_BTN_ID}{
      cursor: pointer;
    }

    #${CHATGPT_BTN_ID}:disabled, #${CHATGPT_BTN_ID}[disabled="true"] {
      opacity: 0.3 !important;
      cursor: not-allowed;
    }

    #${CHATGPT_BTN_ID}[loading="true"] {
      animation: rotation 2s infinite linear;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    </style>`;

  document.head.insertAdjacentHTML("beforeend", styles);
};
