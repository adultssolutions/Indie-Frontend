export default function ProductShare(pageUrl, pageTitle, platform) {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`,
    email: `mailto:?subject=${pageTitle}&body=${pageUrl}`,
  };

  switch (platform) {
    case "whatsapp":
      window.open(shareUrls.whatsapp, "_blank");
      break;

    case "facebook":
      window.open(shareUrls.facebook, "_blank");
      break;

    case "linkedin":
      window.open(shareUrls.whatsapp, "_blank");
      break;

    default:
      break;
  }
}
