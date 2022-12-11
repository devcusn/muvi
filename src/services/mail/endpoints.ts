import emailjs from "@emailjs/browser";

export const sendMail = async (data: any) => {
  return await emailjs.sendForm(
    "service_ivnnc2r",
    "template_stj1zyj",
    data,
    "x3NuYWYNzU3BSXVeX"
  );
};
