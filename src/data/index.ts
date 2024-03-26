import { Language, Settings, Shop2, SmartToy } from "@mui/icons-material";
import { ILink, IProgress, IService } from "../types";

// Navbar links
export const links: ILink[] = [
  {
    text: "Asosiy sahifa",
    link: "#",
  },
  {
    text: "Biz haqimizda",
    link: "#about",
  },
  {
    text: "Xizmatlar",
    link: "#services",
  },
  {
    text: "Kontakt",
    link: "#contact",
  },
  {
    text: "Vakansiya",
    link: "#vacancy",
  },
];

// Services data
export const serviceData: IService[] = [
  {
    title: "Web site",
    desc: "Turli yo‘nalishdagi biznes saytlar chizamiz",
    icon: Language,
  },
  {
    title: "CRM",
    desc: "Biznesdagi asosiy muammo uni tizimlashtirmaslik. Bunga asosiy yechim esa CRM ",
    icon: Settings,
  },
  {
    title: "Online do‘kon",
    desc: "Online do‘kon orqali pul tikmasdan biznes boshlashingiz mumkin",
    icon: Shop2,
  },
  {
    title: "Telegram bot",
    desc: "Telegram bot orqali sizga keladigan xabarlarni tartiblashtirishingiz mumkin",
    icon: SmartToy,
  },
];

  // Progress data
export  const progressData: IProgress[] = [
     {
       number: 1,
       title: "Analiz",
       desc: "Ilk bosqichda siz yuritayotgan korxona yoki firmani chuqur o‘rganamiz va to‘liq tahlil qilamiz. Tahlil natijasida muammo va kamchiliklar yuzaga keladi",
     },
     {
       number: 2,
       title: "Muammoga yechim berish",
       desc: "Yuzaga kelgan muammoga vebsayt yoki zamonaviy dasturlar orqali yechim beramiz",
     },
     {
       number: 3,
       title: "Taqdimot",
       desc: "Yechim natijalarini korxona yoki firma rahbariga taqdim qilamiz va og‘zaki kelishuv tuzamiz",
     },
     {
       number: 4,
       title: "Dasturlash",
       desc: "Tuzilgan kelishuvga ko‘ra xizmat narxi va loyihani yakunlash uchun muddat belgilanadi ",
     },
     {
       number: 5,
       title: "Yakunlash",
       desc: "Muddat tugagunga qadar loyiha uchun tuzilgan dastur to‘liq foydalanishga topshiriladi",
     },
   ];
 