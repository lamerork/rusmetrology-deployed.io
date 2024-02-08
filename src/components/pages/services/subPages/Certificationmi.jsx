import { useNavigate } from "react-router-dom";

import Footer from "../../../Footer";

import IMG6 from "../../../../img/Services/attest6.jpg";

function Certificationmi() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className=" text-left animate-flip-up animate-ease-out pt-[6rem] pr-0 pb-[2rem] xl:pt-[6rem] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[69px]  bg-white">
          <div className="w-full px-[15px] mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <h1 className="mt-0 mr-auto mb-[1.07em]  text-2xl lg:text-4xl border-b-4 border-red-700/90 pb-[.5rem] w-fit">
              Аттестация методик измерений
            </h1>
            <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Зачем это необходимо?
              </h2>
            </div>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem]  mb-[1.2em]">
                Методики (методы) измерений, предназначенные для выполнения
                прямых измерений, вносятся в эксплуатационную документацию на
                средства измерений. Подтверждение соответствия этих методик
                (методов) измерений обязательным метрологическим требованиям к
                измерениям осуществляется в процессе утверждения типов данных
                средств измерений. В остальных случаях подтверждение
                соответствия методик (методов) измерений обязательным
                метрологическим требованиям к измерениям осуществляется путем
                аттестации методик (методов) измерений.
              </p>
            </div>
            <div className="flex flex-col-reverse mb-[1rem] lg:flex-row lg:my-[4rem] w-full">
              <div className="flex items-center justify-center md:justify-normal w-full h-full  ">
                <div className=" flex lg:flex-col w-[90%] text-justify">
                  <div className="text-[1.1rem]">
                    <p className=" mb-[1rem]">
                      <b>
                        Аттестация методик измерений проводится в соответствии
                        с:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Федеральный закон "Об обеспечении единства измерений" от
                      26.06.2008 N 102-ФЗ;
                    </li>
                    <li className="mb-[1rem]">
                      Приказ Министерства промышленности и торговли РФ от 15
                      декабря 2015 г. N 4091;
                    </li>
                    <li>ГОСТ Р 8.563-2009.</li>
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

            <div className="max-w-none my-0 mx-auto xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[900px] mb-[2rem] text-justify text-[1.1rem] ">
              <p className="mb-0">
                Сведения об аттестованных методиках (методах) измерений
                передаются в Федеральный информационный фонд по обеспечению
                единства измерений проводящими аттестацию юридическими лицами и
                индивидуальными предпринимателями.
              </p>
              <p className="pt-[1rem]">
                Аттестация методик (методов) измерений включает исследование и
                подтверждение соответствия МИ установленным метрологическим
                требованиям. Гарантировать получение результатов с
                установленными показателями точности могут только аттестованные
                и утвержденные МИ.
              </p>
            </div>
            <div>
              <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Документы необходимы для аттестации методики измерений
                </h2>
                <div className="max-w-none my-0 mx-auto mb-[2rem] xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[886px] text-justify text-[1.1rem] ">
                  <p className="mb-0">
                    Для проведения аттестации МИ в аккредитованную организацию
                    направляется Заявка о проведении аттестации МИ.
                  </p>
                  <p className="mt-[1rem] mb-[1rem]">
                    В комплекте с заявкой в аккредитованную организации
                    направляются следующие документы:
                  </p>
                  <div className=" lg:bg-white lg:px-0 lg:py-0 text-left">
                    <li className="mb-[1rem]">
                      Проект документа, регламентирующего метод измерений с
                      описанием;
                    </li>
                    <li className="mb-[1rem]">
                      Исходные данные на разработку методики;
                    </li>
                    <li className="">
                      Программу и результаты оценивания показателей точности
                      измерений, включая материалы теоретических и
                      экспериментальных исследований.
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] text-justify mb-[2rem]"></div>
            <div className="my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Процедура аттестации методики измерений
              </h2>
              <p className="mb-[1.2em] mt-0 text-[1.1rem]  text-justify">
                Аттестация методик измерений проводится в соответствии с
                Приказом Министерства промышленности и торговли РФ от 15 декабря
                2015 г. N 4091 или ГОСТ Р 8.563-2009 и включает в себя два
                этапа.
              </p>
              <div className=" my-0 mx-auto max-w-[1094px]">
                <div className="relative  px-[15px] lg:py-[2rem] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-orange-300 before:will-change-auto before:text-left ">
                  <div className="relative text-[1.1rem] my-0 mx-auto max-w-none xl:max-w-[960px] 2xl:max-w-[886px] 3xl:max-w-[886px] px-[15px] py-[30px] lg:p-[30px]">
                    <p className="mb-[2rem] mt-0 ">
                      <b>
                        Рассмотрение, на соответствие критериям аттестации в
                        части:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Полноты изложения требований и описания операций;
                    </li>
                    <li className="mb-[1rem]">
                      Наличия и обоснованности показателей точности;
                    </li>
                    <li className="mb-[2rem]">
                      Соответствие требованиям нормативно-правовых документов в
                      области обеспечения единства измерений;
                    </li>{" "}
                    <p className="mb-[2rem] mt-0 ">
                      <b>Исследование, для подтверждения следующего:</b>
                    </p>
                    <li className="mb-[1rem]">
                      Метод измерения соответствует целевому назначению;
                    </li>
                    <li className="mb-[1rem]">
                      Условия выполнения измерений соответствует требованиям к
                      применению данной методики;
                    </li>
                    <li className="mb-[1rem]">
                      Показатели точности и форма представления результатов
                      соответствуют метрологическим требованиям к измерениям;
                    </li>
                    <li className="mb-[1rem]">
                      Обеспечивается прослеживаемость результатов измерений к
                      государственным первичным эталонам единиц величин;
                    </li>
                    <li>
                      Запись результатов соответствует требованиям к единицам
                      величин, шкалам величин, допущенных к применению в
                      Российской Федерации;
                    </li>
                  </div>
                </div>
              </div>
              <p className="mb-[1.2em] mt-[1rem] text-[1.1rem]  text-justify">
                Результатом экспертизы и устранения всех замечаний является
                заключение о соответствии МИ. На основании Заключения оформляют
                свидетельство об аттестации методики (метода) измерений, которое
                содержит выводы о соответствии МИ метрологическим требованиям.
              </p>
            </div>
            <h1 className=" mr-auto mb-[1.07em] mt-[2rem]  text-2xl lg:text-4xl">
              Преимущества работы с Русметрология
            </h1>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem]  mb-[1.2em]">
                Руcметрология имеет аккредитацию на право проведения аттестации
                методик измерений в соответствии с областью аккредитации.
              </p>{" "}
              <p className="text-[1.1rem]  mb-[1.2em]">
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
            </div>
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
      </main>
      <Footer />
    </>
  );
}

export default Certificationmi;
