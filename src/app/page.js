"use client";

import Image from "next/image";

const CVElement = ({
  time,
  companyName,
  position,
  companyDescription,
  results,
}) => (
  <div>
    <li>
      ({time}) <b>{companyName}</b> | {position}
    </li>
    {companyDescription}
    <p>
      <b>Результаты:</b>
    </p>
    {results}
  </div>
);

export default function Home() {
  const changeTheme = () => {
    const bodyElement = document.querySelector("body");
    const currentTheme = bodyElement.getAttribute("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    bodyElement.setAttribute("theme", newTheme);
  };

  return (
    <main>
      <span>
        <h1>Привет!</h1>
        <button className="theme-button" onClick={changeTheme}>
          Переключить тему
        </button>
      </span>

      <Image
        src="/img/nudes.jpg"
        alt="Actually is my profile picture"
        width="300"
        height="300"
        className="avatar"
      />

      <h2>Немного обо мне</h2>
      <p>
        Меня зовут Вадим и я программный инженер. Обожаю настольные и
        настольно-ролевые игры.
      </p>

      <p>
        Самым веселым персонажем, которого я когда-либо создал был Локсадон
        божественная душа "Богов". Этот среднего размера слон отлично сочетался
        с двумя монахами-сопартицами. Под его бафами они могли пересекать за 6
        секунд сотни метров. А любая даже незначительная рана была вылечена. Да
        славься Хельм!
      </p>
      <p>
        Сейчас мне 20, но я уже успел поработать с огромным количеством
        технологий. Вот далеко не полный список языков в экосистеме которых
        приходилось писать:
      </p>
      <ul>
        <li>Python</li>
        <li>C</li>
        <li>Kotlin</li>
        <li>OCaml</li>
        <li>JavaScript</li>
        <li>Go</li>
      </ul>

      <h2>Про технологии</h2>

      <p>
        В основном мне интересна backend разработка. Поэтому особенно хорошо
        знаком с:
      </p>
      <ul>
        <li>Фремворками: FastApi, Django (DRF)</li>
        <li>СУБД: PostgresSQL, Redis, Neo4j</li>
        <li>Очередями: RabbitMQ, Celery</li>
        <li>И прочими библиотеками и фреймворками для комфортной разработки</li>
      </ul>
      <p>И немного c DevOps во славу T-Shape:</p>
      <ul>
        <li>CI: github actions, gitlab-ci</li>
        <li>Контейнеризация: Docker, docker-compose</li>
        <li>VCS: git, arc (yandex)</li>
      </ul>
      <p>
        Применяю лучшие практики написания кода, паттерны, когда это оправдано,
        DRY, KISS и другие акронимы
      </p>
      <p>
        Понимаю и уважаю: agile, kanban, waterfall, все то, что связано с
        менеджментом и методологиями.
      </p>

      <h2>Опыт</h2>

      <p>Я работал над:</p>
      <ol>
        <CVElement
          time={"2023-сейчас"}
          companyName={"Desbordante"}
          position={"Разработчик"}
          companyDescription={
            <div>
              <p>
                Desbordante -- открытая некомерческая неформальная организация
                создающая под своим крылом самый быстрый data profiler.
              </p>
              <p>
                Он делится на несколько репозиториев: core (основные алгоритмы
                на c++), web (next, node.js, graphql, python, c++)
              </p>
            </div>
          }
          results={
            <ul>
              <li>
                Реализовал сборку нативного (c++) проекта в PIP. Доступно в PyPI
              </li>
              <a href="#TODO">[ Ссылка на PyPI ]</a>
              <li>
                Обновил ci/cd core, теперь тестирование стало более
                всеобъемлющим
              </li>
              <li>
                Спроектировал обновленный backend на Python. Это позволило
                реиспользовать ранее реализованный PIP пакет, упростило
                понимание (за счет использования только 1 языка) проекта и
                повысило надержность (из-за уменьшения количества сервисов)
              </li>
              <a href="https://github.com/toadharvard/desbordante-server">
                [ Ссылка на репозиторий ]
              </a>
            </ul>
          }
        />
        <CVElement
          time={"2022-2023"}
          companyName={"Yandex Cloud"}
          position={"Стажёр разработчик "}
          companyDescription={
            <p>
              Я работал в двух командах: build ecosystem и idm. Build ecosystem
              специализируется на кодонавигации и подсчете покрытия в
              репозитории Яндекса. А idm отвечает за менеджмент ролей и
              доступов.
            </p>
          }
          results={
            <ul>
              <li>Много всякого. Жаль я устал писать</li>
            </ul>
          }
        />
      </ol>
    </main>
  );
}
