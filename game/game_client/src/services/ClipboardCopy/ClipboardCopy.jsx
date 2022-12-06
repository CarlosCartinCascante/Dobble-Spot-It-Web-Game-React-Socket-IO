import React, { useState } from "react";
import "./ClipboardCopy.scss";

function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return navigator.clipboard.writeText("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="clipboardCopy_container">
      <input type="text" className="form-control" value={copyText} readOnly />
      <div className="input-group-append">
        <button
          className="btn btn-outline-info"
          type="button"
          onClick={handleCopyClick}
        >
          <span>{isCopied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}

export default ClipboardCopy;
