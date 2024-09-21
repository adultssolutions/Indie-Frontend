export default function ProductShare(pageUrl, pageTitle, platform) {
  const message = "Check out this product from Indie-Stori! ";

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      pageUrl
    )}&quote=${encodeURIComponent(message + pageTitle)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      message + pageTitle
    )}&url=${encodeURIComponent(pageUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      pageUrl
    )}&title=${encodeURIComponent(pageTitle)}&summary=${encodeURIComponent(
      message
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message + pageTitle + "%20" + pageUrl
    )}`,
    email: `mailto:?subject=${encodeURIComponent(
      pageTitle
    )}&body=${encodeURIComponent(message + pageUrl)}`,
  };

  switch (platform) {
    case "whatsapp":
      window.open(shareUrls.whatsapp, "_blank");
      break;

    case "facebook":
      window.open(shareUrls.facebook, "_blank");
      break;

    case "linkedin":
      window.open(shareUrls.linkedin, "_blank");
      break;

    case "twitter":
      window.open(shareUrls.twitter, "_blank");
      break;

    default:
      break;
  }
}
