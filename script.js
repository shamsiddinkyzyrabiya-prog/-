// ======================================
// 1. ТИЛДЕР
// ======================================
const translations = {
    ky: {
        home: "Башкы бет",
        places: "Жерлер",
        hotels: "Мейманканалар",
        about: "Биз жөнүндө",
        heroTitle: "Кыргызстанды биз менен кыдыр!",
        heroText: "Тоолордун кооздугун, көлдөрдү жана тарыхый жерлерди ач.",
        explore: "Саякатты баштоо",
        placesTitle: "🏔️ Кыргызстандагы кооз жерлер",
        searchPlaceholder: "Жердин атын издөө...",
        lakeTitle: "Ысык-Көл",
        lakeShort: "Кыргызстандын бермети.",
        parkTitle: "Ала-Арча",
        parkShort: "Бишкекке жакын улуттук парк.",
        sonTitle: "Соң-Көл",
        sonShort: "Бийик тоолордогу кооз көл.",
        buranaTitle: "Бурана мунарасы",
        buranaShort: "Кыргызстандагы тарыхый эстелик.",
        jetiTitle: "Жети-Өгүз",
        jetiShort: "Кызыл аскалары менен белгилүү аймак.",
        suleimanTitle: "Сулайман-Тоо",
        suleimanShort: "Ош шаарындагы белгилүү ыйык тоо.",
        details: "Кененирээк",
        noResults: "Эч нерсе табылган жок.",
        hotelTitle: "🏨 Мейманкана брондоо",
        hotelIntro: "Саякатыңа ылайыктуу мейманкананы танда.",
        chooseHotel: "Мейманкананы танда:",
        arrivalDate: "Келүү күнү:",
        guestCount: "Коноктордун саны:",
        book: "Брондоо",
        aboutTitle: "Биз жөнүндө",
        aboutText: "Travel Kyrgyzstan — Кыргызстандагы кооз жерлерди таанытууга арналган туристтик сайт.",
        footerText: "Кыргызстанды бирге тааныйлы!"
    },
    ru: {
        home: "Главная",
        places: "Места",
        hotels: "Отели",
        about: "О нас",
        heroTitle: "Путешествуй по Кыргызстану с нами!",
        heroText: "Открой красоту гор, озёр и исторических мест.",
        explore: "Начать путешествие",
        placesTitle: "🏔️ Красивые места Кыргызстана",
        searchPlaceholder: "Поиск места...",
        lakeTitle: "Иссык-Куль",
        lakeShort: "Жемчужина Кыргызстана.",
        parkTitle: "Ала-Арча",
        parkShort: "Национальный парк рядом с Бишкеком.",
        sonTitle: "Сон-Куль",
        sonShort: "Красивое высокогорное озеро.",
        buranaTitle: "Башня Бурана",
        buranaShort: "Исторический памятник Кыргызстана.",
        jetiTitle: "Джети-Огуз",
        jetiShort: "Место, известное красными скалами.",
        suleimanTitle: "Сулайман-Тоо",
        suleimanShort: "Известная священная гора в Оше.",
        details: "Подробнее",
        noResults: "Ничего не найдено.",
        hotelTitle: "🏨 Бронирование отеля",
        hotelIntro: "Выберите отель для своей поездки.",
        chooseHotel: "Выберите отель:",
        arrivalDate: "Дата заезда:",
        guestCount: "Количество гостей:",
        book: "Забронировать",
        aboutTitle: "О нас",
        aboutText: "Travel Kyrgyzstan — туристический сайт о красивых местах Кыргызстана.",
        footerText: "Давайте вместе узнавать Кыргызстан!"
    },
    en: {
        home: "Home",
        places: "Places",
        hotels: "Hotels",
        about: "About us",
        heroTitle: "Explore Kyrgyzstan with us!",
        heroText: "Discover beautiful mountains, lakes and historic places.",
        explore: "Start exploring",
        placesTitle: "🏔️ Beautiful Places in Kyrgyzstan",
        searchPlaceholder: "Search for a place...",
        lakeTitle: "Issyk-Kul",
        lakeShort: "The pearl of Kyrgyzstan.",
        parkTitle: "Ala-Archa",
        parkShort: "A national park near Bishkek.",
        sonTitle: "Son-Kul",
        sonShort: "A beautiful high-altitude lake.",
        buranaTitle: "Burana Tower",
        buranaShort: "A historic monument in Kyrgyzstan.",
        jetiTitle: "Jeti-Oguz",
        jetiShort: "An area known for its red rock formations.",
        suleimanTitle: "Sulaiman-Too",
        suleimanShort: "A famous sacred mountain in Osh.",
        details: "Learn more",
        noResults: "No results found.",
        hotelTitle: "🏨 Hotel Booking",
        hotelIntro: "Choose a hotel for your trip.",
        chooseHotel: "Choose a hotel:",
        arrivalDate: "Arrival date:",
        guestCount: "Number of guests:",
        book: "Book now",
        aboutTitle: "About us",
        aboutText: "Travel Kyrgyzstan is a travel website introducing beautiful places in Kyrgyzstan.",
        footerText: "Let's explore Kyrgyzstan together!"
    }
};
// ======================================
// 2. КЕНЕН МААЛЫМАТТАР
// ======================================
const placeInfo = {
    lake: {
        title: {
            ky: "🏔️ Ысык-Көл",
            ru: "🏔️ Иссык-Куль",
            en: "🏔️ Issyk-Kul"
        },
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
        description: {
            ky: `
                <p>Ысык-Көл — Кыргызстандын эң белгилүү
                жаратылыш байлыктарынын бири. Көл бийик
                тоолордун арасында жайгашып, кооз пейзаждары
                жана эс алуу жайлары менен белгилүү.</p>
                <h3>📍 Жайгашкан жери</h3>
                <p>Кыргызстандын түндүк-чыгыш бөлүгүндө,
                Ысык-Көл облусунда жайгашкан.</p>
                <h3>🌊 Көлдүн өзгөчөлүгү</h3>
                <p>Ысык-Көл дүйнөдөгү ири бийик тоолуу көлдөрдүн
                бири. Аны Теңир-Тоонун тоолору курчап турат.</p>
                <h3>🏖️ Эмне кылса болот?</h3>
                <ul>
                    <li>Көл жээгинде эс алуу.</li>
                    <li>Жаратылышты сүрөткө тартуу.</li>
                    <li>Кайык менен сейилдөө.</li>
                    <li>Тоолорго саякаттоо.</li>
                    <li>Жергиликтүү маданият менен таанышуу.</li>
                </ul>
                <h3>🗺️ Көрүүгө боло турган жерлер</h3>
                <p>Чолпон-Ата, Каракол жана Жети-Өгүз
                аймагы саякатчылар арасында белгилүү.</p>
                <h3>💡 Саякатчыларга кеңеш</h3>
                <p>Жолго чыгардан мурда аба ырайын жана
                транспортту текшер. Жайында да кечинде
                салкын болушу мүмкүн.</p>
            `,
            ru: `
                <p>Иссык-Куль — одно из самых известных
                природных богатств Кыргызстана. Озеро окружено
                горами и популярно среди путешественников.</p>
                <h3>📍 Расположение</h3>
                <p>Находится на северо-востоке Кыргызстана,
                в Иссык-Кульской области.</p>
                <h3>🌊 Особенности озера</h3>
                <p>Иссык-Куль — одно из крупнейших
                высокогорных озёр мира.</p>
                <h3>🏖️ Чем заняться?</h3>
                <ul>
                    <li>Отдыхать на берегу.</li>
                    <li>Фотографировать природу.</li>
                    <li>Кататься на лодке.</li>
                    <li>Путешествовать по горам.</li>
                    <li>Знакомиться с местной культурой.</li>
                </ul>
                <h3>🗺️ Интересные места</h3>
                <p>Чолпон-Ата, Каракол и ущелье Джети-Огуз.</p>
                <h3>💡 Советы туристам</h3>
                <p>Перед поездкой проверь погоду и транспорт.
                Вечером даже летом может быть прохладно.</p>
            `,
            en: `
                <p>Issyk-Kul is one of Kyrgyzstan's best-known
                natural attractions. The lake is surrounded
                by mountains and attracts many travellers.</p>
                <h3>📍 Location</h3>
                <p>It is located in northeastern Kyrgyzstan,
                in the Issyk-Kul region.</p>
                <h3>🌊 Lake features</h3>
                <p>Issyk-Kul is one of the world's largest
                high-altitude lakes.</p>
                <h3>🏖️ Things to do</h3>
                <ul>
                    <li>Relax by the lake.</li>
                    <li>Photograph the scenery.</li>
                    <li>Take a boat trip.</li>
                    <li>Explore the mountains.</li>
                    <li>Discover local culture.</li>
                </ul>
                <h3>🗺️ Places to visit</h3>
                <p>Cholpon-Ata, Karakol and Jeti-Oguz.</p>
                <h3>💡 Travel tips</h3>
                <p>Check the weather and transport before
                travelling. Evenings can be cool in summer.</p>
            `
        }
    },
    park: {
        title: {
            ky: "🏞️ Ала-Арча улуттук паркы",
            ru: "🏞️ Национальный парк Ала-Арча",
            en: "🏞️ Ala-Archa National Park"
        },
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
        description: {
            ky: `
                <p>Ала-Арча — Бишкекке жакын жайгашкан
                кооз улуттук жаратылыш паркы. Бул жерде бийик
                тоолор, дарыялар жана ар түрдүү өсүмдүктөр бар.</p>
                <h3>📍 Жайгашкан жери</h3>
                <p>Чүй облусунда, Бишкек шаарына жакын жайгашкан.</p>
                <h3>🌲 Жаратылышы</h3>
                <p>Парк тоолуу пейзаждары, токойлору жана
                сейилдөө маршруттары менен белгилүү.</p>
                <h3>🥾 Эмне кылса болот?</h3>
                <ul>
                    <li>Тоодо сейилдөө.</li>
                    <li>Пейзаждарды сүрөткө тартуу.</li>
                    <li>Дарыяларды жана тоолорду көрүү.</li>
                    <li>Белгиленген маршруттар менен жүрүү.</li>
                </ul>
                <h3>💡 Кеңештер</h3>
                <p>Ыңгайлуу бут кийим кий. Аба ырайын текшер
                жана коопсуз маршрут танда.</p>
            `,
            ru: `
                <p>Ала-Арча — красивый национальный природный
                парк недалеко от Бишкека. Здесь есть горы,
                реки и разнообразная растительность.</p>
                <h3>📍 Расположение</h3>
                <p>Чуйская область, недалеко от Бишкека.</p>
                <h3>🌲 Природа</h3>
                <p>Парк известен горными пейзажами,
                лесами и пешеходными маршрутами.</p>
                <h3>🥾 Чем заняться?</h3>
                <ul>
                    <li>Гулять в горах.</li>
                    <li>Фотографировать пейзажи.</li>
                    <li>Любоваться реками и горами.</li>
                    <li>Исследовать обозначенные маршруты.</li>
                </ul>
                <h3>💡 Советы</h3>
                <p>Надень удобную обувь, проверь погоду
                и выбери безопасный маршрут.</p>
            `,
            en: `
                <p>Ala-Archa is a beautiful national park
                near Bishkek, featuring mountains, rivers
                and diverse vegetation.</p>
                <h3>📍 Location</h3>
                <p>Chuy Region, near Bishkek.</p>
                <h3>🌲 Nature</h3>
                <p>The park is known for mountain scenery,
                forests and hiking trails.</p>
                <h3>🥾 Things to do</h3>
                <ul>
                    <li>Walk in the mountains.</li>
                    <li>Photograph the scenery.</li>
                    <li>Enjoy views of rivers and mountains.</li>
                    <li>Follow designated hiking trails.</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Wear suitable shoes, check the weather
                and choose a safe route.</p>
            `
        }
    },
    son: {
        title: {
            ky: "🏕️ Соң-Көл",
            ru: "🏕️ Сон-Куль",
            en: "🏕️ Son-Kul"
        },
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
        description: {
            ky: `
                <p>Соң-Көл — Нарын облусунда жайгашкан
                бийик тоолуу көл. Анын айланасын кең жайлоолор
                жана тоолор курчап турат.</p>
                <h3>📍 Жайгашкан жери</h3>
                <p>Нарын облусунда, деңиз деңгээлинен
                болжол менен 3016 метр бийиктикте жайгашкан.</p>
                <h3>🐎 Көчмөн маданияты</h3>
                <p>Жай мезгилинде көлдүн айланасында малчылар
                боз үйлөрүн тигип, мал багышат. Бул аймак
                кыргыздын салттуу жашоосу менен таанышууга
                мүмкүнчүлүк берет.</p>
                <h3>🌿 Эмне кылса болот?</h3>
                <ul>
                    <li>Жайлоонун кооздугун көрүү.</li>
                    <li>Боз үй маданияты менен таанышуу.</li>
                    <li>Жаратылышты сүрөткө тартуу.</li>
                    <li>Жергиликтүү гид кызматтарын пайдалануу.</li>
                </ul>
                <h3>💡 Кеңештер</h3>
                <p>Аба ырайы тез өзгөрүшү мүмкүн.
                Жылуу кийим ал жана жолдун абалын текшер.</p>
            `,
            ru: `
                <p>Сон-Куль — высокогорное озеро в Нарынской
                области, окружённое пастбищами и горами.</p>
                <h3>📍 Расположение</h3>
                <p>Нарынская область, примерно 3016 метров
                над уровнем моря.</p>
                <h3>🐎 Кочевая культура</h3>
                <p>Летом пастухи устанавливают юрты вокруг
                озера и пасут скот. Здесь можно познакомиться
                с традиционным образом жизни кыргызов.</p>
                <h3>🌿 Чем заняться?</h3>
                <ul>
                    <li>Любоваться летними пастбищами.</li>
                    <li>Знакомиться с культурой юрт.</li>
                    <li>Фотографировать природу.</li>
                    <li>Пользоваться услугами местных гидов.</li>
                </ul>
                <h3>💡 Советы</h3>
                <p>Погода может быстро меняться.
                Возьми тёплую одежду и проверь состояние дороги.</p>
            `,
            en: `
                <p>Son-Kul is a high-altitude lake in Naryn
                Region, surrounded by mountain pastures.</p>
                <h3>📍 Location</h3>
                <p>Naryn Region, approximately 3016 metres
                above sea level.</p>
                <h3>🐎 Nomadic culture</h3>
                <p>In summer, herders set up yurts around the
                lake and graze their livestock. Visitors can
                learn about traditional Kyrgyz life.</p>
                <h3>🌿 Things to do</h3>
                <ul>
                    <li>Enjoy the summer pastures.</li>
                    <li>Discover yurt culture.</li>
                    <li>Photograph the scenery.</li>
                    <li>Use local guide services.</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Weather can change quickly. Bring warm
                clothing and check road conditions.</p>
            `
        }
    },
    burana: {
        title: {
            ky: "🏛️ Бурана мунарасы",
            ru: "🏛️ Башня Бурана",
            en: "🏛️ Burana Tower"
        },
        image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1000&q=80",
        description: {
            ky: `
                <p>Бурана мунарасы — Чүй өрөөнүндөгү белгилүү
                тарыхый эстелик. Ал орто кылымдардагы Баласагын
                шаарынын калдыктары жайгашкан аймакта турат.</p>
                <h3>📜 Тарыхы</h3>
                <p>Мунара Караханийлер доору менен байланышкан.
                Ал Кыргызстандагы маанилүү археологиялык
                эстеликтердин бири болуп эсептелет.</p>
                <h3>🏛️ Эмне көрүүгө болот?</h3>
                <ul>
                    <li>Бурана мунарасы.</li>
                    <li>Байыркы шаар калдыктары.</li>
                    <li>Балбал таштар коюлган аймак.</li>
                    <li>Тарыхый жана археологиялык экспонаттар.</li>
                </ul>
                <h3>💡 Саякатчыларга кеңеш</h3>
                <p>Тарыхый жайды кыдырганда маалымат тактайларын
                окуп, эстеликтерди сактоо эрежелерин карман.</p>
            `,
            ru: `
                <p>Башня Бурана — известный исторический памятник
                в Чуйской долине, на территории древнего Баласагуна.</p>
                <h3>📜 История</h3>
                <p>Башня связана с эпохой Караханидов
                и считается важным археологическим памятником.</p>
                <h3>🏛️ Что посмотреть?</h3>
                <ul>
                    <li>Башню Бурана.</li>
                    <li>Остатки древнего города.</li>
                    <li>Каменные изваяния — балбалы.</li>
                    <li>Исторические и археологические экспонаты.</li>
                </ul>
                <h3>💡 Советы</h3>
                <p>Читайте информационные таблички
                и соблюдайте правила охраны памятников.</p>
            `,
            en: `
                <p>Burana Tower is a famous historical monument
                in the Chuy Valley, located at the site of
                the ancient city of Balasagun.</p>
                <h3>📜 History</h3>
                <p>The tower is associated with the
                Karakhanid era and is an important
                archaeological monument.</p>
                <h3>🏛️ What to see</h3>
                <ul>
                    <li>Burana Tower.</li>
                    <li>Remains of the ancient city.</li>
                    <li>Traditional stone balbals.</li>
                    <li>Historical and archaeological exhibits.</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Read information signs and follow
                heritage preservation rules.</p>
            `
        }
    },
    jeti: {
        title: {
            ky: "⛰️ Жети-Өгүз",
            ru: "⛰️ Джети-Огуз",
            en: "⛰️ Jeti-Oguz"
        },
        image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80",
        description: {
            ky: `
                <p>Жети-Өгүз — Ысык-Көл облусундагы кооз
                капчыгайлардын бири. Ал кызыл аскалары
                жана тоолуу жаратылышы менен белгилүү.</p>
                <h3>📍 Жайгашкан жери</h3>
                <p>Каракол шаарына жакын, Ысык-Көл облусунда.</p>
                <h3>❤️ Белгилүү аскалар</h3>
                <p>Бул аймактагы кызыл аскалар өзгөчө көрүнүшү
                менен туристтердин көңүлүн бурат.</p>
                <h3>🥾 Эмне кылса болот?</h3>
                <ul>
                    <li>Капчыгайда сейилдөө.</li>
                    <li>Тоолуу пейзаждарды сүрөткө тартуу.</li>
                    <li>Жергиликтүү жаратылышты изилдөө.</li>
                    <li>Белгиленген маршруттар менен жүрүү.</li>
                </ul>
                <h3>💡 Кеңештер</h3>
                <p>Жолго чыгардан мурда аба ырайын текшер.
                Аскаларга кооптуу жерлерден чыкпа.</p>
            `,
            ru: `
                <p>Джети-Огуз — красивое ущелье в
                Иссык-Кульской области, известное
                красными скалами и горными пейзажами.</p>
                <h3>📍 Расположение</h3>
                <p>Недалеко от Каракола, Иссык-Кульская область.</p>
                <h3>❤️ Знаменитые скалы</h3>
                <p>Красные скальные образования привлекают
                внимание путешественников.</p>
                <h3>🥾 Чем заняться?</h3>
                <ul>
                    <li>Гулять по ущелью.</li>
                    <li>Фотографировать горные пейзажи.</li>
                    <li>Изучать местную природу.</li>
                    <li>Следовать обозначенным маршрутам.</li>
                </ul>
                <h3>💡 Советы</h3>
                <p>Проверь погоду и не поднимайся
                на опасные участки скал.</p>
            `,
            en: `
                <p>Jeti-Oguz is a beautiful gorge in
                Issyk-Kul Region, known for its red rocks
                and mountain scenery.</p>
                <h3>📍 Location</h3>
                <p>Near Karakol in Issyk-Kul Region.</p>
                <h3>❤️ Famous rock formations</h3>
                <p>The distinctive red rocks attract
                visitors from many places.</p>
                <h3>🥾 Things to do</h3>
                <ul>
                    <li>Walk through the gorge.</li>
                    <li>Photograph mountain scenery.</li>
                    <li>Explore the local environment.</li>
                    <li>Follow designated trails.</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Check the weather and avoid dangerous
                climbing areas.</p>
            `
        }
    },
    suleiman: {
        title: {
            ky: "🕌 Сулайман-Тоо",
            ru: "🕌 Сулайман-Тоо",
            en: "🕌 Sulaiman-Too"
        },
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
        description: {
            ky: `
                <p>Сулайман-Тоо — Ош шаарынын борборунда
                жайгашкан белгилүү ыйык тоо жана тарыхый жай.
                Ал Борбордук Азиянын маданий мурасында
                өзгөчө орунду ээлейт.</p>
                <h3>📍 Жайгашкан жери</h3>
                <p>Кыргызстандын түштүгүндөгү Ош шаарында.</p>
                <h3>📜 Тарыхы жана маданияты</h3>
                <p>Сулайман-Тоо кылымдар бою зыярат кылуучу
                жана маданий мааниге ээ жер болуп келген.
                Ал ЮНЕСКОнун Дүйнөлүк мурастар тизмесине кирген.</p>
                <h3>🏛️ Эмне көрүүгө болот?</h3>
                <ul>
                    <li>Тоонун кооз көрүнүштөрү.</li>
                    <li>Тарыхый жана маданий жайлар.</li>
                    <li>Музей жана маалымат экспозициялары.</li>
                    <li>Ош шаарынын көрүнүшү.</li>
                </ul>
                <h3>💡 Кеңештер</h3>
                <p>Ыңгайлуу бут кийим кийип, тарыхый
                эстеликтерди урматта.</p>
            `,
            ru: `
                <p>Сулайман-Тоо — известная священная гора
                и историческое место в центре города Ош.
                Она занимает особое место в культурном
                наследии Центральной Азии.</p>
                <h3>📍 Расположение</h3>
                <p>Город Ош на юге Кыргызстана.</p>
                <h3>📜 История и культура</h3>
                <p>Гора на протяжении веков была местом
                паломничества. Она включена в список
                Всемирного наследия ЮНЕСКО.</p>
                <h3>🏛️ Что посмотреть?</h3>
                <ul>
                    <li>Виды на гору и город.</li>
                    <li>Исторические и культурные места.</li>
                    <li>Музейные экспозиции.</li>
                    <li>Панораму города Ош.</li>
                </ul>
                <h3>💡 Советы</h3>
                <p>Надень удобную обувь и бережно относись
                к историческим памятникам.</p>
            `,
            en: `
                <p>Sulaiman-Too is a famous sacred mountain
                and historic site in the centre of Osh.
                It has an important place in Central Asian
                cultural heritage.</p>
                <h3>📍 Location</h3>
                <p>Osh, southern Kyrgyzstan.</p>
                <h3>📜 History and culture</h3>
                <p>The mountain has been a place of pilgrimage
                for centuries. It is included on the UNESCO
                World Heritage List.</p>
                <h3>🏛️ What to see</h3>
                <ul>
                    <li>Views of the mountain and city.</li>
                    <li>Historic and cultural sites.</li>
                    <li>Museum exhibitions.</li>
                    <li>Panoramic views of Osh.</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Wear comfortable shoes and respect
                the historic monuments.</p>
            `
        }
    }
};
// ======================================
// 3. ТИЛДИ КОТОРУУ
// ======================================
const languageSelect = document.getElementById("language");
function currentLanguage() {
    return languageSelect.value;
}
function translatePage() {
    const lang = currentLanguage();
    const words = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (words[key]) {
            element.textContent = words[key];
        }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (words[key]) {
            element.placeholder = words[key];
        }
    });
    document.documentElement.lang = lang;
    // Эгер маалымат терезеси ачык болсо, анын тилин да өзгөртүү
    const modal = document.getElementById("detailsModal");
    if (modal.classList.contains("show")) {
        const place = modal.dataset.place;
        if (place) {
            renderDetails(place);
        }
    }
}
languageSelect.addEventListener("change", translatePage);
// ======================================
// 4. КЕНЕНИРЭЭК МААЛЫМАТ ТЕРЕЗЕСИ
// ======================================
const modal = document.getElementById("detailsModal");
const detailsContent = document.getElementById("detailsContent");
function renderDetails(place) {
    const info = placeInfo[place];
    if (!info) {
        return;
    }
    const lang = currentLanguage();
    const title = info.title[lang];
    const description = info.description[lang];
    detailsContent.replaceChildren();
    const heading = document.createElement("h2");
    heading.id = "modalTitle";
    heading.textContent = title;
    const image = document.createElement("img");
    image.src = info.image;
    image.alt = title;
    const descriptionBox = document.createElement("div");
    descriptionBox.innerHTML = description;
    detailsContent.append(
        heading,
        image,
        descriptionBox
    );
    modal.dataset.place = place;
}
function showDetails(place) {
    renderDetails(place);
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.getElementById("closeModal").focus();
}
function closeDetails() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}
document.getElementById("closeModal").addEventListener(
    "click",
    closeDetails
);
// Терезенин сыртын басканда жабылат
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeDetails();
    }
});
// Escape баскычы менен жабылат
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeDetails();
    }
});
// ======================================
// 5. ЖЕРЛЕРДИ ИЗДӨӨ
// ======================================
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");
    let visibleCount = 0;
    cards.forEach(card => {
        const searchableText = (
            card.innerText + " " + card.dataset.search
        ).toLowerCase();
        const found = searchableText.includes(query);
        card.hidden = !found;
        if (found) {
            visibleCount++;
        }
    });
    document.getElementById("noResults").hidden =
        visibleCount !== 0;
});
// ======================================
// 6. БРОНДОО ФОРМАСЫ
// ======================================
// Календарда бүгүнкү күндөн мурдагы даталарды тандабоо
const dateInput = document.getElementById("date");
const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");
dateInput.min = localToday;
document.getElementById("bookingForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        const hotel = document.getElementById("hotel").value;
        const date = dateInput.value;
        const guests = Number(
            document.getElementById("guests").value
        );
        const email = document.getElementById("email").value.trim();
        const result = document.getElementById("bookingResult");
        const lang = currentLanguage();
        result.textContent = "";
        if (!date || !email || !guests) {
            result.textContent = {
                ky: "Бардык талааларды толтур.",
                ru: "Заполните все поля.",
                en: "Please fill in all fields."
            }[lang];
            return;
        }
        if (date < localToday) {
            result.textContent = {
                ky: "Өткөн күндү тандай албайсың.",
                ru: "Нельзя выбрать прошедшую дату.",
                en: "You cannot choose a date in the past."
            }[lang];
            return;
        }
        if (guests < 1 || guests > 20) {
            result.textContent = {
                ky: "Коноктордун саны 1ден 20га чейин болушу керек.",
                ru: "Количество гостей должно быть от 1 до 20.",
                en: "The number of guests must be between 1 and 20."
            }[lang];
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            result.textContent = {
                ky: "Email дарегин туура жаз.",
                ru: "Введите корректный email.",
                en: "Please enter a valid email address."
            }[lang];
            return;
        }
        const messages = {
            ky: "Брондоо өтүнүчү даярдалды!",
            ru: "Заявка на бронирование подготовлена!",
            en: "Your booking request has been prepared!"
        };
        result.textContent =
            messages[lang] +
            "\n\n" +
            (lang === "ky" ? "Мейманкана: " :
             lang === "ru" ? "Отель: " : "Hotel: ") +
            hotel +
            "\n" +
            (lang === "ky" ? "Келүү күнү: " :
             lang === "ru" ? "Дата заезда: " : "Arrival date: ") +
            date +
            "\n" +
            (lang === "ky" ? "Коноктор: " :
             lang === "ru" ? "Гости: " : "Guests: ") +
            guests +
            "\n\n" +
            ({
                ky: "Бул демо версия. Чыныгы брондоо жүргүзүлгөн жок.",
                ru: "Это демонстрационная версия. Реальное бронирование не выполнено.",
                en: "This is a demo. No real booking has been made."
            }[lang]);
    }
);