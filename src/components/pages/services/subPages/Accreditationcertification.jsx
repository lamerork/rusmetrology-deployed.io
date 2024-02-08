import { useNavigate } from "react-router-dom";

import Footer from "../../../Footer";

import IMG6 from "../../../../img/Services/akkred.jpg";

function Accreditationcertification() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        {" "}
        <div className=" text-left animate-flip-up animate-ease-out pt-[6rem] pr-0 pb-[2rem] xl:pt-[6rem] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[69px]  bg-white">
          <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <h1 className="mt-0 mr-auto mb-[1.07em] w-fit  text-2xl lg:text-4xl border-b-4 border-red-700/90 pb-[.5rem]">
              Подготовка к аккредитации
            </h1>
            <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Зачем это необходимо?
              </h2>
            </div>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem] mb-[1.2em]">
                Для организации, которые занимаются разработкой и выпуском
                средств измерений часто экономически выгодно иметь собственную
                метрологическую лабораторию для осуществления метрологического
                обеспечения производства.
                <br />
                Для проведения испытаний в целях утверждения типа, поверки
                средств измерений, аттестации методик измерений необходимо
                пройти процедуру компетентности (аккредитацию).
              </p>
            </div>
            <div className="flex flex-col-reverse mb-[1rem] lg:flex-row  lg:my-[4rem] w-full">
              <div className="flex items-center justify-center md:justify-normal w-full h-full  ">
                <div className=" flex lg:flex-col w-[90%] text-justify">
                  <div className="text-[1.1rem]">
                    <p className="mb-[1rem]">
                      <b>
                        Аккредитация ораганизации проводится в соответсвии с:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Федеральный закон "Об аккредитации в национальной системе
                      аккредитации" от 28.12.2013 N 412-ФЗ;
                    </li>
                    <li className="mb-[1rem]">
                      Приказ Министерства экономического развития РФ от 28
                      октября 2020 года N 707.
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
              <p className="pt-[1rem]">
                Процедура аккредитации добровольная и проводится ФСА
                Россаккрдитация. Для этого необходимо подать электронное
                заявление, с комплектом подтверждающих документов в
                информационной системе ФГИС Росаккредитация, предварительно
                подтвердив свой аккаунт через портал Госуслуги.
              </p>
            </div>
            <div>
              <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Этапы прохождения процедуры подтверждения компетентности
                </h2>
                <div className="max-w-none my-0 mx-auto mb-[2rem] xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[900px] text-justify text-[1.1rem]">
                  <p className="mb-0">
                    Для проведения аккредитации ФСА Росаккредитация назначает
                    экспертную организацию, членов экспертной группы и
                    председателя комиссии.
                  </p>
                  <p className="mt-[1rem] mb-[1rem]">
                    Процедура подтверждения компетентности делится на два этапа:
                  </p>
                  <div className=" lg:bg-white lg:px-0 lg:py-0 text-left">
                    <li className="mb-[1rem]">
                      Экспертиза поданной документации;
                    </li>
                    <li className="mb-[1rem]">
                      Выездная проверка или проверка в формате
                      видео-конференцсвязи.
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] text-justify mb-[2rem]"></div>
            <div className="my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Что необходимо для прохождения аккредитации?
              </h2>
              <p className="mb-[1.2em] mt-0 text-[1.1rem] text-justify">
                Аккредитованные организации предоставляют услуги в соответствии
                с заявленной областью аккредитации. Область аккредитации
                разрабатывается на основании потребности и оснащенности
                организации. В рамках заявленной области аккредитации и
                проводится подтверждение компетентности.
              </p>
              <div className=" my-0 mx-auto max-w-[1094px]">
                <div className="relative  px-[15px] lg:py-[2rem] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-orange-300 before:will-change-auto before:text-left ">
                  <div className="relative text-[1.1rem] my-0 mx-auto max-w-none xl:max-w-[960px] 2xl:max-w-[886px] 3xl:max-w-[886px] px-[15px] py-[30px] lg:p-[30px]">
                    <p className="mb-[2rem] mt-0 text-[1.1rem]">
                      <b>
                        Комиссия при проведении аккредитации будет проверять:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Техническую оснащенность, а именно: наличие эталонов и
                      средств измерений, стандартных образцов и испытательного
                      оборудования их метрологическое обеспечение, а также
                      наличие вспомогательного оборудования;
                    </li>
                    <li className="mb-[1rem]">
                      Количество и квалификацию персонала, участвующего в
                      проведении работ в соответствии с областью аккредитации;
                    </li>
                    <li className="mb-[1rem]">
                      Наличие по месту осуществления деятельности помещений,
                      отвечающие требованиям проведения работ;
                    </li>{" "}
                    <li>
                      Наличие внедренной системы управления и утвержденной
                      документации.
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <h1 className=" mr-auto mb-[1.07em] mt-[2rem]  text-2xl lg:text-4xl">
              Преимущества работы с Русметрология
            </h1>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem] mb-[1.2em]">
                Мы имеем многолетний опыт работы в сфере метрологического
                обеспечения, профессиональную команду и напрямую работаем с
                государственными метрологическими организациями, чем
                обеспечиваем самые быстрые сроки и оптимальные цены наших услуг.
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

export default Accreditationcertification;
