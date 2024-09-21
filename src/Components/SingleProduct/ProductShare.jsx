export default function ProductShare(pageUrl, pageTitle, platform) {
  const message = "Check out this product from Indie-Stori! ";

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${(
      pageUrl
    )}&quote=${(message + pageTitle)}`,
    twitter: `https://twitter.com/intent/tweet?text=${(
      message + pageTitle
    )}&url=${(pageUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${(
      pageUrl
    )}&title=${(pageTitle)}&summary=${(
      message
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${(
      message + pageUrl
    )}`,
    email: `mailto:?subject=${(
      pageTitle
    )}&body=${(message + pageUrl)}`,
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
