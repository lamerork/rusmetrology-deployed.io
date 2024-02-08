import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../../Footer";

import IMG6 from "../../../../img/Services/Ispit.jpg";

function Typeassertion() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className=" text-left animate-flip-up animate-ease-out pt-[6rem]  pr-0 pb-[2rem] xl:pt-[6rem] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[69px]  bg-white">
          <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <h1 className="mt-0 mr-auto mb-[1.07em]  text-2xl lg:text-4xl border-b-4 border-red-700/90 pb-[.5rem] w-fit">
              Утверждение типа средств измерений
            </h1>
            <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Зачем это необходимо?
              </h2>
            </div>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem] mb-[1.2em]">
                Средства измерений, применяемые в сфере государственного
                регулирования обеспечения единства измерений, должны быть
                утвержденных типов согласно ст. 12 102-ФЗ. Утвержденные типы СИ
                вносятся в Федеральный информационный фонд по обеспечению
                единства измерений (ФИФ). Для того что бы средство измерений
                попало в ФИФ и могло и применяться согласно ФЗ-102, оно подлежит
                испытаниям.
              </p>
            </div>
            <div className="flex flex-col-reverse mb-[1rem] lg:flex-row lg:my-[4rem] w-full">
              <div className="flex items-center justify-center md:justify-normal w-full h-full  ">
                <div className=" flex lg:flex-col w-[90%] text-justify">
                  <div className="text-[1.1rem]">
                    <p className="text-[1.1rem] mb-[1rem]">
                      <b>
                        Утверждения типа средств измерений проводится в
                        соответствии с:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Федеральный закон "Об обеспечении единства измерений" от
                      26.06.2008 N 102-ФЗ;
                    </li>
                    <li className="mb-[1rem]">
                      Приказ Министерства промышленности и торговли РФ от 28
                      августа 2020 года N 2905;
                    </li>
                    <li className="mb-[1rem]">
                      Приказ Федерального агентства по техническому
                      регулированию и метрологии от 12 ноября 2018 года N 2346;
                    </li>
                    <li>
                      Рекомендация ФГБУ "Всероссийский научно-исследовательский
                      институт метрологической службы" МИ 3650-2022.
                    </li>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-end justify-center w-full ">
                <div className=" flex flex-wrap w-full lg:pl-[2rem] justify-end items-end mb-[1rem]">
                  <img
                    className="w-full h-full object-cover"
                    src={IMG6}
                    alt="img"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-none my-0 mx-auto xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[900px] mb-[2rem] text-justify text-[1.1rem]">
              <p className="mb-0">
                Для внесения средств измерений в ФИФ, они должны проходить
                испытания в целях утверждения типа, по специально разработанной
                программе, с составлением акта и протоколов испытаний, с
                подготовкой проекта описания типа и методики поверки СИ.
              </p>
              <p className="pt-[1rem]">
                Испытания в целях утверждения типа и разработку документации для
                испытаний проводят аккредитованные организации, имеющие в
                наличие необходимое оборудование, специалистов, помещения и
                внедренную систему менеджмента. Для начала проведения испытаний
                в аккредитованную организацию направляется заявка.
              </p>
            </div>
            <div>
              <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Заявка на проведение испытаний
                </h2>
                <div className="max-w-none my-0 mx-auto mb-[2rem] xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[900px] text-justify text-[1.1rem]">
                  <p className="mb-0">
                    Заявка на проведение испытаний оформляется в соответствии с
                    Рекомендацией ФГБУ "Всероссийский научно-исследовательский
                    институт метрологической службы" МИ 3650-2022.
                  </p>
                  <p className="mt-[1rem] mb-[1rem]">
                    В комплекте с заявкой в аккредитованную организации
                    направляются следующие документы:
                  </p>
                  <div className=" lg:bg-white lg:px-0 lg:py-0 text-left">
                    <li className="mb-[1rem]">
                      Эксплуатационная документация;
                    </li>
                    <li className="mb-[1rem]">
                      Фото внешнего вида средств измерений;
                    </li>
                    <li className="mb-[1rem]">Декларация уровня защиты ПО;</li>
                    <li className="mb-[1rem]">
                      Разрешительная документация (Декларации и сертификации о
                      безопасности (ТР ТС);
                    </li>
                    <li>
                      Для СИ российского производства: Технические условия,
                      Уведомление о начале производственной деятельности.
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] text-justify mb-[2rem]"></div>
            <div className="my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Процедура утверждения типа
              </h2>
              <p className="mb-[1.2em] mt-0 text-[1.1rem] text-justify">
                Государственная услуга по утверждению типа средств измерений
                предоставляется в соответствии с Приказом Министерства
                промышленности И торговли РФ от 28 августа 2020 года N 2905 и
                Приказом Федерального агентства по техническому регулированию и
                метрологии от 12 ноября 2018 года N 2346.
              </p>
              <div className=" my-0  mx-auto max-w-[1094px]">
                <div className="relative px-[15px] lg:py-[2rem] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-orange-300 before:will-change-auto before:text-left ">
                  <div className="relative  text-[1.1rem] my-0 mx-auto max-w-none xl:max-w-[960px] 2xl:max-w-[886px] 3xl:max-w-[886px] px-[15px] py-[30px] lg:p-[30px]">
                    <div>
                      <p className="mb-[2rem] mt-0 text-[1.1rem]">
                        <b>
                          Полный комплект документации, предоставляемый в
                          Росстандарт, в соответствии с требованием нормативных
                          правовых актов РФ в области обеспечения единства
                          измерений:
                        </b>
                      </p>
                      <li className="mb-[1rem]">
                        Заявка на проведение испытаний в аккредитованную
                        организацию;
                      </li>
                      <li className="mb-[1rem]">
                        Документация по результатам испытаний;
                      </li>
                      <li className="mb-[1rem]">
                        Заключение о проверке результатов испытаний
                        уполномоченной организацией;
                      </li>{" "}
                      <li>
                        Заявление о предоставлении государственной услуги по
                        утверждению типа в Росстандарт.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className=" mr-auto mb-[1.07em] mt-[2rem]  text-2xl lg:text-4xl">
              Преимущества работы с Русметрология
            </h1>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem] mb-[1.2em]">
                Руcметрология имеет собственную аккредитованную лабораторию для
                проведения испытаний в целях утверждения типа в соответствии с
                областью аккредитации.
              </p>{" "}
              <p className="text-[1.1rem] mb-[1.2em]">
                В случае если Наша область аккредитации не распространяется на
                заявленные Вами работы, Мы подберем вам лучшее предложение от
                наших партнеров по оптимальной цене.
              </p>
              <p className="text-[1.1rem] mb-[1.2em]">
                Мы имеем многолетний опыт работы в сфере метрологического
                обеспечения, профессиональную команду и напрямую работаем с
                государственными метрологическими организациями, чем
                обеспечиваем самые быстрые сроки и оптимальную цену наших услуг.
              </p>
              <div className="mt-[1.5rem] lg:mt-[1rem] flex justify-end overflow-visible">
                <button
                  className="px-[1rem] py-[1rem] text-white bg-blue-950 border-[1px] border-white rounded-full text-[1rem] md:text-[1rem] hover:bg-white hover:text-black hover:border-[1px] hover:border-black "
                  onClick={() => navigate("/contacts")}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Typeassertion;
