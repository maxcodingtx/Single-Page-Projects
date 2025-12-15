import ky from "https://cdn.jsdelivr.net/npm/ky@1.14.1/distribution/index.min.js";

// document uses window to make functions globally accessible
// avoids import/export issues in this setup

window.fetchTextViaKy = async function (url) {
  try {
    const response = await ky.get(url);
    const textData = await response.text();
    return textData;
  } catch (error) {
    console.error("Error fetching the text file:", error);
  }
};

window.fetchXmlViaKy = async function (url) {
  try {
    const response = await ky.get(url, {
      headers: {
        Accept: "application/xml, */*",
      },
    });

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    return xmlDoc;
  } catch (error) {
    console.error("Error fetching the XML file:", error);
  }
};
