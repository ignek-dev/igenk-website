import { title } from "process";

export const contactContent = {
  title: "Contact Us",
  description:
    "Get in touch with our team for inquiries about Liferay DXP solutions, technical guidance, or collaboration opportunities. We’re here to provide expert advice, tailored support, and clear direction for your digital initiatives.",
};

export const contactLeftSection = {
  title: "Let's Start the Conversation",
  description:
    "At IGNEK, we value meaningful conversations. Whether you’re evaluating a new Liferay project, need clarification on our services, or want guidance from our experts, we’re ready to assist with clarity and confidence.",
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
  title: "Our Offices Locations in India and United Arab Emirates",
  // title2: "and United Arab Emirates",

  description:
    "We operate from India and the United Arab Emirates, enabling responsive ",
    description2: "regional engagement, dedicated support, and seamless collaboration for clients across the globe.",
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
