import fs from "fs";
import path from "path";
import handlebars from "handlebars";

export function loadTemplate(
  templateName: string,
  data: Record<string, any>,
  emailId: string
): string {
  try {
    // Load the template file
    const templatePath = path.join(process.cwd(), "src/templates", `${templateName}.html`);
    const templateSource = fs.readFileSync(templatePath, "utf8");

    // Compile the template with Handlebars
    const compiledTemplate = handlebars.compile(templateSource);
    let emailContent = compiledTemplate(data);

    // Tracking pixel
    const trackingPixel = `<img src="https://kofa.ai/api/email/track?emailId=${emailId}" width="1" height="1" />`;

    // Replace all links with a tracking URL
    emailContent = emailContent.replace(
      /href="(https?:\/\/[^"]+)"/g,
      (_match, url) =>
        `href="https://kofa.ai/api/email/click?emailId=${emailId}&url=${encodeURIComponent(url)}"`
    );

    return emailContent + trackingPixel;
  } catch (error) {
    console.error(`❌ Error loading template '${templateName}':`, error);
    return `<p>Failed to load email template.</p>`;
  }
}