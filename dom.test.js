import { expect, it, vi } from "vitest";
import { renderTitle } from "./dom";
import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";

// load the index.html file content
const htmlPath = path.join(__dirname, "index.html");
const htmlContent = fs.writeFileSync(htmlPath, "utf-8");

// Crating Virtual DOM
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// stubbing the global document with the custom document
vi.stubGlobal("document", document);

it("should render the title", () => {
  renderTitle();

  const titleEl = document.getElementById("title");
  const titlePara = titleEl.firstElementChild;

  expect(titlePara).not.toBeNull();
});
