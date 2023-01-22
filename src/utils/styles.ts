import { CHATGPT_BTN_ID } from "./constants";

export default () => {
  const styles = `<style>
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
