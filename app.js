// app.ts
class DataCache {
  cache = new Map;
  timestamps = new Map;
  ttl = 3600000;
  set(key, value) {
    this.cache.set(key, value);
    this.timestamps.set(key, Date.now());
  }
  get(key) {
    const timestamp = this.timestamps.get(key);
    if (!timestamp)
      return null;
    if (Date.now() - timestamp > this.ttl) {
      this.cache.delete(key);
      this.timestamps.delete(key);
      return null;
    }
    return this.cache.get(key) || null;
  }
  clear() {
    this.cache.clear();
    this.timestamps.clear();
  }
}
var dataCache = new DataCache;
var newsData = [
  {
    id: 1,
    title: "Новое освещение на ул. Железнодорожной",
    category: "ЖКХ",
    description: "Завершена установка энергоэффективных светильников...",
    fullText: "В Чапаевске завершилась масштабная программа «Светлый город». В рамках программы было установлено современное энергоэффективное освещение на улице Железнодорожной, что значительно повысило безопасность и комфорт для жителей. Работы включали замену старых фонарей на светодиодные, которые потребляют меньше электроэнергии и обеспечивают более яркое и равномерное освещение. Местные жители уже успели оценить позитивные изменения, отметив улучшение видимости в темное время суток и снижение уровня преступности в районе. Планируется продолжить программу в других районах города.",
    image: "osveshchenie.webp",
    date: "6 апреля 2026",
    isImportant: true,
    views: 2405
  },
  {
    id: 2,
    title: "График отключения горячей воды",
    category: "ЖКХ",
    description: "С 15 по 30 апреля будут проходить плановые работы...",
    fullText: "Администрация городского округа Чапаевск опубликовала график планового отключения горячей воды в связи с проведением ежегодных профилактических и ремонтных работ на тепловых сетях. Отключение затронет различные районы города в период с 15 по 30 апреля. Жителям рекомендуется ознакомиться с точным графиком по адресам на официальном сайте администрации, чтобы заранее подготовиться. Эти меры необходимы для обеспечения бесперебойной подачи горячей воды в осенне-зимний период и предотвращения аварийных ситуаций. Просим отнестись с пониманием к временным неудобствам.",
    image: "voda.webp",
    date: "5 апреля 2026",
    views: 1890
  },
  {
    id: 3,
    title: "Изменение маршрута автобуса №2",
    category: "Транспорт",
    description: "В связи с ремонтом дороги маршрут будет двигаться по улице Железнодорожной...",
    fullText: "Уважаемые жители Чапаевска! В связи с проведением капитального ремонта дорожного покрытия на центральных улицах города, с 10 апреля 2026 года временно изменяется маршрут движения городского автобуса №2. Теперь автобус будет следовать по улице Железнодорожной, минуя некоторые остановки на обычном маршруте. Просим заранее планировать свои поездки и пользоваться альтернативными видами транспорта или другими маршрутами. Подробная схема нового маршрута и список временных остановок доступны на информационных стендах и на сайте транспортной компании.",
    image: "avtobus.webp",
    date: "4 апреля 2026",
    views: 3012
  },
  {
    id: 4,
    title: "Прививочная кампания стартует в поликлиниках",
    category: "Медицина",
    description: "Жители могут сделать прививку от гриппа в любой поликлинике города...",
    fullText: "С 1 апреля в Чапаевске стартует ежегодная прививочная кампания против гриппа и ОРВИ. Все желающие жители города могут бесплатно сделать прививку в любой городской поликлинике. Для удобства граждан организованы дополнительные пункты вакцинации, а также продлен режим работы некоторых кабинетов. Вакцинация является наиболее эффективным способом защиты от сезонных заболеваний и помогает избежать серьезных осложнений. При себе необходимо иметь паспорт и полис ОМС. Перед прививкой рекомендуется консультация врача.",
    image: "privivka.webp",
    date: "3 апреля 2026",
    views: 1560
  },
  {
    id: 5,
    title: "Концерт ко Дню космонавтики",
    category: "Образование",
    description: "В ДК им.Чапаева состоится праздничный концерт...",
    fullText: "12 апреля 2026 года в 18:00 во Дворце культуры имени В.И. Чапаева состоится торжественный праздничный концерт, посвященный Дню космонавтики. В программе вечера выступления творческих коллективов города, песни и танцы на космическую тематику, а также уникальные видеоматериалы о достижениях российской космонавтики. Приглашаются все желающие отметить этот значимый для страны праздник. Вход свободный. Мероприятие проводится при поддержке Администрации городского округа Чапаевск и приурочено к 65-летию первого полета человека в космос.",
    image: "koncert.webp",
    date: "12 апреля 2026",
    views: 4230
  },
  {
    id: 6,
    title: "Пройдите образовательный тест",
    category: "Образование",
    description: "Пройдите всероссийский тест на знание русского языка...",
    fullText: "Управление образования администрации городского округа Чапаевск приглашает всех жителей города принять участие во всероссийском образовательном тесте на знание русского языка. Мероприятие пройдет в формате онлайн с 15 по 20 апреля 2026 года. Тест направлен на повышение уровня грамотности населения и популяризацию русского языка. Участие бесплатное, по итогам каждый участник получит сертификат. Ссылка на тест будет опубликована на официальном сайте администрации и в социальных сетях города.",
    image: "test.webp",
    date: "15 апреля 2026",
    views: 2067
  }
];
var eventsData = [
  { id: 1, title: "Фильм 'БОРАТ'", location: "'СинемаЛайк' тц.Панорама", date: "9 апреля, 20:00", price: "450 руб" },
  { id: 2, title: "Выставка посвященная дню космонавтики", location: "ДШИ №2 'Гармония'", date: "8-20 апреля", price: "Бесплатно" },
  { id: 3, title: "Мастер-класс по гончарству", location: "Арт-студия 'Керамика'", date: "13 апреля, 14:00", price: "500 руб" }
];
var businessesData = [
  { id: 1, name: "СТО 'Лидер'", category: "auto", description: "Ремонт любой сложности. Диагностика бесплатно.", rating: 4.8, phone: "89645217667", address: "ул. Ленина, 45" },
  { id: 2, name: "СТО 'Мастер-96'", category: "auto", description: "Шиномонтаж, балансировка, замена масла.", rating: 4.6, phone: "89654190643", address: "ул. Мира, 12" },
  { id: 3, name: "Кафе 'Аура'", category: "food", description: "Домашняя кухня, бизнес-ланчи от 150 руб.", rating: 4.9, phone: "89345132855", address: "ул. Комсомольская, 8" },
  { id: 4, name: "Пиццерия 'Венеция'", category: "food", description: "Настоящая итальянская пицца. Доставка 30 минут.", rating: 4.7, phone: "89273564845", address: "пр. Героев, 23" },
  { id: 5, name: "Ноготки", category: "beauty", description: "Маникюр,педикюр. Все виды дизайна по низким ценам", rating: 3.7, phone: "89283746145", address: "ул.Ленина, д.77" },
  { id: 6, name: "Дива", category: "beauty", description: "Все виды стрижек с использванием новейших технологий", rating: 5, phone: "89578234567", address: "ул.Железнодорожная, д.60а" },
  { id: 7, name: "HappyGirl", category: "beauty", description: "Все виды косметических услуг. От маникюра и стрижки до ботокса и филлеров", rating: 4.3, phone: "89378107245", address: "ул.Щорса, д.108" }
];
var ticketsData = [];
var pollData = [
  {
    id: 1,
    question: "Какое улучшение города вам нужнее всего?",
    options: ["Дороги", "Благоустройство", "Общественный транспорт", "Спортивные объекты"],
    votes: [45, 32, 28, 15]
  }
];

class DataManager {
  static getNewsByCategory(category) {
    if (category === "all")
      return newsData;
    return newsData.filter((news) => news.category === category);
  }
  static getBusinessesByCategory(category) {
    if (category === "all")
      return businessesData;
    return businessesData.filter((b) => b.category === category);
  }
  static searchNews(query) {
    const lowerQuery = query.toLowerCase();
    return newsData.filter((news) => news.title.toLowerCase().includes(lowerQuery) || news.description.toLowerCase().includes(lowerQuery));
  }
  static getTopNews(limit = 3) {
    return [...newsData].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, limit);
  }
}
function renderNews(newsToRender) {
  const container = document.getElementById("newsCarousel");
  if (!container)
    return;
  container.innerHTML = "";
  if (!newsToRender || newsToRender.length === 0) {
    container.innerHTML = '<p class="empty-message">В этой категории нет новостей.</p>';
    return;
  }
  const sortedNews = [...newsToRender].sort((a, b) => {
    if (a.isImportant && !b.isImportant)
      return -1;
    if (!a.isImportant && b.isImportant)
      return 1;
    return (b.id || 0) - (a.id || 0);
  });
  const fragment = document.createDocumentFragment();
  sortedNews.forEach((news) => {
    const newsCard = document.createElement("div");
    newsCard.className = `news-card ${news.isImportant ? "important-card" : ""}`;
    newsCard.innerHTML = `
            <div class="news-date">${news.date}</div>
            <div class="news-category-tag">${news.category}</div>
            <h4 class="news-title">${news.title}</h4>
            <p class="news-desc">${news.description}</p>
            <div class="news-meta">
                <span class="news-views">\uD83D\uDC41 ${news.views || 0}</span>
            </div>
        `;
    newsCard.onclick = () => {
      openNewsModal({
        image: news.image,
        category: news.category,
        title: news.title,
        fullText: news.fullText,
        description: news.description
      });
    };
    fragment.appendChild(newsCard);
  });
  container.appendChild(fragment);
}
function renderEvents() {
  const container = document.getElementById("events-list");
  if (!container)
    return;
  if (!eventsData || eventsData.length === 0) {
    container.innerHTML = '<p class="empty-message">Нет событий</p>';
    return;
  }
  container.innerHTML = "";
  eventsData.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.innerHTML = `
            <div class="event-date">${event.date}</div>
            <h4>${event.title}</h4>
            <p>${event.location}</p>
            ${event.price ? `<p class="event-price">${event.price}</p>` : ""}
        `;
    container.appendChild(eventCard);
  });
}
function renderBusiness(category = "all") {
  const grid = document.getElementById("business-grid");
  if (!grid)
    return;
  const filtered = category === "all" ? businessesData : businessesData.filter((b) => b.category === category);
  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty-message">Нет организаций в этой категории</p>';
    return;
  }
  filtered.forEach((biz) => {
    const card = document.createElement("div");
    card.className = "biz-card";
    card.innerHTML = `
            <h4>${biz.name}</h4>
            <p>${biz.description}</p>
            <div class="biz-meta">
                <span class="rating">⭐️ ${biz.rating}</span>
                
            </div>
        `;
    grid.appendChild(card);
  });
}
function renderTickets() {
  const container = document.getElementById("tickets-list");
  if (!container)
    return;
  if (!ticketsData || ticketsData.length === 0) {
    container.innerHTML = '<p class="empty-message">Нет обращений</p>';
    return;
  }
  container.innerHTML = "";
  ticketsData.forEach((ticket) => {
    const ticketEl = document.createElement("div");
    ticketEl.className = `ticket-item status-${ticket.status}`;
    ticketEl.innerHTML = `
            <strong>${ticket.title}</strong>
            <p>${ticket.description}</p>
            <div class="ticket-footer">
                <span class="tag-cat">${ticket.category}</span>
                <span class="ticket-date">${ticket.date}</span>
            </div>
        `;
    container.appendChild(ticketEl);
  });
}
function renderPoll() {
  const pollContainer = document.getElementById("poll-widget");
  if (!pollContainer)
    return;
  if (!pollData || pollData.length === 0)
    return;
  const poll = pollData[0];
  const totalVotes = poll.votes.reduce((a, b) => a + b, 0);
  let html = `
        <div style="background: 
      #e5e7f014; backdrop-filter: blur(18px); border: 1px solid rgba(217, 217, 218, 0.64); border-radius: 16px; padding: 20px; margin-bottom: 20px;">
            <h3 style="margin-bottom: 15px; color: #161d45;">${poll.question}</h3>
            <div id="poll-options">
    `;
  poll.options.forEach((option, index) => {
    const percentage = totalVotes > 0 ? Math.round(poll.votes[index] / totalVotes * 100) : 0;
    html += `
            <div style="margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <label style="color: #161d45; font-size: 0.9rem;">${option}</label>
                    <span style="color: #161d45; font-weight: 600;">${percentage}%</span>
                </div>
                <div style="width: 100%; height: 8px; background: rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden;">
                    <div style="width: ${percentage}%; height: 100%; background: linear-gradient(90deg, #35344c7d, #101029); transition: width 0.3s;"></div>
                </div>
                <button onclick="votePoll(${index})" style="margin-top: 8px; background: #161d45b0; color: white; border: none; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; cursor: pointer; transition: 0.2s;">Голосовать</button>
            </div>
        `;
  });
  html += `</div></div>`;
  pollContainer.innerHTML = html;
}

class AdvancedSearchEngine {
  database = [];
  constructor() {
    this.buildComprehensiveDatabase();
  }
  buildComprehensiveDatabase() {
    this.database = [];
    newsData.forEach((news) => {
      this.database.push({
        title: news.title,
        text: `${news.title} ${news.description} ${news.fullText} ${news.category}`,
        page: `index.html`,
        type: " Новость"
      });
    });
    eventsData.forEach((event) => {
      this.database.push({
        title: event.title,
        text: `${event.title} ${event.location} ${event.date} ${event.price}`,
        page: "index.html#events",
        type: " Событие"
      });
    });
    businessesData.forEach((biz) => {
      this.database.push({
        title: biz.name,
        text: `${biz.name} ${biz.description} ${biz.category} ${biz.phone || ""} ${biz.address || ""} ${biz.rating}`,
        page: "index.html#business",
        type: " Бизнес"
      });
    });
    ticketsData.forEach((ticket) => {
      this.database.push({
        title: ticket.title,
        text: `${ticket.title} ${ticket.description} ${ticket.category} ${ticket.status}`,
        page: "index.html#tickets",
        type: "Обращение"
      });
    });
    pollData.forEach((poll) => {
      this.database.push({
        title: poll.question,
        text: `${poll.question} ${poll.options.join(" ")}`,
        page: "index.html#poll",
        type: "Опрос"
      });
    });
    this.database.push({
      title: "О городе Чапаевск",
      text: `История города Чапаевск началась в 1909 году со строительства Самарского Сергиевского порохового завода. 
                   Про город Чапаевск говорят – «трижды названный»: с 1911 года — посёлок Иващенково, с 23 августа 1927 года — город Троцк, 
                   с 7 февраля 1929 года в год 10-й годовщины гибели В.И.Чапаева было переименование города в Чапаевск.
                   Интересные места: Бюст основателя города В. П. Иващенко. Церковь преподобного Сергия Радонежского. 
                   Памятник Василию Ивановичу Чапаеву. Муниципальный краеведческий музей. 
                   Дворец культуры имени В.И. Чапаева. «Дом жилой» (улица Пионерская, 11). 
                   Заводоуправление АО «Промсинтез». «Дом жилой с мезонином» (улица Ленина, 30).
                   Места отдыха: Парк имени В.И. Чапаева. Модельная библиотека «Библиоград». 
                   Современный кинозал в ДК им. А.М. Горького. Спортивный комплекс «Луч». Ледовая арена «Старт».
                   Люди: Сергей Васильевич Авдеев - космонавт, Герой России. Данил Андреевич Шаварин - актер. 
                   Владимир Иванович Жуков - архитектор. Никита Прохоров и Николь Родомакина - паралимпийцы. 
                   Владимир Николаевич Морякин - актер. Михаил Максимович Гераськин - художник. 
                   Сергей Никитович Кондулуков - художник. Евгений Петрович Чепурных - поэт. 
                   Татьяна Веньяминовна Кижайкина - поэтесса. Владимир Никифорович Бондаренко - детский писатель, сказочник.
                   Год основания: 1909. Население: ~70 000 человек. Трижды менял название. 
                   Есть памятник архитектуры федерального значения.`,
      page: "o-gorode.html",
      type: "ℹИнформация о городе"
    });
    this.database.push({
      title: "Глава городского округа Чапаевск - Краснов Александр Сергеевич",
      text: `Краснов Александр Сергеевич, Глава городского округа Чапаевск. 
                   Номер телефона: 8(84639)2-24-04. 
                   Дата рождения: 26.02.1975 г. Место рождения: г. Чапаевск, Куйбышевской области. 
                   Образование: 1998 г. окончил Самарский государственный технический университет.
                   Документы: Устав городского округа Чапаевск, Постановления администрации, 
                   Распоряжения главы, Муниципальные программы.
                   Сведения о доходах: Доходы главы за 2023 год, Доходы главы за 2024 год, 
                   Доходы членов семьи, Сведения о имуществе.
                   Отправить сообщение главе.`,
      page: "glava.html",
      type: "Глава города"
    });
    this.database.push({
      title: "Пресс-служба Администрации Чапаевска",
      text: `Отдел по взаимодействию со СМИ. Харьмова Евгения Юрьевна - Начальник отдела. 
                   Адрес: 446100 г.о. Чапаевск, ул. Комсомольская д.17, к.35а. 
                   Телефон: (884639)2-01-03. E-mail: chapaevsk@bk.ru.
                   Об отделе: осуществляет информационное сопровождение деятельности Администрации.
                   Основные задачи: Освещение деятельности Администрации в СМИ, Организация пресс-конференций и брифингов. 
                   Подготовка информационных материалов для официального сайта. 
                   Взаимодействие с журналистами и редакциями.`,
      page: "press.html",
      type: "Пресс-служба"
    });
    this.database.push({
      title: "Администрация городского округа Чапаевск - Структура и контакты",
      text: `Глава городского округа Краснов Александр Сергеевич.
                   Первый заместитель Главы городского округа - руководитель управления городского хозяйства.
                   Заместитель Главы по экономике, финансам и инвестициям - Митянина Ирина Александровна.
                   Заместитель Главы по социальным вопросам - Анисимова Екатерина Владимировна.
                   Заместитель Главы по безопасности и взаимодействию с общественностью - Устинова Марина Николаевна.
                   Заместитель Главы по градостроительной деятельности - Егоркин Максим Васильевич.
                   Советник Главы: Кутырева Оксана Петровна (по вопросам комплексной поддержки участников СВО и их семей).
                   Отраслевые (функциональные) органы: Начальник отдела по взаимодействию со СМИ Харымова Евгения Юрьевна, 
                   Аппарат администрации Пяткина Ирина Александровна, Финансовое управление Фоменко Светлана Михайловна, 
                   Отдел учета Мухина Ольга Ивановна, Управление торговли, транспорта, связи Суров Алексей Николаевич, 
                   Отдел муниципального заказа Балакин Александр Степанович, Служба охраны труда Спиридонова Мария Михайловна, 
                   Департамент культуры и молодежного развития Фролова Ирина Геннадьевна, 
                   Департамент физической культуры и спорта Жуканова Оксана Александровна, 
                   Комитет социального развития, семьи, опеки Быкова Оксана Александровна, 
                   Отдел общественных коммуникаций Горбачёва Екатерина Владимировна, Жилищный отдел Мордашова Виктория Викторовна, 
                   Организационный отдел Каргина Ольга Александровна, Отдел делопроизводства Волкова Анжела Викторовна, 
                   Департамент строительства Балаганов Павел Геннадьевич, Комитет по управлению имуществом Решетников Дмитрий Викторович, 
                   Мобилизационный отдел Пожидаев Денис Николаевич, Контрольно-правовое Управление Кузнецова Елена Викторовна, 
                   Сектор финансового контроля Еманова Ольга Юрьевна, Административная комиссия Урядова Наталья Александровна, 
                   Архивный отдел Назаркина Алла Александровна.
                   Подведомственные организации: МКУ "Управление гражданской защиты" Моторин Вадим Александрович, 
                   ДШИ №2 «Гармония» Моторина Ольга Валерьевна, Управление архитектуры Мишурова Светлана Валериевна, 
                   Курсы ГО Голенков Николай Иванович, Управление благоустройства Руськин Виталий Геннадьевич, 
                   Ресурсный центр культуры Кузнецова Юлия Николаевна, ДШИ №1 Беспалова Елена Викторовна, 
                   Социокультурный досуговый комплекс Фильченкова Татьяна Евгеньевна, Детский лагерь "Дружба" Исакова Наталья Анатольевна, 
                   ДОЦ "Молодая гвардия" Борминский Андрей Владимирович, МКУ «Комплекс бытового обслуживания» Лысенкова Людмила Юрьевна, 
                   МКУ «Управление по обеспечению деятельности» Маслов Евгений Алексеевич, 
                   Централизованная библиотечная система Аншукова Светлана Владимировна, 
                   МФЦ Гришняев Владимир Анатольевич, Газета «Чапаевский рабочий» Илясов Денис Иванович, 
                   МБУ «Спортивные сооружения» Никишкин Иван Александрович.`,
      page: "admin.html",
      type: "Администрация"
    });
    this.database.push({
      title: "Документы городского округа Чапаевск",
      text: `Реестр плановых и внеплановых проверок, их результатов выданных предписаний.
                   О проведении публичных слушаний по вопросу внесения изменений в Правила благоустройства (10.04.2026).
                   О внесении изменений в Устав городского округа Чапаевск (01.03.2026).
                   Постановление №245 "Об утверждении перечня муниципальных услуг" (15.02.2026).
                   Распоряжение №12 "О проведении проверок в сфере благоустройства" (10.01.2026).
                   Реестр муниципальных услуг Администрации. Перечень муниципальных услуг. 
                   Регламенты муниципальных услуг. Проекты регламентов муниципальных услуг. 
                   Выявление правообладателей ранее учтенных объектов недвижимости. 
                   Информация о минимальных ценах на социально значимые продовольственные товары.
                   Предписания об устранении нарушений: Администрация, ДШИ №2 «Гармония», МФЦ, КУМИ, Департамент строительства.
                   Распоряжения: №Д-7/863 "Об утверждении Плана проведения мероприятий ведомственного контроля", 
                   №Д-7/861 "Об утверждении Плана проведения плановых проверок в сфере закупок".
                   Разделы документов: Постановления Администрации, Распоряжения Главы, Решения Думы, 
                   Муниципальные программы, Административные регламенты.`,
      page: "document.html",
      type: "Документы"
    });
    this.database.push({
      title: "Бюджет для граждан - Чапаевск",
      text: `Решение Думы городского округа Чапаевск о бюджете. 
                   Порядок проведения публичных слушаний. Публичные слушания. 
                   Исполнение бюджета. Проекты бюджета. Коды бюджетной классификации.
                   Бюджет для граждан к Федеральному закону о Федеральном бюджете на 2024 год 
                   и на плановый период 2025 и 2026 годов. Проекты.
                   Документы по бюджету: Бюджет 2024 год, Бюджет 2025 год, Бюджет 2026 год, 
                   Отчеты об исполнении, Пояснительные записки.
                   Публичные слушания: Очередные слушания, Архив слушаний, Результаты обсуждений.`,
      page: "budjet.html",
      type: "Бюджет"
    });
    this.database.push({
      title: "Национальные проекты в Чапаевске",
      text: `Национальные проекты: Укрепление общественного здоровья, Инфраструктура для жизни, 
                   Молодежь и дети, Семья, Продолжительная и активная жизнь, Эффективная и конкурентная экономика.
                   Проект направлен на снижение смертности, улучшение качества медицинского обслуживания, профилактику заболеваний.
                   Проект предусматривает модернизацию коммунальной инфраструктуры, развитие транспортной сети, улучшение качества жилого фонда.
                   Проект сосредоточен на развитии возможностей для молодежи и детей, включая образование, профессиональную подготовку, спорт и культуру.
                   Проект направлен на поддержку семей, повышение рождаемости и улучшение условий для воспитания детей.
                   Проект сосредоточен на повышении качества жизни пожилых граждан, развитии здравоохранения и социальной поддержки.
                   Проект направлен на развитие экономики, поддержку предпринимательства, цифровизацию и инновации.
                   Национальные проекты реализуются в России с 2019 года в рамках указа Президента РФ.
                   Координация реализации национальных проектов в городском округе Чапаевск координируется Администрацией.`,
      page: "proekt.html",
      type: "Нац. проекты"
    });
    this.database.push({
      title: "Общественность городского округа Чапаевск",
      text: `Общественная палата городского округа Чапаевск. Председатель Иванов Петр Сергеевич. Адрес: ул. Ленина, д. 45, офис 102. Телефон: 8(84639) 2-45-67. Email: palata@chapaevsk.ru.
                   Комиссия по социальной политике и защите прав граждан, председатель Петрова Ирина Ивановна.
                   Комиссия по экономике и развитию предпринимательства, председатель Смирнов Дмитрий Алексеевич.
                   Комиссия по образованию, культуре и молодежной политике, председатель Кузнецова Анна Викторовна.
                   Комиссия по благоустройству и экологии, председатель Волков Сергей Сергеевич.
                   Комиссия по общественному контролю и взаимодействию с органами власти, председатель Морозова Виктория Петровна.
                   Общественные слушания и форумы: план благоустройства на 2026 год, круглый стол "Молодежь и занятость", форум предпринимателей, развитие парка культуры.
                   Социальные организации: Благотворительный фонд "Надежда", Организация инвалидов "Милосердие", Общество ветеранов войны и труда, Центр помощи семье и детям.
                   Спортивные организации: Спортивный клуб "Динамо", Федерация волейбола, Клуб любителей туризма, Федерация борьбы и единоборств.
                   Культурные организации: Дом культуры "Юность", Музыкальная школа имени Глинки, Театральная студия "Фантазия", Клуб художников и мастеров.
                   Экологические организации: Общество охраны природы, Клуб любителей рыбной ловли, Зеленый патруль, Ассоциация пчеловодов.
                   Молодежные организации: Молодежный центр "Поколение", Студенческий совет, Волонтерское движение "Забота", Скаутское движение "Орленок".`,
      page: "obshestvenost.html",
      type: "Общественность"
    });
    this.database.push({
      title: "Муниципальные программы Чапаевска",
      text: `Муниципальные программы Чапаевска. Социальная политика и поддержка населения: ежемесячная доплата к страховой пенсии муниципальным служащим, молодая семья - доступное жилье, исполнение государственных полномочий по опеке и попечительству, обеспечение жильем детей-сирот, развитие системы детского отдыха, поддержка социально ориентированных НКО.
                   Безопасность и правопорядок: профилактика правонарушений, противодействие коррупции, противодействие незаконному обороту наркотических средств, профилактика терроризма, повышение безопасности дорожного движения, развитие добровольной пожарной охраны, защита от чрезвычайных ситуаций.
                   Инфраструктура и благоустройство: модернизация транспортной инфраструктуры, формирование современной городской среды, комплексное благоустройство территории, развитие ЖКХ, обращение с твердыми коммунальными отходами, переселение из аварийного жилья.
                   Экономическое развитие: поддержка малого и среднего предпринимательства, организация градостроительной деятельности, управление муниципальным имуществом.
                   Образование и здравоохранение: развитие системы образования, укрепление общественного здоровья, развитие физической культуры и спорта.
                   Культура и молодежь: развитие культуры, туризма и молодежной политики, поддержка местных инициатив, информационное общество.
                   Административное управление: развитие муниципальной службы, обеспечение деятельности органов местного самоуправления, услуги через МФЦ, улучшение условий и охраны труда.
                   Бытовое обслуживание: организация услуг в сфере бытового обслуживания.`,
      page: "programm.html",
      type: "Мун. программы"
    });
    this.database.push({
      title: "Инвесторам городского округа Чапаевск",
      text: `Регламент взаимодействия инвесторов с должностными лицами. 
                   Линия обращений для получения мер поддержки инвесторов и инвестиционных проектов. 
                   Инвестиционный паспорт. Меры государственной поддержки. Инвестиционные проекты. 
                   Инфраструктура для размещения объектов. Инвестиционный профиль. Совещательный орган. ТОР, ГЧП.
                   Уполномоченный по развитию инвестиционной деятельности: Митянина Ирина Александровна, 
                   Заместитель Главы городского округа по экономике, финансам и инвестициям. 
                   Тел.: 8 (846) 392-53-01, 8 (846) 392-10-27. E-mail: chap-economy@bk.ru.
                   Полезная информация: Инвестиционная стратегия, Нормативно-правовые акты, 
                   Часто задаваемые вопросы, Обратиться к уполномоченному.`,
      page: "investoram.html",
      type: "Инвесторам"
    });
    this.database.push({
      title: "Финансовая грамотность и Калькулятор налогов",
      text: `Программа долгосрочных сбережений. Новые возможности для инвестиций. 
                   Преимущества программы долгосрочных сбережений. 
                   Калькулятор налогов: рассчитайте свой налог на доход физического лица (НДФЛ).
                   Полезные материалы: Брошюры по финансовой грамотности, Видеолекции, 
                   Тесты и задания, Контакты консультантов.`,
      page: "fgramotnost.html",
      type: "Фин. грамотность"
    });
  }
  search(query, filters) {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery)
      return [];
    let results = this.database.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const textMatch = item.text.toLowerCase().includes(lowerQuery);
      return titleMatch || textMatch;
    });
    if (filters?.type) {
      results = results.filter((r) => r.type.toLowerCase().includes(filters.type.toLowerCase()));
    }
    if (filters?.page) {
      results = results.filter((r) => r.page.toLowerCase() === filters.page.toLowerCase());
    }
    results.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(lowerQuery);
      const bTitleMatch = b.title.toLowerCase().includes(lowerQuery);
      if (aTitleMatch && !bTitleMatch)
        return -1;
      if (!aTitleMatch && bTitleMatch)
        return 1;
      return 0;
    });
    return results;
  }
  getStats() {
    return {
      totalItems: this.database.length,
      byType: this.database.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
      }, {})
    };
  }
  rebuildDatabase() {
    this.database = [];
    this.buildComprehensiveDatabase();
  }
}
var advancedSearchEngine = new AdvancedSearchEngine;
function advancedGlobalSearch(query) {
  const searchInput = document.getElementById("search-input");
  const searchTerm = query || searchInput.value.toLowerCase().trim();
  if (!searchTerm) {
    alert("Введите слово для поиска");
    return;
  }
  const results = advancedSearchEngine.search(searchTerm);
  if (results.length === 0) {
    alert(`❌ Ничего не найдено по запросу "${searchTerm}"`);
    return;
  }
  showAdvancedSearchResults(searchTerm, results);
}
function showAdvancedSearchResults(term, results) {
  const oldModal = document.getElementById("search-modal");
  if (oldModal)
    oldModal.remove();
  const modal = document.createElement("div");
  modal.id = "search-modal";
  modal.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 650px;
        max-height: 75vh;
        background: rgba(22, 29, 69, 0.98);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.3);
        padding: 25px;
        z-index: 1000;
        overflow-y: auto;
        box-shadow: 0 25px 50px rgba(0,0,0,0.5);
    `;
  let html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0; font-size: 1.5rem;">Результаты поиска</h2>
            <button onclick="document.getElementById('search-modal').remove()" 
                style="background: rgba(255,255,255,0.2); border: none; color: white; font-size: 24px; 
                        width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"
                onmouseover="this.style.background='rgba(255,255,255,0.3)'"
                onmouseout="this.style.background='rgba(255,255,255,0.2)'">✕</button>
        </div>

        <div style="background: rgba(108,99,255,0.2); padding: 12px 15px; border-radius: 12px; margin-bottom: 20px;">
            <p style="color: rgba(255,255,255,0.8); margin: 0;">
                <strong style="color: #161435; font-size: 1.2rem;">${results.length}</strong> результатов по запросу 
                <strong style="color: #fff;">"${term}"</strong>
            </p>
        </div>

        <div style="max-height: 500px; overflow-y: auto;">
    `;
  results.forEach((item, index) => {
    const highlightedTitle = item.title.replace(new RegExp(term, "gi"), (match) => `<mark style="background-color: #f7f2ba; color: black; padding: 0 2px; border-radius: 3px;">${match}</mark>`);
    const snippetText = item.text.toLowerCase().includes(term) ? item.text.substring(Math.max(0, item.text.toLowerCase().indexOf(term) - 30), Math.min(item.text.length, item.text.toLowerCase().indexOf(term) + 120)) : item.text.substring(0, 150);
    const highlightedSnippet = snippetText.replace(new RegExp(term, "gi"), (match) => `<mark style="background-color: #f7f2ba; color: black; padding: 0 2px; border-radius: 3px;">${match}</mark>`);
    html += `
            <div class="search-result" data-page="${item.page}" 
                style="background: rgba(108,99,255,0.15); padding: 16px; border-radius: 14px; 
                        margin-bottom: 12px; cursor: pointer; transition: all 0.3s; border-left: 4px solid #19183c;"
                onmouseover="this.style.background='rgba(108,99,255,0.3)'; this.style.transform='translateX(5px)'"
                onmouseout="this.style.background='rgba(108,99,255,0.15)'; this.style.transform='translateX(0)'">

                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <div style="color: #e0e0e0f1; font-weight: 700; font-size: 0.85rem;">${item.type}</div>
                    <div style="color: rgba(255,255,255,0.5); font-size: 0.75rem;">#${index + 1}</div>
                </div>

                <div style="color: white; font-weight: 600; margin-bottom: 6px; font-size: 1rem;">${highlightedTitle}</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.4;">
                    ${highlightedSnippet}${snippetText.length < item.text.length ? "..." : ""}
                </div>
                <div style="color: #c9c9c9; font-size: 0.75rem; margin-top: 10px;">→ Нажмите для перехода</div>
            </div>
        `;
  });
  html += `</div>`;
  modal.innerHTML = html;
  document.body.appendChild(modal);
  document.querySelectorAll(".search-result").forEach((el) => {
    el.addEventListener("click", () => {
      const page = el.getAttribute("data-page");
      if (page) {
        const modalElement = document.getElementById("search-modal");
        if (modalElement)
          modalElement.remove();
        window.location.href = page;
      }
    });
  });
}
function setupBusinessFilters() {
  document.querySelectorAll(".f-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".f-btn").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      const cat = e.target.dataset.cat;
      if (cat)
        renderBusiness(cat);
    });
  });
}
function setupTicketForm() {
  const btnAdd = document.getElementById("btn-add-ticket");
  const titleInput = document.getElementById("in-title");
  const catSelect = document.getElementById("in-category");
  const descTextarea = document.getElementById("in-desc");
  btnAdd?.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const category = catSelect.value;
    const description = descTextarea.value.trim();
    if (!title || !description) {
      alert("Заполните все поля!");
      return;
    }
    const newTicket = {
      id: Date.now(),
      title,
      category,
      description,
      date: new Date().toLocaleString(),
      status: "new"
    };
    ticketsData.unshift(newTicket);
    saveTicketsToStorage();
    renderTickets();
    advancedSearchEngine.rebuildDatabase();
    titleInput.value = "";
    descTextarea.value = "";
    alert(" Обращение отправлено!");
  });
}
function setupCarousel() {
  const prevBtn = document.getElementById("newsPrev");
  const nextBtn = document.getElementById("newsNext");
  const scrollContainer = document.querySelector(".news-carousel-container");
  if (!scrollContainer)
    return;
  prevBtn?.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });
  nextBtn?.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
}
function setupBackToTop() {
  const backToTopButton = document.getElementById("backToTop");
  if (!backToTopButton)
    return;
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  window.addEventListener("scroll", toggleVisibility);
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  toggleVisibility();
}
function setupTaxCalculator() {
  const calcBtn = document.getElementById("calc-tax-btn");
  if (!calcBtn) {
    console.log("Кнопка калькулятора не найдена");
    return;
  }
  calcBtn.addEventListener("click", () => {
    const incomeInput = document.getElementById("income-input");
    const resultDiv = document.getElementById("tax-result");
    if (!incomeInput || !resultDiv) {
      console.log("Элементы не найдены");
      return;
    }
    const income = parseFloat(incomeInput.value);
    if (!income || income < 0 || isNaN(income)) {
      alert("Введите корректный доход");
      return;
    }
    const taxRate = 0.13;
    const tax = income * taxRate;
    const netIncome = income - tax;
    resultDiv.innerHTML = `
            <div style="background: linear-gradient(135deg, #161d45, #d8d6f343); color: white; padding: 20px; border-radius: 16px; margin-top: 15px;">
                <p style="margin: 10px 0;"><strong>Валовый доход:</strong> ${income.toLocaleString("ru-RU")} ₽</p>
                <p style="margin: 10px 0;"><strong>Налог (13%):</strong> ${tax.toLocaleString("ru-RU")} ₽</p>
                <p style="font-size: 1.2rem; border-top: 1px solid rgba(255,255,255,0.3); padding-top: 10px; margin-top: 10px;"><strong>К получению:</strong> ${netIncome.toLocaleString("ru-RU")} ₽</p>
            </div>
        `;
  });
}
function votePoll(optionIndex) {
  pollData[0].votes[optionIndex]++;
  localStorage.setItem("poll_votes", JSON.stringify(pollData[0].votes));
  renderPoll();
  alert("Спасибо за ваш голос!");
  advancedSearchEngine.rebuildDatabase();
}
function openFeedbackModal() {
  const modal = document.getElementById("feedback-modal");
  if (modal)
    modal.style.display = "flex";
}
function closeFeedbackModal() {
  const modal = document.getElementById("feedback-modal");
  if (modal)
    modal.style.display = "none";
}
function setupFeedbackWidget() {
  const openBtn = document.getElementById("feedback-btn");
  const closeBtn = document.getElementById("close-modal-btn");
  const skipBtn = document.getElementById("skip-feedback-btn");
  const submitBtn = document.getElementById("feedback-submit-modal-btn");
  if (openBtn)
    openBtn.onclick = openFeedbackModal;
  if (closeBtn)
    closeBtn.onclick = closeFeedbackModal;
  if (skipBtn)
    skipBtn.onclick = closeFeedbackModal;
  if (submitBtn) {
    submitBtn.onclick = () => {
      const rating = document.getElementById("feedback-rating-modal")?.value;
      const comment = document.getElementById("feedback-comment-modal")?.value || "";
      if (!rating) {
        alert("Выберите оценку");
        return;
      }
      const feedbackData = JSON.parse(localStorage.getItem("feedback_data") || "[]");
      feedbackData.push({
        rating: parseInt(rating),
        comment,
        date: new Date().toLocaleDateString("ru-RU")
      });
      localStorage.setItem("feedback_data", JSON.stringify(feedbackData));
      alert("Спасибо за отзыв!");
      closeFeedbackModal();
      const ratingSelect = document.getElementById("feedback-rating-modal");
      const commentText = document.getElementById("feedback-comment-modal");
      if (ratingSelect)
        ratingSelect.value = "";
      if (commentText)
        commentText.value = "";
    };
  }
}
function setupInitialFeedbackPopup() {
  const lastFeedbackPopupDate = localStorage.getItem("last_feedback_popup_date");
  const today = new Date().toDateString();
  if (lastFeedbackPopupDate === today) {
    return;
  }
  setTimeout(() => {
    const modal = document.getElementById("feedback-modal");
    if (modal) {
      modal.style.display = "flex";
      localStorage.setItem("last_feedback_popup_date", today);
    }
  }, 2000);
}
function updateFeedbackStats() {
  const feedbackData = JSON.parse(localStorage.getItem("feedback_data") || "[]");
  if (feedbackData.length === 0) {
    console.log("Отзывов еще нет");
    return;
  }
  const avgRating = (feedbackData.reduce((sum, fb) => sum + fb.rating, 0) / feedbackData.length).toFixed(1);
  console.log(` Средняя оценка: ${avgRating}`);
  console.log(` Всего отзывов: ${feedbackData.length}`);
}
function loadTicketsFromStorage() {
  const saved = localStorage.getItem("chapaevsk_tickets");
  if (saved) {
    ticketsData = JSON.parse(saved);
  }
}
function saveTicketsToStorage() {
  localStorage.setItem("chapaevsk_tickets", JSON.stringify(ticketsData));
}
function setupRandomPopup() {}
function setupNewsFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget;
      const selectedCategory = target.dataset.cat;
      if (selectedCategory) {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        target.classList.add("active");
        const filtered = DataManager.getNewsByCategory(selectedCategory);
        renderNews(filtered);
      }
    });
  });
}
function setupAdvancedSearch() {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => advancedGlobalSearch());
  }
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        advancedGlobalSearch();
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loadTicketsFromStorage();
  advancedSearchEngine.rebuildDatabase();
  renderNews(newsData);
  setupNewsFilters();
  renderEvents();
  renderBusiness();
  renderTickets();
  setupCarousel();
  setupTicketForm();
  setupBusinessFilters();
  setupAdvancedSearch();
  setupBackToTop();
  renderPoll();
  setupTaxCalculator();
  setupFeedbackWidget();
  updateFeedbackStats();
  setupInitialFeedbackPopup();
  setupRandomPopup();
  setupFeedbackWidget();
  checkScrollToForm();
  console.log("Сайт полностью загружен и готов к работе!");
  console.log(` Новостей: ${newsData.length}`);
  console.log(` Событий: ${eventsData.length}`);
  console.log(` Бизнесов: ${businessesData.length}`);
  console.log(` Объектов в базе поиска: ${advancedSearchEngine.getStats().totalItems}`);
  console.log(` Статистика поиска:`, advancedSearchEngine.getStats().byType);
});
window.DataManager = DataManager;
window.advancedSearchEngine = advancedSearchEngine;
window.advancedGlobalSearch = advancedGlobalSearch;
window.newsData = newsData;
window.votePoll = votePoll;
function checkScrollToForm() {
  const shouldScroll = localStorage.getItem("scrollToForm");
  if (shouldScroll === "true") {
    localStorage.removeItem("scrollToForm");
    const formSection = document.getElementById("tickets-section");
    if (formSection) {
      setTimeout(() => {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }
}
function closeModal() {
  const modal = document.getElementById("modalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    closeModal();
});
var modalOverlay = document.getElementById("modalOverlay");
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay)
      closeModal();
  });
}
function openNewsModal(news) {
  const modal = document.getElementById("newsModalOverlay");
  if (!modal)
    return;
  const modalImage = document.getElementById("newsModalImage");
  const modalCategory = document.getElementById("newsModalCategory");
  const modalTitle = document.getElementById("newsModalTitle");
  const modalText = document.getElementById("newsModalText");
  if (modalImage)
    modalImage.src = news.image || "";
  if (modalCategory)
    modalCategory.textContent = news.category || "Новость";
  if (modalTitle)
    modalTitle.textContent = news.title;
  if (modalText)
    modalText.textContent = news.fullText || news.description;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeNewsModal() {
  const modal = document.getElementById("newsModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape")
    closeNewsModal();
});
var newsModalOverlay = document.getElementById("newsModalOverlay");
if (newsModalOverlay) {
  newsModalOverlay.addEventListener("click", function(e) {
    if (e.target === this)
      closeNewsModal();
  });
}
