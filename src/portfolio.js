/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/partyLoader"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vadim Yakshigulov",
  title: "Привет! Я Вадим",
  subTitles: [
    emoji(
      "Программный инженер, увлеченный разработкой серверных и инфраструктурных приложений 🚀"
    ),
    emoji(
      "Обожаю настолки, а особенно люблю проводить вечера за партией в DnD с друзьями 💀"
    )
  ],
  // TODO: resume link
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  contactButtonText: "Связаться",
  seeResumeButtonText: "Посмотреть резюме"
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/toadharvard",
  gmail: "vadim.iakshigulov@gmail.com",
  telegram: "https://t.me/toadharvard",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Что могу?",
  subTitle: "",
  skills: [
    emoji(
      "✨ Применяю лучшие практики написания кода, паттерны, когда это оправдано, DRY, KISS и другие акронимы"
    ),
    emoji(
      `✨ Для меня важен конечный продукт, пользователи, которые будут пользоваться приложением, и просто "откуда бизнес деньги берет"`
    ),
    emoji(
      "✨ И, самое главное, я умею превращать потребности product owner'а в функционирующий и работающий сервис"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      skillIconClassName: "si si-python"
    },
    {
      skillName: "FastAPI",
      skillIconClassName: "si si-fastapi"
    },
    {
      skillName: "Django",
      skillIconClassName: "si si-django"
    },

    {
      skillName: "Docker",
      skillIconClassName: "si si-docker"
    },
    {
      skillName: "OCaml",
      skillIconClassName: "si si-ocaml"
    },
    {
      skillName: "C",
      skillIconClassName: "si si-c"
    },
    {
      skillName: "Kotlin",
      skillIconClassName: "si si-kotlin"
    },
    {
      skillName: "Sass",
      skillIconClassName: "si si-sass"
    },
    {
      skillName: "ReactJS",
      skillIconClassName: "si si-react"
    },
    {
      skillName: "NodeJS",
      skillIconClassName: "si si-nodedotjs"
    },
    {
      skillName: "RabbitMQ",
      skillIconClassName: "si si-rabbitmq"
    },
    {
      skillName: "Celery",
      skillIconClassName: "si si-celery"
    },
    {
      skillName: "Redis",
      skillIconClassName: "si si-redis"
    },
    {
      skillName: "PostgreSQL",
      skillIconClassName: "si si-postgresql"
    },
    {
      skillName: "Neo4j",
      skillIconClassName: "si si-neo4j"
    },
    {
      skillName: "GitHub Actions",
      skillIconClassName: "si si-githubactions"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  title: "Образование 🎓",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Санкт-Петербургский государственный университет",
      logo: require("./assets/images/spbu.png"),
      subHeader: "Бакалавриат Программной Инженерии",
      duration: "Сентябрь 2021 - Июнь 2026",
      desc: "На текущий момент прошел курсы по:",
      descBullets: [
        "Основам программирования",
        "Веб программированию",
        "Машинному обучению",
        "Операционным системам",
        "Архитектуре ЭВМ",
        "Функциональному программированию"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  title: "Опыт работы 🤖",
  experience: [
    {
      role: "Software Engineer",
      company: "Desbordante",
      companylogo: require("./assets/images/desbordanteLogo.png"),
      date: "Сентябрь 2023 – Настоящее время",
      desc: `Desbordante — открытая, некомерческая, неформальная организация, которая создает под своим крылом
            самый быстрый data profiler`,
      descBullets: [
        <>
          Реализовал сборку нативного (C++) проекта в PIP.{" "}
          <a href="https://pypi.org/project/desbordante">Доступно в PyPI</a>
        </>,
        "Обновил CI/CD основного репозитория для проверки собранного PIP пакета",
        `Спроектировал обновленный backend на Python. Это позволит
        реиспользовать PIP пакет и упростит
        понимание (за счет использования только 1 языка) проекта и
        повысит надержность (из-за уменьшения количества сервисов)`
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Yandex Cloud",
      companylogo: require("./assets/images/yandexCloudLogo.png"),
      date: "Ноябрь 2022 – Сентябрь 2023",
      desc: `DevTools - подразделение Yandex Cloud, занимающееся разработкой инструментов для разработчиков,
             включая системы менеджмента ролей и доступов, покрытия кода и кодонавигации в монорепозитории Яндекса`,
      descBullets: [
        "Добавил метрики полноты и актуальности для задачи пересчета покрытия кода в монорепозитории",
        "Мигрировал эндпоинты связанные с отдачей ролей с tastypie на Django Rest Framework",
        "Уменьшил количество запросов к базе данных в 3 раза, а время отдачи ответа от сервера в 2 раза"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title: "Open Source 💻",
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  githubLinkText: "Больше проектов",
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Достижения 🏆 "),
  subtitle: "Сертификаты и просто мои достижения",

  achievementsCards: [
    {
      title: "Школа Бэкенд Разработки",
      subtitles: [
        `За 3 месяца обучения изучил основы разработки сервисов, включая: проектирование REST API и баз данных, нагрузочное тестирование, основы DevOps, деплоя, CI/CD, а также асинхронного программирования`,
        `В последний месяц обучения реализовал в команде из пяти человек сервис для интеграции Яндекс.Маршрутизации и Яндекс.Магистралей. А также настроил CI/CD в Gitlab и Яндекс.Облаке с использованием Serverless контейнеров`
      ],
      image: require("./assets/images/yandexSHBLogo.png"),
      imageAlt: "Yandex shb logo",
      footerLink: [
        {
          name: "Сертификат",
          url: "https://disk.yandex.ru/i/I65sUuqyY8ToRQ"
        }
      ]
    },
    {
      title: "Диагностика технических навыков",
      subtitles: [
        `Получил "Продвинутый" уровень по результатам диагностики. Что равносильно прохождению алгоритмической секции с отличием внутри компании.`
      ],
      image: require("./assets/images/yandexLogo.png"),
      imageAlt: "Yandex logo",
      footerLink: [
        {
          name: "Сертификат",
          url: "https://yandex.ru/jobs/skill-diagnostic/332aceaf-bf69-4f93-b533-c3fe9b67bbef"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Напиши мне! ☎️"),
  subtitle: "Хочешь обудить что-то крутое или нанять?",
  email_address: "vadim.iakshigulov@gmail.com"
};

const headerButtonNames = {
  skills: "Умения",
  experience: "Опыт",
  opensource: "Open Source",
  achievements: "Достижения",
  contact: "Связаться"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  contactInfo,
  headerButtonNames
};
