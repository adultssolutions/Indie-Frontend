import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault() {
  return (
    <>
  {/* First carousel: visible only on tablets (md) and larger */}
  <div className="hidden md:block">
    <Carousel
      autoplay="true"
      autoplayDelay="4000"
      loop="true"
      className="pb-12 lg:-mt-28 mt-0"
    >
      <a href="/shop/5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Desktop%20Banners%2Fbanner1.jpeg?alt=media&token=0ebf57df-7ff3-455a-9cba-e2b3fb2f5c18"
          alt="image 1"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="/shop/1">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Desktop%20Banners%2Fbannersingle1.jpeg?alt=media&token=ede78205-dc22-4d6f-9942-df2ffd9834c7"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="#">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Desktop%20Banners%2Fcrazytrip.jpeg?alt=media&token=d7ef6bdf-7f11-4894-bfd5-f409c959d8a1"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="#">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Desktop%20Banners%2Fideas.jpeg?alt=media&token=3c8358a7-d238-458b-a1ea-35c95c4ba5e9"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="/shop/7">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/Desktop%20Banners%2Frawhoney.jpeg?alt=media&token=e3c32ae4-39de-4040-90a1-4b9efcf71226"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
    </Carousel>
  </div>

  {/* Second carousel: visible only on mobile screens */}
  <div className="block md:hidden">
    <Carousel
      autoplay="true"
      autoplayDelay="4000"
      loop="true"
      className="pb-12 lg:-mt-28 mt-0"
    >
      <a href="/shop/5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/3.jpg?alt=media&token=58a7a704-4620-4839-8e5a-94772a666eaa"
          alt="image 1"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="/shop/1">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/5.jpg?alt=media&token=d967a334-5a92-4780-bcc6-5ff4c7961c70"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="#">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/4.jpg?alt=media&token=06459e78-0d0a-48bd-87ab-3770f28acf5a"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="#">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/2.jpg?alt=media&token=75c4f623-a1e7-4547-98f1-b13a1f01c720"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
      <a href="/shop/7">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indie-admin.appspot.com/o/1.jpg?alt=media&token=4fa5828f-60f7-4a85-8e8c-cb9f477f29fb"
          alt="image 2"
          className="w-full object-fit h-max"
        />
      </a>
    </Carousel>
  </div>
</>

  );
}
