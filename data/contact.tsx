import { title } from "process";

export const contactContent = {
  title: "Contact Us",
  description:
    "Get in touch for inquiries about our properties. We're here to offer expert advice, personalized solutions, and exceptional service to meet all your needs effectively.",
};

export const contactLeftSection = {
  title: "Let's Start the Conversation",
  description:
    "We at IGNEK appreciate your questions, comments, and teamwork. Whether you have enquiries about our projects or would like to discuss our services.",
  infoBlocks: [
    {
      id: 1,
      label: "Email Address",
      value: "sales@ignek.com",
      type: "email",
      href: "mailto:sales@ignek.com",
    },
    {
      id: 2,
      label: "Phone Number",
      value: "+91 63515 76580",
      type: "phone",
      href: "tel:+916351576580",
    },
  ],
  title2: "Follow Us On",
};
export const officeLocationsSection = {
  title: "Our Offices Locations in India",
  title2: "and United Arab Emirates",

  description:
    "We have offices in India and the United Arab Emirates, providing ",
    description2: "seamless regional support and collaboration for our global clients.",
};

export const officeLocationsData = [
  {
    id: 1,
    city: "Ahmedabad, India",
    image: "/images/ahmedabad.png",
    alt: "Ahmedabad Office Location",

    address: [
      "E 910- 912, Ganesh Glory 11, Jagatpur Road, SG Highway,",
      "Ahmedabad, Gujarat – 382470",
    ],

    contact: {
      emailLabel: "Email Address",
      email: "sales@ignek.com",
      emailHref: "mailto:sales@ignek.com",

      phoneLabel: "Phone Number",
      phone: "(+91) 63515 76580",
      phoneHref: "tel:+916351576580",
    },

    showDivider: true,
  },

  {
    id: 2,
    city: "United Arab Emirates",
    image: "/images/uae.png",
    alt: "United Arab Emirates Office Location",

    address: [
      "Office Number: 09-106, Arabian Sky Business center ,",
      "Umm Hurrair 2 Dubai UAE",
    ],

    contact: {
      emailLabel: "Email Address",
      email: "connect@ignek.com",
      emailHref: "mailto:connect@ignek.com",

      phoneLabel: "Phone Number",
      phone: "+97 154 219 8252",
      phoneHref: "tel:+971542198252",
    },

    showDivider: false,
  },
];
