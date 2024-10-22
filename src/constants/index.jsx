import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ImmunityBooster from "../assets/ImmunityBooster.png";
import SugarReplacement from "../assets/SugarReplacement.png";
import SaltRevolution from "../assets/SaltRevolution.png";
import fiftyclients from "../assets/fiftyclients.png";
import fiftyfarmers from "../assets/fiftyfarmers.png";
import customersNumbers from "../assets/customersNumbers.png";
import Produce from "../assets/Produce.png";
import Preserve from "../assets/Preserve.png";
import Protect from "../assets/Protect.png";
import Promote from "../assets/Promote.png";
import SiddharthOjha from "../assets/SiddharthOjha.png";
import Jasmine from "../assets/Jasmine.png";
import VidyaOjha from "../assets/VidyaOjha.png";
import maxfit from "../assets/maxfit.jpg";
import pakkalocal from "../assets/pakkalocal.jpg";
import cleanharbors from "../assets/cleanharbors.jpg";
import IMTlogo from "../assets/IMTlogo.png";
import nfabustone from "../assets/nfabustone.png";
import redrhino from "../assets/redrhino.png";
import peopleprocess from "../assets/peopleprocess.jpg";
import MBGlogo from "../assets/MBGlogo.png";
import vijayImage from "../assets/vijay.jpg";
import smitaImage from "../assets/smitaSquare.jpg";
import imagedemo from "../assets/imagedemo.png";
import turmeric from "../assets/turmeric.jpg";
import honey from "../assets/honey.jpg";
import salt from "../assets/salt.jpg";

const categories = [
  {
    name: "Immunity Booster",
    href: ImmunityBooster,
    productID: 1,
    size: "(1 item)",
  },
  {
    name: "Sugar Replacement",
    href: SugarReplacement,
    productID: 3,
    size: "(2 items)",
  },
  {
    name: "Salt Revolution",
    href: SaltRevolution,
    productID: 5,
    size: "(3 items)",
  },
];

const partnerhome = [
  {
    name: "Max Fit",
    href: maxfit,
  },
  {
    name: "Pakka local",
    href: pakkalocal,
  },
  // {
  //   name: "Red Rhino",
  //   href: redrhino,
  // },
  {
    name: "Clean Harbors",
    href: cleanharbors,
  },
  {
    name: "Nfabustone",
    href: nfabustone,
  },
  // {
  // name: "MBG commodities Private Limited",
  // href: MBGlogo,
  // },
  {
    name: "IMT international",
    href: IMTlogo,
  },
  {
    name: "People Process",
    href: peopleprocess,
  },
];

const buttons1 = [
  { name: "Home", link: "/" },
  { name: "Our Stori", link: "/ourstori" },

  { name: "Our Impact", link: "/ourimpact" },
  { name: "Shop", link: "/shop" },
];
const buttons2 = [
  { name: "Connect", link: "/connect" },
  { name: "Blog", link: "/blogs" },
];
const socialMediaLinks = [
  {
    href: "https://www.instagram.com/indie_stori/",
    iconClass: "fa-brands fa-instagram",
  },
  {
    href: "https://www.facebook.com/indiestori",
    iconClass: "fa-brands fa-facebook-f",
  },
  {
    href: "https://www.linkedin.com/company/indie-stori",
    iconClass: "fa-brands fa-linkedin",
  },
  {
    href: "https://www.youtube.com/@indiestori",
    iconClass: "fa-brands fa-youtube",
  },
];
const usersocialMediaLinks = [
  {
    platform: "whatsapp",
    href: "",
    iconClass: "fab fa-whatsapp",
    color: "green-500",
  },
  {
    platform: "facebook",
    href: "",
    iconClass: "fab fa-facebook-f",
    color: "blue-600",
  },
  {
    platform: "linkedin",
    href: "",
    iconClass: "fab fa-linkedin-in",
    color: "blue-800",
  },
];
const footerInformation = [
  { name: "Our Stori", href: "/ourstori" },
  { name: "Connect", href: "/connect" },
  { name: "Terms of Service", href: "/termsofservice" },
  { name: "Refunds Cancellations", href: "/refunds-and-cancellations" },
  { name: "Privacy policy", href: "/privacypolicy" },
  { name: "Shipping Policy", href: "/shippingpolicy" },
];

const footerDiscover = [
  { name: "Our Impact", href: "/ourimpact" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blogs" },
];
const blogs = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Blogs%2FThe%20Sweet%20Benefits%20of%20Raw%20Honey%20Why%20It%20Outshines%20Processed%20Honey.jpg?alt=media&token=ed760fc9-0fc1-485d-ac30-e880669c807b",
    title: "The Sweet Benefits of Raw Honey: Why It Outshines Processed Honey",
    date: "August 07, 2024",
    excerpt:
      "Honey has been cherished for centuries, not just for its delightful sweetness but also for its potential health benefits. However, not all ...",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Blogs%2FUnlocking%20the%20Power%20of%20High%20Curcumin%20Turmeric.jpg?alt=media&token=74aaf38d-ad16-4a37-8583-3b2152141206",
    title: "Unlocking the Power of High Curcumin Turmeric: Why It’s Your Best Choice",
    date: "August 05, 2024",
    excerpt:
      'Turmeric has long been celebrated for its vibrant color and potential health benefits. But not all turmeric is created equal! ...',
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Blogs%2FThe%20Power%20of%20Indigenous%20Farm%20Products.jpg?alt=media&token=8deced44-d238-4d52-a2af-e0ed6149f3e5",
    title: "The Power of Indigenous Farm Products: Why They Outshine Conventional Produce",
    date: "August 05, 2024",
    excerpt:
      'In a world increasingly focused on sustainability and health, indigenous farm products are emerging as champions ...',
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Blogs%2FThe%20Sweet%20Truth%20Forest%20Honey%20vs.%20Farm%20Honey.jpg?alt=media&token=8aa2ee2a-f9a7-4181-973d-1ccd2f498a3d",
    title: "The Sweet Truth: Forest Honey vs. Farm Honey",
    date: "August 05, 2024",
    excerpt:
      'Honey is often touted for its numerous health benefits and natural sweetness, but not all honey is created equal. Among the various types, forest honey and farm honey stand out...',
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Blogs%2FThe%20Timeless%20Art%20of%20Traditional%20Hand%20Grinding%20Why%20It%E2%80%99s%20Better%20Than%20Machine%20Ground%20Food%20Products.jpg?alt=media&token=89f77a1d-1582-42f7-813c-437d222ff9fd",
    title: "The Timeless Art of Traditional Hand Grinding: Why It’s Better Than Machine Ground Food Products",
    date: "August 05, 2024",
    excerpt:
      'In the bustling kitchens of India, the sound of a grinding stone, or "silbatta," evokes memories of home-cooked meals and cherished family traditions. While modern conveniences ...',
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  //   title: "How to Respond When Asked, 'Do you have Any Questions?'",
  //   date: "August 05, 2024",
  //   excerpt:
  //     'Wondering how to respond when asked, "Do you have any questions?" in an interview? Our blog provides smart, engaging questions to impress your...',
  // },
];
const cardsData = [
  {
    bgColor: "pink-400",
    buttonColor: "white",
    textColor: "pink-400",
    title: "Get 14 percent off on Indigenious Turmeric",
    description: "Turmeric as rare as seeing a tiger in the forest!",
    backgroundImage: turmeric,
    Redlink: "/shop/1"
  },
  {
    bgColor: "white",
    buttonColor: "pink-400",
    textColor: "white",
    title: "Get 10 percent off on Indigenious Honey",
    description:
      "Sourced directly from forests around Jim Corbett National Park.",
    backgroundImage: honey,
    Redlink: "/shop/7"
  },
  {
    bgColor: "pink-400",
    buttonColor: "white",
    textColor: "pink-400",
    title: "Get 10 percent off on Indigenious Flavoured Salt",
    description:
      "Salt made by mothers, not by Machines. 0 preservatives, hand ground and prepared for 2 months.",
    backgroundImage: salt,
    Redlink: "/shop/5"
  },
];

const cards = [
  {
    id: 1,
    title: "Heading 1",
    subtitle: "Subtitle 1",
    image: img1,
    href: "#",
  },
  {
    id: 2,
    title: "Heading 2",
    subtitle: "Subtitle 2",
    image: img3,
    href: "#",
  },
  {
    id: 3,
    title: "Heading 3",
    subtitle: "Subtitle 3",
    image: img1,
    href: "#",
  },
  {
    id: 4,
    title: "Heading 4",
    subtitle: "Subtitle 4",
    image: img2,
    href: "#",
  },
];

const ourStoriInfo = [
  {
    img: Produce,
    title: "Produce",
    description:
      "We directly source from the Farmers & help them increase the production.",
  },
  {
    img: Promote,
    title: "Promote",
    description:
      "We promote 100% Authentic Native Products produced by nature & nurtured by humans.",
  },
  {
    img: Preserve,
    title: "Preserve",
    description:
      "We help preserve the Ancient Traditional & Sustainable Techniques.",
  },
  {
    img: Protect,
    title: "Protect",
    description:
      "We help protect the Environment ethically & maintain ecological balance.",
  },
];
const slides = [img1, img1, img1];

const testimonials = [
  {
    image: vijayImage,
    paragraph:
      "Must replace your chaat masala with this! We loved every bit of it. Healthy and tasty.",
    heading1: "Vijay Shekhar Sharma",
    heading2: "Co-founder and CEO - PayTM",
  },
  {
    image: smitaImage,
    paragraph:
      "I have been using the turmeric and it has worked wonders in keeping my health and energy levels intact.",
    heading1: "Smita Pathak",
    heading2: "AVP - Deutsche Bank",
  },
  {
    image: imagedemo,
    paragraph:
      "I recently purchased the Himalayan Forest Honey from Indiestori, and I’m absolutely thrilled with the quality and packaging.",
    heading1: "Amit Mandhani",
    heading2: "",
  },
];
const brandpartners = [
  {
    image: img1,
    paragraph:
      "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
    heading1: "one",
    heading2: "Director",
  },
  {
    image: img2,
    paragraph:
      "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
    heading1: "two",
    heading2: "Managing Director",
  },
  {
    image: img3,
    paragraph:
      "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
    heading1: "three",
    heading2: "Managing Director",
  },
  {
    image: img2,
    paragraph:
      "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
    heading1: "four",
    heading2: "Managing Director",
  },
];
const upcomingData = [
  { image: img1, heading: "Heading One" },
  { image: img2, heading: "Heading Two" },
  { image: img3, heading: "Heading Three" },
  { image: img1, heading: "Heading Four" },
];
const blogData = [
  {
    image: img1,
    category: "Organic Food",
    date: "1/17/2021",
    title: "What Should Know About Detox Water",
    link: "#",
  },
  {
    image: img1,
    category: "Organic Food",
    date: "1/17/2021",
    title: "What Should Know About Detox Water",
    link: "#",
  },
  {
    image: img1,
    category: "Organic Food",
    date: "1/17/2021",
    title: "What Should Know About Detox Water",
    link: "#",
  },
];
const team = [
  {
    img: SiddharthOjha,
    title: "Siddharth Ojha",
    description: "Founder & Director",
  },
  {
    img: Jasmine,
    title: "Jasmine",
    description: "Director",
  },
  {
    img: VidyaOjha,
    title: "Vidya Ojha",
    description: "Director",
  },
];

const partners = [
  {
    img: img1,
    title: "Aikya Pictures",
  },
  {
    img: img1,
    title: "The Dais",
  },
  {
    img: img1,
    title: "Tears of Earth",
  },
];

const products = [
  {
    name: "Orange Juice",
    price: "$10.00-$20.00",
    rating: 5,
    image: img1,
  },
  {
    name: "Apple Juice",
    price: "$10.00-$20.00",
    rating: 2,
    image: img3,
  },
  {
    name: "Orange Juice",
    price: "$10.00-$20.00",
    rating: 4,
    image: img2,
  },
  {
    name: "Orange Juice",
    price: "$10.00-$20.00",
    rating: 5,
    image: img1,
  },

  // Add more products as needed
];
const metricsData = [
  {
    id: 1,
    imageSrc: fiftyclients,
    endValue: 50,
    startValue: 0,
    description: "Satisfied Clients",
    timer: 20,
  },
  {
    id: 2,
    imageSrc: fiftyfarmers,
    endValue: 50,
    startValue: 0,
    description: "Farmers Impacted",
    timer: 20,
  },
  {
    id: 4,
    imageSrc: customersNumbers,
    endValue: 5000,
    startValue: 0,
    description: "Customers",
    timer: 20,
  },
];

export {
  partnerhome,
  img1,
  img2,
  img3,
  blogs,
  usersocialMediaLinks,
  categories,
  buttons1,
  buttons2,
  socialMediaLinks,
  footerInformation,
  cardsData,
  cards,
  blogData,
  slides,
  testimonials,
  brandpartners,
  upcomingData,
  footerDiscover,
  ourStoriInfo,
  team,
  partners,
  products,
  metricsData,
};
