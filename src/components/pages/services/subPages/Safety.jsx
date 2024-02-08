import { useNavigate } from "react-router-dom";

import Footer from "../../../Footer";

import IMG6 from "../../../../img/Services/safty.jpg";

function Safety() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        {" "}
        <div className=" text-left animate-flip-up animate-ease-out pt-[6rem] pr-0 pb-[2rem] xl:pt-[6rem] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[69px]  bg-white">
          <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[996px] xl:max-w-[1094px]">
            <h1 className="mt-0 mr-auto mb-[1.07em] w-fit  text-2xl lg:text-4xl border-b-4 border-red-700/90 pb-[.5rem]">
              Получение сертификатов соответствия
            </h1>
            <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
              <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                Зачем это необходимо?
              </h2>
            </div>
            <div className="mx-auto max-w-none my-0 xl:max-w-[900px] 2xl:max-w-[900px] text-justify">
              <p className="text-[1.1rem] mb-[1.2em]">
                При выпуске из производства серийных средств измерений, для
                подтверждения безопасности их использования проводятся их
                испытания.
              </p>
            </div>
            <div className="flex flex-col-reverse mb-[1rem] lg:flex-row lg:my-[4rem] w-full">
              <div className="flex items-center justify-center md:justify-normal w-full h-full  ">
                <div className=" flex lg:flex-col w-[90%] text-justify">
                  <div className="text-[1.1rem]">
                    <p className="mb-[1rem]">
                      <b>
                        Сертификация и декларация продукции проводится в
                        соответствии с:
                      </b>
                    </p>
                    <li className="mb-[1rem]">
                      Решение коллегии Евразийской экономической комиссии от 2
                      апреля 2019 года N 52 "О перечне технических регламентов
                      Евразийского экономического союза (технических регламентов
                      Таможенного союза)"";
                    </li>
                    <li className="mb-[1rem]">
                      Технические регламенты Еварзийского и таможенного союзов.
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
                Испытания на соответствия техническим регламентам проводятся в
                аккредитованных в данной области организациях.
              </p>
            </div>
            <div>
              <div className="max-w-none my-0 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[900px]">
                <h2 className="mx-0 mt-0 mb-[10px]  md:mb-[28px] lg:mb-[28px] xl:mb-[28px] 2xl:mb-[28px] text-[1.3rem] lg:text-[1.5rem]">
                  Этапы прохождения процедуры подтверждения соответствия
                </h2>
                <div className="max-w-none my-0 mx-auto mb-[2rem] xl:max-w-[900px] 2xl:max-w-[900px] 3xl:max-w-[900px] text-justify text-[1.1rem]">
                  <p className="mb-0">
                    Для проведения испытаний для подтверждения соответствия
                    необходимо определить перечень требований для правильной
                    сертификации и декларации продукции.
                  </p>
                  <p className="mt-[1rem] mb-[1rem]">
                    Для проведения процедуры понадобиться:
                  </p>
                  <div className=" lg:bg-white lg:px-0 lg:py-0 text-left">
                    <li className="mb-[1rem]">
                      Образцы продукции, для проведения испытаний;
                    </li>
                    <li className="mb-[1rem]">
                      Документация на основании которой проводится производство.
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-none my-0 xl:max-w-[886px] 2xl:max-w-[886px] text-justify mb-[2rem]"></div>

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

export default Safety;
