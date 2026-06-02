export interface Testimonial {
  stars: string;
  text: string;
  avatar: string;
  name: string;
  handle: string;
}
export interface VideoTestimonial {
  video: string;
  name: string;
  handle: string;
  avatar: string;
  muted: boolean; // ✅ add muted
}

export const testimonials: Testimonial[] = [
  {
    stars: "/container.svg",
    text: "Working with SwiftNine Limited has been absolutely amazing! They handled our HK setup professionally from start to finish.",
    avatar: "/profile.png",
    name: "João Sapinho",
    handle: "@JoaoSapinho",
  },
  {
    stars: "/container.svg",
    text: "Had a really great experience with SwiftNine! Great service and would recommend to my friends and family.",
    avatar: "/image-2.webp",
    name: "Alika Gestopa",
    handle: "@AlikaGestopa",
  },
  {
    stars: "/container.svg",
    text: "The perfect partner for all e-commerce solutions. Especially when it comes to Hong Kong setups, Swiftnine offers the best and most affordable service in the area. A big thank you to Swiftnine; I can only recommend them to everyone and would gladly use them again!",
    avatar: "/image-10.png",
    name: "Selavine",
    handle: "@Selavine",
  },
  {
    stars: "/container.svg",
    text: "SWIFTNINE is absolutely outstanding! 🌟🌟🌟 Their assistance was incredibly helpful, and I couldn’t be more satisfied. 🤝🙂",
    avatar: "/image-3.webp",
    name: "Monette Huan",
    handle: "@MonetteHuan",
  },
  {
    stars: "/container.svg",
    text: "Topnotch service! Fast response with fast delivery. The support is amazing as well, I had no issues or anything during the process! I highly recommend it!",
    avatar: "/image-4.webp",
    name: "Selim Onbekend",
    handle: "@SelimOnbekend",
  },
  {
    stars: "/container.svg",
    text: "Working with SwiftNine Limited was an absolute pleasure. They handled our Hong Kong company setup professionally from start to finish. Every step — from documentation to communication with local authorities — was smooth, fast, and transparent.",
    avatar: "/image-1.png",
    name: "Davidsantoos YT",
    handle: "@Davidsantoos",
  },
  {
    stars: "/container.svg",
    text: "I had an amazing experience with SwiftNine Limited – their service is absolutely outstanding. They helped me set up a Hong Kong company (HKA), open a bank account, and navigate the whole process with impressive speed and efficiency. Compared to other providers, their pricing is unbeatable – it's honestly a no-brainer.",
    avatar: "/image-5.webp",
    name: "gli mea",
    handle: "@GliMea",
  },
  {
    stars: "/container.svg",
    text: "Absolutely excellent service from start to finish! I was assisted with the setup of both my Hong Kong company and my US LLC, and the entire process was handled with remarkable efficiency and professionalism. A huge thank you to Ali, Zain, and Aleet for their responsiveness, clarity, and constant support.",
    avatar: "/image-7.png",
    name: "Hugo Buil",
    handle: "@Hugo",
  },
  {
    stars: "/container.svg",
    text: "I had a great experience opening my company in Hong Kong with this agency. The process took some time, but throughout it all, they were consistently attentive, transparent, and informative. Every step was clearly explained, and they were always available to answer my questions. I truly felt supported from start to finish.",
    avatar: "/image-9.png",
    name: "David Sousa",
    handle: "@DavidSousa",
  },
  {
    stars: "/container.svg",
    text: "Hey Ali, just wanted to thank you properly for all the support you gave me in setting up my HK company. From start to finish, the process was way smoother than I expected — and that’s 100% thanks to you. You were super clear, always available to answer my questions, and really made everything feel straightforward.",
    avatar: "/profile.png",
    name: "Gonçalo Ferreira",
    handle: "@Goncalo",
  },
];
export const videoTestimonials: VideoTestimonial[] = [
    {
      video: "/videos/Bravo1.mp4",
      name: "Bravo",
      handle: "@Bravo",
      avatar: "/avt2.png",
      muted: true,
    },
    {
      video: "/videos/Eren2.mp4",
      name: "Eren",
      handle: "@Eren",
      avatar: "/avt4.png",
      muted: true,
    },
    {
      video: "/videos/GoncaloFerreira.mp4",
      name: "Goncalo Ferreira",
      handle: "@GoncaloFerreira",
      avatar: "/image-9.png",
      muted: true,
    },
    {
      video: "/videos/Kashif.mp4",
      name: "Kashif",
      handle: "@Kashif",
      avatar: "/avt3.png",
      muted: true,
    },
    {
      video: "/videos/Lloyd.mp4",
      name: "Lloyd",
      handle: "@Lloyd",
      avatar: "/avt5.png",
      muted: true,
    },
    {
      video: "/videos/Marco.mp4",
      name: "Marco",
      handle: "@Marco",
      avatar: "/avt1.png",
      muted: true,
    },
  ];