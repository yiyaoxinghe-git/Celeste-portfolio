import { put } from "@vercel/blob";
 
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
 
  const filename = req.headers["x-file-name"] || `video-${Date.now()}.mp4`;
 
  try {
    const blob = await put(filename, req, {
      access: "public",
      addRandomSuffix: true,
    });
    res.status(200).json({ url: blob.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
 
export const config = {
  api: { bodyParser: false },
};
