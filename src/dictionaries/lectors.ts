import afanasyevaImg from './img/Afanasyeva.jpg';
import artImg from './img/Art.jpg';
import aitovImg from './img/Aitov.jpg';
import bugaevImg from './img/Bugaev.jpg';
import melzerSImg from './img/MelzerS.jpg';
import meltzerMImg from './img/MeltzerM.jpg';
import kostikovImg from './img/Kostikov.jpg';
import sundukovImg from './img/Sundukov.jpg';
import ogibalovImg from './img/Ogibalov.jpg';
import pokrovskayaImg from './img/Pokrovskaya.jpg';
import sayfullinImg from './img/Sayfullin.jpg';
import zhuravlevaImg from './img/Zhuravleva.jpg';
import darovskikhImg from './img/Darovskikh.jpg';
import zheurovaImg from './img/Zheurova.jpg';
import kryukovaImg from './img/Kryukova.jpg';
import gostyukhinaImg from './img/Gostyukhina.jpg';
import ogorodnikovaImg from './img/Ogorodnikova.jpg';
import ilyinaImg from './img/Ilyina.jpg';
import kochnevImg from './img/Kochnev.jpg';
import dudarevImg from './img/Dudarev.jpg';
import proninaImg from './img/Pronina.jpg';

type Lector = {
  name: string;
  avatar: string;
  description: string;
}

export const afanasyeva: Lector = {
  avatar: afanasyevaImg,
  name: 'Юлия Афанасьева',
  description: 'Руководитель территориального подразделения универсальной сети в Тюменской области Агенство, г. Ишим',
};

export const aitov: Lector = {
  avatar: aitovImg,
  name: 'Тимур Аитов',
  description: 'Директор по международному развитию Ассоциации "Финансовые инновации", заместитель председателя Комиссии по цифровым финансовым технологиям Совета Торгово-промышленной палаты Российской Федерации, руководитель Центра компетенций "Цифровизация финансовых технологий" Фонда развития цифровой экономики',
};

export const art: Lector = {
  avatar: artImg,
  name: 'Ян Арт',
  description: 'Главный редактор портала Finversia.ru, эксперт комитета Госдумы по финансовому рынку. Член-корреспондент Международной академии менеджмента (IAM). Член комиссии РСПП по банкам и банковской деятельности, совета Национальной ассоциации профессиональных коллекторских агентств (НАПКА)',
};

export const bugaev: Lector = {
  avatar: bugaevImg,
  name: 'Максим Бугаев',
  description: 'Главный бухгалтер первой рабочей группы ООО "ЭосФайн";. Высшее образование ТюмГУ по специальности "Финансы и кредит", стаж работы в финансовых подразделениях 15 лет, из них в должности главного бухгалтера 8 лет.',
};

export const darovskikh: Lector = {
  avatar: darovskikhImg,
  name: 'Юрий Даровских',
  description: 'Директор АНО « Западно-Сибирский региональный Центр медиации и права», кандидат юридических наук, почетный работник высшего профессионального образования РФ, тренер-медиатор.',
};

export const dudarev: Lector = {
  avatar: dudarevImg,
  name: 'Антон Дударев',
  description: 'Частный инвестор. Instagram-блоггер в сфере финансов. Финансовый волонтер ЦБ РФ',
};

export const pronina: Lector = {
  avatar: proninaImg,
  name: 'Светлана Пронина',
  description: 'Индивидуальный предприниматель с 20-летним стажем, экономист, психолог, тьютер. Сертифицированный консультант по финансовой грамотности проекта Минфина РФ',
};

export const gostyukhina: Lector = {
  avatar: gostyukhinaImg,
  name: 'Алена Гостюхина',
  description: 'Предприниматель более 7 лет. Амбассадор Европейской Юридической Службы, инвестор. Организатор проведения в Тюмени ежегодной акции «Всероссийский правовой диктант». Ученица Роберта Кийосаки и основатель в Тюмени клуба финансовой грамотности «Денежный поток».',
};

export const ilyina: Lector = {
  avatar: ilyinaImg,
  name: 'Екатерина Ильина',
  description: 'Директор АНО ДПО “Тюменский межрегиональный центр обучения”',
};

export const kochnev: Lector = {
  avatar: kochnevImg,
  name: 'Владимир Кочнев',
  description: 'Консультант психолог, тренер персонала, игропрактик. Предприниматель со стажем более 10 лет. Кризис управляющий',
};

export const kostikov: Lector = {
  avatar: kostikovImg,
  name: 'Игорь Костиков',
  description: 'Российский финансист, профессор, доктор экономических наук, один из основателей российского фондового рынка и один из основоположников теории эффективного рынка капитала и развития корпоративного управления в России.',
};

export const kryukova: Lector = {
  avatar: kryukovaImg,
  name: 'Крюкова Светлана',
  description: 'Коуч социальных и коммерческих проектов, политтехнолог, помощник депутата Тюменской областной Думы, руководитель маркетинга и PR сети Colizeum УрФО.',
};

export const mmelzer: Lector = {
  avatar: meltzerMImg,
  name: 'Михаил Мельцер',
  description: 'Председатель ТРО ОООП "ФинПотребСоюз", заместитель председателя Общественного совета Департамента социального развития Тюменской области',
};

export const smelzer: Lector = {
  avatar: melzerSImg,
  name: 'Светлана Мельцер',
  description: 'К.г.н., исполнительный директор ТРО ОООП "ФинПотребСоюз" , руководитель консультационно-методического центра финансовой грамотности в Тюменской области проекта Минфин РФ.',
};

export const nikitenko: Lector = {
  avatar: '',
  name: 'Юлия Никитенко',
  description: 'Экономист. Частная практика по финансовому консалтингу.',
};

export const ogibalov: Lector = {
  avatar: ogibalovImg,
  name: 'Алексей Огибалов',
  description: 'Финансовый советник. Страховая компания "Альянс ЖИЗНЬ"',
};

export const ogorodnikova: Lector = {
  avatar: ogorodnikovaImg,
  name: 'Ирина Огородникова',
  description: 'К. с. н, доцент кафедры экономики и финансов Финансово-экономического института Тюменского государственного университета Региональный координатор проекта «Содействие повышению уровня финансовой грамотности населения и развитию финансового образования в Российской Федерации»',
};

export const pokrovskaya: Lector = {
  avatar: pokrovskayaImg,
  name: 'Ирина Покровская',
  description: 'Собственник и директор аудиторской фирмы, член — корреспондент Международной Академии интеграции науки и бизнеса, член Союза писателей России, автор серии книг «Духовность в жизни делового человека», координатор программ по бизнесу Центра Духовного Развития (г. Москва).',
};

export const sayfullin: Lector = {
  avatar: sayfullinImg,
  name: 'Ришат Сайфулин',
  description: 'Руководитель компании «Сайфулин и партнеры», юрист, правозащитник.',
};

export const sundukov: Lector = {
  avatar: sundukovImg,
  name: 'Максим Сундуков',
  description: 'Ведущий экономист Сводно-экономического отдела Отделения Тюмень Уральского ГУ Банка России',
};

export const zhuravleva: Lector = {
  avatar: zhuravlevaImg,
  name: 'Татьяна Журавлева',
  description: 'Руководитель ТРОД «Союз социальных юристов» Практикующий юрист, правозащитник',
};

export const zheurova: Lector = {
  avatar: zheurovaImg,
  name: 'Екатерина Жеурова',
  description: 'Эксперт Национального центра финансовой грамотности. Консультант-методист по финансовой грамотности Проекта Минфина России. Представитель ФЭИ ТюмГУ по вопросам повышения финансовой грамотности.',
};
