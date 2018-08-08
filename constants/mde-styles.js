import { global } from 'styled-jsx/css';
const mdeStyles = global`.mde-header {
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  border-bottom: 1px solid #c8ccd0;
  border-radius: 2px 2px 0 0;
  background: #f9f9f9; }
  .mde-header .mde-toolbar-children {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: stretch; }
  .mde-header button:focus {
    outline: 0; }
  .mde-header ul.mde-header-group {
    margin: 0;
    padding: 10px;
    list-style: none;
    display: flex;
    flex-wrap: nowrap; }
    .mde-header ul.mde-header-group li.mde-header-item {
      display: inline-block;
      position: relative;
      margin: 0 4px; }
      .mde-header ul.mde-header-group li.mde-header-item button {
        text-align: left;
        cursor: pointer;
        height: 22px;
        padding: 4px;
        margin: 0;
        border: none;
        background: none;
        color: #242729; }

@keyframes tooltip-appear {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }
        .mde-header ul.mde-header-group li.mde-header-item button.tooltipped:hover::before {
          animation-name: tooltip-appear;
          animation-duration: 0.2s;
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
          opacity: 0;
          position: absolute;
          z-index: 1000001;
          width: 0;
          height: 0;
          color: rgba(0, 0, 0, 0.8);
          pointer-events: none;
          content: "";
          border: 5px solid transparent;
          top: -5px;
          right: 50%;
          bottom: auto;
          margin-right: -5px;
          border-top-color: rgba(0, 0, 0, 0.8); }
        .mde-header ul.mde-header-group li.mde-header-item button.tooltipped:hover::after {
          animation-name: tooltip-appear;
          animation-duration: 0.2s;
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
          font-size: 11px;
          opacity: 0;
          position: absolute;
          z-index: 1000000;
          padding: 5px 8px;
          color: #fff;
          pointer-events: none;
          content: attr(aria-label);
          background: rgba(0, 0, 0, 0.8);
          border-radius: 3px;
          right: 50%;
          bottom: 100%;
          transform: translateX(50%);
          margin-bottom: 5px;
          white-space: nowrap; }
      .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown {
        position: absolute;
        left: 0;
        top: 30px;
        background-color: white;
        border: 1px solid #c8ccd0;
        padding: 5px;
        z-index: 2;
        transform: translateX(-9px); }
        .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li {
          margin: 0;
          white-space: nowrap;
          list-style: none;
          display: block; }
          .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li button {
            display: block;
            height: auto; }
            .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li button p {
              display: block;
              margin: 0;
              padding: 0;
              font-weight: bold;
              line-height: 1em;
              background: none;
              border: 0;
              text-align: left; }
              .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li button p:hover {
                color: #4078c0; }
              .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li button p.header-1 {
                font-size: 20px; }
              .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li button p.header-2 {
                font-size: 18px; }
              .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li button p.header-3 {
                font-size: 14px; }
              .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown li button p.header-4 {
                font-size: 12px; }
        .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown::before {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          border: 8px solid transparent;
          border-bottom-color: rgba(0, 0, 0, 0.15);
          top: -16px;
          left: 3px;
          transform: translateX(50%); }
        .mde-header ul.mde-header-group li.mde-header-item ul.react-mde-dropdown::after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          border: 7px solid transparent;
          border-bottom-color: white;
          top: -14px;
          left: 5px;
          transform: translateX(50%); }

.mde-text .public-DraftEditor-content {
  width: 100%;
  min-height: 200px;
  padding: 10px; }

.mde-preview {
  min-height: 200px; }
  .mde-preview .mde-preview-content {
    padding: 10px; }
    .mde-preview .mde-preview-content p, .mde-preview .mde-preview-content blockquote, .mde-preview .mde-preview-content ul, .mde-preview .mde-preview-content ol, .mde-preview .mde-preview-content dl, .mde-preview .mde-preview-content table, .mde-preview .mde-preview-content pre {
      margin-top: 0;
      margin-bottom: 16px; }
    .mde-preview .mde-preview-content h1, .mde-preview .mde-preview-content h2, .mde-preview .mde-preview-content h3 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
      border-bottom: 1px solid #eee;
      padding-bottom: 0.3em; }
    .mde-preview .mde-preview-content h1 {
      font-size: 1.6em; }
    .mde-preview .mde-preview-content h2 {
      font-size: 1.4em; }
    .mde-preview .mde-preview-content h3 {
      font-size: 1.2em; }
    .mde-preview .mde-preview-content ul, .mde-preview .mde-preview-content ol {
      padding-left: 2em; }
    .mde-preview .mde-preview-content blockquote {
      margin-left: 0;
      padding: 0 1em;
      color: #777;
      border-left: 0.25em solid #ddd; }
      .mde-preview .mde-preview-content blockquote > :first-child {
        margin-top: 0; }
      .mde-preview .mde-preview-content blockquote > :last-child {
        margin-bottom: 0; }
    .mde-preview .mde-preview-content code {
      padding: 0.2em 0 0.2em 0;
      margin: 0;
      font-size: 90%;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 3px; }
      .mde-preview .mde-preview-content code::before, .mde-preview .mde-preview-content code::after {
        letter-spacing: -0.2em;
        content: "\00a0"; }
    .mde-preview .mde-preview-content pre {
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: #f7f7f7;
      border-radius: 3px; }
      .mde-preview .mde-preview-content pre code {
        display: inline;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        background-color: transparent;
        border: 0; }
        .mde-preview .mde-preview-content pre code::before, .mde-preview .mde-preview-content pre code::after {
          content: none; }
      .mde-preview .mde-preview-content pre > code {
        padding: 0;
        margin: 0;
        font-size: 100%;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0; }
    .mde-preview .mde-preview-content a {
      color: #4078c0;
      text-decoration: none; }
      .mde-preview .mde-preview-content a:hover {
        text-decoration: underline; }
    .mde-preview .mde-preview-content > *:first-child {
      margin-top: 0 !important; }
    .mde-preview .mde-preview-content > *:last-child {
      margin-bottom: 0 !important; }
    .mde-preview .mde-preview-content::after {
      display: table;
      clear: both;
      content: ""; }
    .mde-preview .mde-preview-content table {
      display: block;
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse; }
      .mde-preview .mde-preview-content table thead th {
        font-weight: bold; }
      .mde-preview .mde-preview-content table th, .mde-preview .mde-preview-content table td {
        padding: 6px 13px;
        border: 1px solid #c8ccd0; }

* {
  box-sizing: border-box; }

.react-mde {
  border: 1px solid #c8ccd0;
  border-radius: 2px; }

.react-mde-vertical-layout {
  display: flex;
  flex-direction: column; }
  .react-mde-vertical-layout .mde-tabs {
    display: flex;
    align-items: stretch; }
    .react-mde-vertical-layout .mde-tabs .mde-tab {
      border: none;
      border-left: 1px solid #c8ccd0;
      padding: 10px;
      background: none; }
  .react-mde-vertical-layout .react-mde-content {
    display: flex;
    flex-direction: column; }
    .react-mde-vertical-layout .react-mde-content .mde-text {
      min-height: 200px;
      height: auto;
      overflow-y: auto; }
    .react-mde-vertical-layout .react-mde-content .mde-preview {
      min-height: 0;
      height: auto;
      overflow-y: auto;
      border-top: 1px solid #c8ccd0; }

.react-mde-no-preview-layout {
  height: 100%;
  display: flex;
  flex-direction: column; }
  .react-mde-no-preview-layout .mde-text {
    overflow-y: auto; }

.react-mde-horizontal-layout {
  height: 100%;
  display: flex;
  flex-direction: column; }
  .react-mde-horizontal-layout .mde-tabs {
    display: flex;
    align-items: stretch; }
    .react-mde-horizontal-layout .mde-tabs .mde-tab {
      border: none;
      border-left: 1px solid #c8ccd0;
      padding: 10px;
      background: none; }
    .react-mde-horizontal-layout .mde-tabs .mde-tab:hover {
      cursor: pointer; }
  .react-mde-horizontal-layout .mde-content {
    display: flex;
    height: 100%; }
    .react-mde-horizontal-layout .mde-content .mde-text {
      min-width: 50%;
      overflow-y: auto;
      border-radius: 0; }
    .react-mde-horizontal-layout .mde-content .mde-preview {
      min-width: 50%;
      border-left: 1px solid #c8ccd0;
      overflow-y: auto; }

.react-mde-tabbed-layout {
  height: 100%;
  display: flex;
  flex-direction: column; }
  .react-mde-tabbed-layout .mde-tabs {
    display: flex;
    align-items: flex-end; }
    .react-mde-tabbed-layout .mde-tabs .mde-tab {
      position: relative;
      top: 1px;
      border: 1px solid #f9f9f9;
      border-bottom: none;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      margin-right: 10px;
      padding: 10px;
      background: none; }
    .react-mde-tabbed-layout .mde-tabs .mde-tab:hover {
      border-color: #c8ccd0;
      cursor: pointer; }
    .react-mde-tabbed-layout .mde-tabs .mde-tab-activated {
      border-color: #c8ccd0;
      background: white; }
  .react-mde-tabbed-layout .mde-text {
    overflow-y: auto; }
  .react-mde-tabbed-layout .mde-preview {
    overflow-y: auto; }
`

export default mdeStyles;