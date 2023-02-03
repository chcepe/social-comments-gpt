import { ANNOUNCEMENT_WRAPPER } from "../utils/announcements";
import { CHATGPT_BTN_ID, TOAST_CLASSNAME } from "../utils/constants";

export default () => {
  const styles = `<style>
    .${ANNOUNCEMENT_WRAPPER} {
      background: #fff;
      border: 1px solid #2196F3;
      padding: 16px;
      border-radius: 8px;
      margin: 8px 0;
      position: relative;
      cursor: auto;
    }

    .${ANNOUNCEMENT_WRAPPER} p {
      color: #000;
      margin: 0;
    }

    .${ANNOUNCEMENT_WRAPPER} a {
      text-decoration: none;
      color: #0000EE !important;
    }
    
    .${ANNOUNCEMENT_WRAPPER} .title {
      font-weight: bold;
    }

    .${ANNOUNCEMENT_WRAPPER} .close-btn {
        cursor: pointer;
      	background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.00005 8.3998L2.10005 13.2998C1.91672 13.4831 1.68338 13.5748 1.40005 13.5748C1.11672 13.5748 0.883382 13.4831 0.700048 13.2998C0.516715 13.1165 0.425049 12.8831 0.425049 12.5998C0.425049 12.3165 0.516715 12.0831 0.700048 11.8998L5.60005 6.9998L0.700048 2.0998C0.516715 1.91647 0.425049 1.68314 0.425049 1.3998C0.425049 1.11647 0.516715 0.883138 0.700048 0.699804C0.883382 0.516471 1.11672 0.424805 1.40005 0.424805C1.68338 0.424805 1.91672 0.516471 2.10005 0.699804L7.00005 5.5998L11.9 0.699804C12.0834 0.516471 12.3167 0.424805 12.6 0.424805C12.8834 0.424805 13.1167 0.516471 13.3 0.699804C13.4834 0.883138 13.575 1.11647 13.575 1.3998C13.575 1.68314 13.4834 1.91647 13.3 2.0998L8.40005 6.9998L13.3 11.8998C13.4834 12.0831 13.575 12.3165 13.575 12.5998C13.575 12.8831 13.4834 13.1165 13.3 13.2998C13.1167 13.4831 12.8834 13.5748 12.6 13.5748C12.3167 13.5748 12.0834 13.4831 11.9 13.2998L7.00005 8.3998Z' fill='black'/%3E%3C/svg%3E");
        background-size: contain;
        position: absolute;
        width: 10px;
        height: 10px;
        top: 14px;
        right: 14px;
    }

  .${ANNOUNCEMENT_WRAPPER}.twitter {
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 8px 12px;
  }

    .instafeed-chatgpt-btn {
      padding: 8px 0 8px 10px;
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

    [force-flex="true"] {
      display: flex;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }

    .${TOAST_CLASSNAME} .title {
      font-weight: bold;
    }


    .${TOAST_CLASSNAME} p {
      color: #fff;
      margin: 0;
    }

    .${TOAST_CLASSNAME} p.small {
      font-size: 12px;
      margin-top: 12px;
    }

    .${TOAST_CLASSNAME} a, .${TOAST_CLASSNAME} a:hover, .${TOAST_CLASSNAME} a:focus {
      color: #ffff00 !important;
      text-decoration: none;
    }

    .${TOAST_CLASSNAME}.twitter {
      font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    ${notyfCSS}
    </style>`;

  document.head.insertAdjacentHTML("beforeend", styles);
};

const notyfCSS = `
@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:500px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px;margin-top:3px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}
`;
