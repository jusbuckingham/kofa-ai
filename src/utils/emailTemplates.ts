import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'

export function loadTemplate(templateName: string, data: Record<string, any>, emailId: string) {
  const trackingPixel = `<img src="https://kofa.ai/api/email/track?emailId=${emailId}" width="1" height="1" />`;

  // Replace all links with a tracking URL
  const emailContent = template(data).replace(
    /href="(https?:\/\/[^"]+)"/g,
    (match, url) => `href="https://kofa.ai/api/email/click?emailId=${emailId}&url=${encodeURIComponent(url)}"`
  );

  return emailContent + trackingPixel;
}
