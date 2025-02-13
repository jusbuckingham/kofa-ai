import fs from "fs";
import path from "path";
import handlebars from "handlebars";

export function loadTemplate(templateName: string, data: Record<string, any>) {
  const templatePath = path.join(process.cwd(), "src", "templates", `${templateName}.html`);
  const source = fs.readFileSync(templatePath, "utf-8");
  const template = handlebars.compile(source);
  return template(data);
}