/pages/api/subscribe.js

export default async function handler(req, res) {
  const email = req.body;

  if (!email || !email.length) {
    res.status(200).json({ error: "Please enter a email address" });
  }
}