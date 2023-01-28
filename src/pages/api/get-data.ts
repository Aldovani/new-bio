import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";

const endpoint = async (_: NextApiRequest, response: NextApiResponse) => {
  try {
    const googleSpreadsheet = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID
    );

    await googleSpreadsheet.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SHEET_EMAIL,
      private_key: process.env.GOOGLE_SHEET_KEY.replace(/\\n/g, "\n"),
    });
    await googleSpreadsheet.loadInfo();

    const sheet = googleSpreadsheet.sheetsByIndex[0];
    const row = await sheet.getRows();

    const data = row.map((e) => ({
      name: e.name || "",
      image: e.image || "",
      link: e.link || "",
      label: e.label || "",
      description: e.description || "",
      type: e.type || "",
    }));

    response.status(200).json(data);
  } catch (e) {
    console.log(e);
    response.status(404).json({ error: e });
  }
};
export default endpoint;
