/* eslint-disable max-len */
/* eslint-disable indent */

import React from 'react';
import { Layout, Typography } from 'antd';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header/Header';

import s from './RoundTable.module.sass';

const { Title, Paragraph } = Typography;

const RoundTable: React.FC = () => (
  <Layout>
    <Header />
    <Title className={s.title}>Круглый стол</Title>
    <Layout className={s.section}>
      <div className={s.sectionContent}>
        <Title level={2} className={s.subtitle}>Программа работы круглого стола</Title>
        <Title level={3} className={s.subtitle}>Проблемы и перспективы развития
          финансовой грамотности населения в Тюменской области
        </Title>
        <Paragraph>
          Место и время проведения:
          <ul>
            <li>18 ноября 2020 года</li>
            <li>Региональный центр «Семья», ул. Геологоразведчиков 14а</li>
          </ul>
        </Paragraph>
        <Paragraph>
          Модератор: Светлана Петровна Мельцер, к.г.н., исполнительный директор
          ТРО ОООП «ФинПотребСоюз», руководитель консультационно-методического центра
          финансовой грамотности в Тюменской области проекта Минфин РФ.
        </Paragraph>

        <Paragraph>
          Приветственное слово.
          <ol>
            <li>Костиков Игорь Владимирович, председатель общероссийской
              общественной организации потребителей «Союз защиты
              прав потребителей финансовых услуг»
            </li>
            <li>Попов Сергей Аркадьевич, управляющий Отделением по Тюменской
              области Уральского главного управления Банка России
            </li>
            <li>Перминова Елена Владимировна,
              руководитель регионального центра «Семья»
            </li>
            <li>Толстых Сергей Деонисимович, директор
              департамента экономики и стратегического развития Администрации города Тюмени.
            </li>
            <li>Мельцер Михаил Михайлович, председатель ТРО ОООП «ФинПотребСоюз»,
              заместитель председателя Общественного совета
              Департамента социального развития Тюменской области
            </li>
          </ol>
        </Paragraph>
        <Paragraph>
          Работа круглого стола
          <ol>
            <li>
              Мельцер Светлана Петровна, к.г.н., исполнительный директор ТРО ОООП
              «ФинПотребСоюз», руководитель консультационно-методического
              центра финансовой грамотности в Тюменской области проекта Минфин РФ.
              <i>О работе первого регионального Финансового фестиваля
                для всей семьи в городе Тюмени.
              </i>
            </li>
            <li>Попов Сергей Аркадьевич, управляющий
              Отделением по Тюменской области Уральского главного управления Банка России

              <i>О работе Отделения по Тюменской области Уральского главного
                управления Банка России в направлении повышения
                финансовой грамотности населения.
              </i>
            </li>
            <li>Соколова Надежда Анатольевна,
              заместитель начальника отдела защиты прав потребителей
              Управления Роспотребнадзора по Тюменской области
              <i>О работе отдела защиты прав потребителей Управления Роспотребнадзора
                по Тюменской области в направлении финансовой грамотности.
              </i>
            </li>
            <li>Жеурова Екатерина Геннадьевна, эксперт Национального
              центра финансовой грамотности. Консультант-методист по финансовой
              грамотности Проекта Минфина России. Представитель ФЭИ ТюмГУ
              по вопросам повышения финансовой грамотности.

              <i>Работа Финансово-экономического института
                Тюменского государственного университета в направлении
                финансовой грамотности взрослого населения в Тюменской области.
              </i>
            </li>
            <li>
              Пересторонин Александр Леонидович, сопредседатель
              регионального штаба ОНФ в Тюменской области,
              директор по работе со СМИ региональной ассоциации по коммуникациям.

              <i>Финансовая журналистика – развитие и перспективы в Тюменской области.</i>
            </li>
            <li>Степанов Андрей Эдуардович, Уполномоченный по правам ребенка в Тюменской области
            </li>
            <li>Абдуллин Эдуард Раильевич Президент Союза «Торгово-промышленная палата Тюменской области».
            </li>
            <li>Представитель (по согласованию) департамента финансов Тюменской области
            </li>
            <li>Представитель (по согласованию) департамента образования Тюменской области
            </li>
            <li>Представитель (по согласованию) департамента социального развития Правительства ТО
            </li>
          </ol>
        </Paragraph>
      </div>
    </Layout>
    <Footer />
  </Layout>
);

export default RoundTable;
