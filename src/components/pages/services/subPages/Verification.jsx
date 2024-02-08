import { useNavigate } from "react-router-dom";

import Footer from "../../../Footer";

import IMG6 from "../../../../img/Services/poverka1.jpg";

function Verification() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className=" text-left animate-flip-up animate-ease-out pt-[6rem]  pr-0 pb-[2rem] xl:pt-[6rem] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[69px]  bg-white">
          {" "}
          <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <h1 className="mt-0 mr-auto mb-[1.07em]  text-2xl lg:text-4xl border-b-4 border-red-700/90 pb-[.5rem] w-fit">
              Поверка средств измерений
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
                поверены в соответствии со ст.13 Федерального закона от
                26.06.2008 N 102-ФЗ. <br />
                Результатом поверки средства измерений в соответствии с ФЗ-102
                являются сведения внесенные в Федеральный информационный фонд по
                обеспечению единства измерений.
              </p>
            </div>
            <div className="flex flex-col-reverse mb-[1rem] lg:flex-row lg:my-[4rem] w-full">
              <div className="flex items-center justify-center md:justify-normal w-full h-full  ">
                <div className=" flex lg:flex-col w-[90%] text-justify">
                  <div className="text-[1.1rem]">
                    <p className="text-[1.1rem] mb-[1rem]">
                      <b>
                        {" "}
                        Поверка средств измерений проводится в соответствии с:
                      </b>
                    </p>
                    <li className="text-[1.1rem] mb-[1rem]">
                      Федеральный закон "Об обеспечении единства измерений" от
                      26.06.2008 N 102-ФЗ;
                    </li>
                    <li className="text-[1.1rem] mb-[1rem]">
                      Приказ Министерства промышленности и торговли РФ от
                      31.07.2020 N 2510;
                    </li>
                    <li className="text-[1.1rem] mb-[1rem]">
                      Методики поверки средств измерений, включенные в
                      государственные стандарты или разработанные при
                      утверждении типа средства измерений;
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
            <div className="max-w-none my-0 mx-auto xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[900px] mb-[2rem] text-[1.1rem] text-justify">
              <p className="text-[1.1rem] mb-0">
                Поверка средств измерений бывает первичная и периодическая.
                Первичная поверкой проводится после выпуска средства измерения
                из производства, либо при вводе его в эксплуатацию, а также
                после ремонта. Периодическая поверка проводится в процессе
                эксплуатации согласно межповерочному интервалу.
              </p>
              <p className="text-[1.1rem] pt-[1rem]">
                Поверку средств измерений проводят аккредитованные организации,
                имеющие в наличие необходимые эталоны, специалистов, помещения и
                внедренную систему менеджмента.
              </p>
            </div>
            <div>
              <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Что необходимо для передачи средства измерений в поверку?
                </h2>
                <div className="max-w-none my-0 mx-auto mb-[2rem] xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[900px] text-justify text-[1.1rem]">
                  <p className="mb-0">
                    Поверке подлежать средства измерений утвержденного типа,
                    которым присвоен регистрационный номер в Федеральном
                    информационном фонде обеспечения единства измерений.
                  </p>
                  <p className="mt-[1rem] mb-[1rem]">
                    Для проведения поверки, в аккредитованную организацию
                    направляют:
                  </p>
                  <div className=" lg:bg-white lg:px-0 lg:py-0 text-left">
                    <li className="mb-[1rem]">Исправное средство измерений;</li>
                    <li className="mb-[1rem]">
                      Комплект эксплуатационной документации и обородувания в
                      соответствии с описанием типа;
                    </li>
                    <li className="mb-[1rem]">
                      Методику поверки на конкретное средство измерений;
                    </li>
                    <li className="mb-[1rem]">
                      Свидетельство о поверке за предыдущей период.
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] text-justify mb-[2rem]"></div>
            <div className="my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Свидетельство о поверке средства измерений
              </h2>

              <p className="mb-[1.2em] mt-0 text-[1.1rem] text-justify">
                Согласно ФЗ-102 по письменному заявлению Заказчика
                аккредитованная организация может выдавать свидетельства о
                поверке на бумажном носителе. Протоколы поверки оформляются в
                соответствие с требованиями методики поверки.
              </p>
              <div className=" my-0  mx-auto max-w-[1094px] shadow-lg">
                <div className="relative  px-[15px] lg:py-[2rem] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-orange-300 before:will-change-auto before:text-left ">
                  <div className="relative text-[1.1rem] my-0 mx-auto max-w-none xl:max-w-[960px] 2xl:max-w-[960px] 3xl:max-w-[960px] px-[15px] py-[30px] lg:p-[30px]">
                    <p className="mb-[2rem] mt-0 text-[1.1rem]">
                      <b>
                        Свидетельство о поверке в соответствии с Приказом
                        Министерства промышленности и торговли РФ от 31.07.2020
                        N 2510 содержит:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Номер свидетельства о поверке;
                    </li>
                    <li className="mb-[1rem]">
                      Дату до которой действует свидетельство о поверке,
                      включительно;
                    </li>
                    <li className="mb-[1rem]">
                      Название аккредитованного юр. лица или ИП, выполнившего
                      поверку и номер регистрации в реестре аккредитованных лиц;
                    </li>{" "}
                    <li className="mb-[1rem]">
                      Заводской (серийный, инвентарный) номер;
                    </li>
                    <li className="mb-[1rem]">
                      Название документа, на основании которого выполнена
                      поверка;
                    </li>
                    <li className="mb-[1rem]">
                      Наименование, тип, заводской номер, регистрационный номер
                      (при наличии), разряд, класс или погрешность эталонов,
                      применяемых при поверке;
                    </li>
                    <li className="mb-[1rem]">
                      Перечень влияющих факторов, нормированных в документе на
                      методику поверки, с указанием их значений;
                    </li>
                    <li className="mb-[1rem]">Заключение о пригодности СИ;</li>
                    <li className="mb-[1rem]">Знак поверки;</li>
                    <li className="mb-[1rem]">
                      Номер записи сведений о результатах поверки в ФИФ ОЕИ;
                    </li>
                    <li className="mb-[1rem]">
                      Должность руководителя подразделения, инициалы, фамилия,
                      подпись и сведения о поверителе ;
                    </li>
                    <li>Дата поверки.</li>
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
                проведения поверки средств измерений в соответствии с областью
                аккредитации.
              </p>{" "}
              <p className="text-[1.1rem] mb-[1.2em]">
                В случае если Наша область аккредитации не распространяется на
                заявленные Вами работы, Мы подберем Вам лучшее предложение от
                Наших партнеров по оптимальной цене.
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

export default Verification;
