export default async function preview(req, res) {
  const { secret, id, slug } = req.query;

  // Check the secret and next parameters
  // This secret should only be known by this API route
  if (
    !process.env.WORDPRESS_PREVIEW_SECRET ||
    secret !== process.env.WORDPRESS_PREVIEW_SECRET
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({});

  res.writeHead(307, { Location: `/portfolio` });
  res.end();
}
