import { useNavigate } from "react-router-dom";

import Footer from "../../../Footer";

import IMG7 from "../../../../img/Services/attest7.jpg";

function Examination() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        {" "}
        <div className=" text-left animate-flip-up animate-ease-out pt-[6rem]  pr-0 pb-[2rem] xl:pt-[6rem] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[69px]  bg-white">
          <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <h1 className="mt-0 mr-auto mb-[1.07em] w-fit  text-2xl lg:text-4xl border-b-4 border-red-700/90 pb-[.5rem]">
              Метрологическая экспертиза
            </h1>
            <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Зачем это необходимо?
              </h2>
            </div>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem] mb-[1.2em]">
                Метрологическая экспертиза - это анализ и оценивание технических
                решений в части метрологического обеспечения (технических
                решений по выбору измеряемых параметров, установлению требований
                к точности измерений, выбору методов и средств измерений, их
                метрологическому обслуживанию).
                <br />
                Метрологическая экспертиза проводится в обязательном или
                добровольном порядке.
              </p>
            </div>
            <div className="flex flex-col-reverse mb-[1rem] lg:flex-row lg:my-[4rem] w-full">
              <div className="flex items-center justify-center md:justify-normal w-full h-full  ">
                <div className=" flex lg:flex-col w-[90%] text-justify">
                  <div className="text-[1.1rem]">
                    <p className="mb-[1rem]">
                      <b>
                        Метрологическая экспертиза технической документации
                        проводится в соответствии с:
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
                    <li className="mb-[1rem]">ГОСТ Р 8.563-2009;</li>
                    <li>РМГ 63-2003 .</li>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-end justify-center w-full ">
                <div className=" flex flex-wrap w-full lg:pl-[2rem] justify-end items-end mb-[1rem]">
                  <img
                    className="w-full h-full object-cover"
                    src={IMG7}
                    alt="img"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-none my-0 mx-auto xl:max-w-[900px] mb-[2rem] text-justify text-[1.1rem] ">
              <p className="pt-[1rem]">
                В добровольном порядке может проводиться метрологическая
                экспертиза продукции, проектной, конструкторской,
                технологической документации и других объектов, в отношении
                которых законодательством РФ не предусмотрена обязательная
                метрологическая экспертиза. В данном случае основным
                побудительным мотивом является обеспечение высокого качества и
                конкурентоспособности выпускаемой продукции. Устранить
                метрологические ошибки на стадии разработки документации проще,
                чем на стадии производства, испытания, эксплуатации продукции.
              </p>
            </div>
            <div>
              <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Обязательная метрологическая экспертиза
                </h2>
                <div className="max-w-none my-0 mx-auto mb-[1rem] xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[886px] text-justify text-[1.1rem] p-[1.1rem] xl:p-0">
                  <p className="mb-0">
                    Обязательная метрологическая экспертиза проводится, в
                    соответствии с требованиями нормативных правовых актов
                    обеспечения единства измерений РФ.
                  </p>
                  <p className="mt-[1rem] mb-[1rem]">
                    Обязательной метрологической экспертизе подлежат:
                  </p>
                  <div className=" lg:bg-white lg:px-0 lg:py-0 text-left">
                    <li className="mb-[1rem]">
                      Требования к измерениям, стандартным образцам и средствам
                      измерений, содержащиеся в проектах нормативных актов
                      Российской Федерации;
                    </li>
                    <li className="mb-[1rem]">
                      Стандарты, продукция, проектная, конструкторская,
                      технологическая документация и другие объекты в порядке и
                      случаях, предусмотренных законодательством РФ.
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] text-justify mb-[2rem]"></div>
            <div className="my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1094px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Для чего может понадобиться наличие заключения или отметки о
                метрологической экспертизе?
              </h2>
              <p className="mb-[1.2em] mt-0 text-[1.1rem] text-justify">
                Результат проведения метрологической экспертизы в зависимости от
                требований нормативных правовых актов в соответствии с РМ
                63-2003 может быть оформлен заключением уполномоченной
                организации или отметкой о проведении в документе, прошедшим
                экспертизу.
              </p>
              <div className=" my-0 mx-auto max-w-[1094px]">
                <div className="relative  px-[15px] lg:py-[2rem] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-orange-300 before:will-change-auto before:text-left ">
                  <div className="relative text-[1.1rem] my-0 mx-auto max-w-none xl:max-w-[960px] 2xl:max-w-[886px] 3xl:max-w-[886px] px-[15px] py-[30px] lg:p-[30px]">
                    <p className="mb-[2rem] mt-0 text-[1.1rem]">
                      <b>
                        Без метрологической экспертизы документации вы не
                        обойдетесь при:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Внесении изменений в утвержденный тип средства измерений,
                      если изменения не влияют на метрологические
                      характеристики;
                    </li>
                    <li className="mb-[1rem]">
                      Внесении изменений в методику поверки средства измерений,
                      если изменения не влияют на метрологические
                      характеристики;
                    </li>
                    <li className="mb-[1rem]">
                      Разработке и последующей аттестации методик измерений;
                    </li>{" "}
                    <li>
                      Обязательных требованиях со стороны Заказчика о наличии
                      отметки о метрологической экспертизе.
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
                Руcметрология имеет аккредитацию на право проведения
                метрологической экспертизы в соответствии с областью
                аккредитации.
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

export default Examination;
