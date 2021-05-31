// contacts
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const defaultMovies = [
  { id: generateId(), saved: true },
  { id: generateId(), saved: false },
  { id: generateId(), saved: false },
  { id: generateId(), saved: false },
  { id: generateId(), saved: true },
  { id: generateId(), saved: true },
  { id: generateId(), saved: false },
  { id: generateId(), saved: false },
];

export const headerMenu = [
  {
    id: generateId(),
    name: "Фильмы",
    link: "/movies",
  },
  {
    id: generateId(),
    name: "Сохранённые фильмы",
    link: "/saved-movies",
  },
];

export const promoNav = [
  {
    id: generateId(),
    link: "#about-project",
    text: "О проекте",
  },
  {
    id: generateId(),
    link: "#techs",
    text: "Технологии",
  },
  {
    id: generateId(),
    link: "#about-me",
    text: "Студент",
  },
];
export const techs = [
  { id: generateId(), name: "HTML" },
  { id: generateId(), name: "CSS" },
  { id: generateId(), name: "JS" },
  { id: generateId(), name: "React" },
  { id: generateId(), name: "Git" },
  { id: generateId(), name: "Express.js" },
  { id: generateId(), name: "mongoDB" },
];
export const portfolio = [
  {
    id: generateId(),
    name: "Статичный сайт",
    link: "https://lod55.github.io/how-to-learn/" || "/",
  },
  {
    id: generateId(),
    name: "Адаптивный сайт",
    link: "https://lod55.github.io/russian-travel/" || "/",
  },
  {
    id: generateId(),
    name: "Одностраничное приложение",
    link: "https://app-mesto.lod55.nomoredomains.club" || "/",
  },
];
export const socials = [
  {
    id: generateId(),
    name: "Яндекс.Практикум",
    link: "https://praktikum.yandex.ru",
  },
  {
    id: generateId(),
    name: "Github",
    link: "https://github.com/Lod55",
  },
  {
    id: generateId(),
    name: "Telegram",
    link: "https://t.me/lodkin55",
  },
];
