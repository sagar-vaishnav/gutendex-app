export const getBookUrl = (formats: Record<string, string>) => {
  const html = formats["text/html"];
  const pdf = formats["application/pdf"];
  const txt = formats["text/plain"];

  
  //FORCE TEST for checking the alert when no viewable version is available and also update "const" to "let" for html
  //html = html + ".zip"; // uncomment this line to simulate a non-viewable format (e.g., a ZIP file) for testing purposes
  
  if (html && !html.endsWith(".zip")) return html;
  if (pdf && !pdf.endsWith(".zip")) return pdf;
  if (txt && !txt.endsWith(".zip")) return txt;

  return null;
};;
