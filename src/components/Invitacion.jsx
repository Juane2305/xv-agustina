import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import dress from '../assets/esmeralda/dressCodeIcon.svg'
import CountdownCircles from "./CountdownCircles";
import InstagramWall from "./InstagramWall";
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import decoracionImagenes from "../assets/esmeralda/decoracionImagenes.svg";
import decoracionDressCode from "../assets/esmeralda/decoracionDressCode.svg";

import DressCodeEsmeralda from "./DressCodeEsmeralda";
import song from '../assets/song.mp3'

const Invitacion = () => {

  const targetDate = new Date("2025-11-08T21:00:00-03:00");

  const colorPrincipal = "#829672";

  useEffect(() => {
    AOS.init({
        duration: 1000, 
        easing: 'ease-in-out',
        once: true,
      });
    
  }, []);



  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

     <div
       className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
       style={{ backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1742341160/Fondo_de_Pantalla_Computador_Simple_Beige_18_gyfe4i.png')" }}
     >
        <div data-aos="fade-in">
            <p className="text-2xl mb-5 tracking-widest">Te invito a mis 15</p>
            <h1 className="text-7xl md:text-[10rem] font-brushNames text-[#4e4e4e] z-10 italic">
            Agustina
            </h1>

            <div className="flex items-center justify-center py-2 px-4 mt-5">
            <p className="font-bold text-[#4e4e4e] text-2xl tracking-widest">
                0 8 . 1 1 . 2 0 2 5
            </p>
            </div>
        </div>
      </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#829672]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#829672"
              textColor="black"
              valueClassName="text-3xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <section id="lugares" className="relative text-center bg-white">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            hora_inicio="21:00 hs"
            hora_fin="05:00 hs"
            salon="Aires del Sauzal"
            hora_civil="21:00hs"
          />
          <a href="https://maps.app.goo.gl/3ayk4JYK8MRtgdck8" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-gray-700 my-5 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

          <div className="relative bg-white">
            <img
              src={decoracionImagenes}
              alt="Decoración lateral"
              className="hidden md:block absolute -left-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />
            <img
              src={decoracionImagenes}
              alt="Decoración lateral invertida"
              className="hidden md:block absolute -right-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                 width: "30rem" ,
                }}
            />
            <section className="pb-16">
                <FocusCardsDemo
                    texto=""
                  images={[
                    {
                      index: 1,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759680751/dd34434d-44e4-47a9-8c0d-4f1c9b19a065_fcbcun.jpg",
                    },
                    {
                      index: 2,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759680762/59463832-3b94-4f9e-9aee-d8a5756d16c4_norefa.jpg",
                    },
                    {
                      index: 3,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759680791/38b59c78-a9b3-4b14-9cfd-e28bda517832_bzjvhb.jpg",
                    },
                    {
                      index: 4,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759680806/4711d73b-7011-41c2-8d11-005ac5fea1ee_fuzoje.jpg",
                    },
                    {
                      index: 5,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759680813/87c2e74b-f69a-47d1-be84-976aa06d524c_gjih5i.jpg",
                    },
                    {
                      index: 6,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759680821/27c3070c-20ea-4a3d-b94b-f0bae65ecf71_lqtipp.jpg",
                    },
                  ]}
                />
            </section>
          </div>

          {/* <div className="bg-white border-b border-[#829672]">
            <InstagramWall
              userClass="text-[#829672]"
              logoClass="text-[#829672]"
              user="@mr.almada_"
            />
          </div> */}

          <div className="bg-[#829672] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-[#829672]"
              buttonClass="border-white rounded-full"
              titleCalendar="XV de Agustina"
              salon="Aires del Sauzal, Tirasso 5379, M5533 El Sauce, Mendoza"
              fechaComienzo="20251108T210000"
              fechaFin="20251109T050000"
            />
          </div>

          <div className="relative bg-white py-10">
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Izq"
              className="hidden md:block absolute -left-40 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
              }}
            />
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Der"
              className="hidden md:block absolute -right-40 top-[84%] transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />

            <DressCodeEsmeralda dressCode="Formal" icon={dress}/>
          </div>

          <DatosBancarios
            claseIcon="text-white"
            texto="Si deseas hacerme un regalo, te dejo los datos"
            claseContenedor="bg-[#829672] text-white"
            claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
            textSize="text-lg"
            background={{ backgroundColor: colorPrincipal }}
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#9eba8a",
            }}
            claseBotonModal={{
              backgroundColor: "#829672",
              borderColor: "#829672",
            }}
            styleModal={{ backgroundColor: "#829672" }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            cbu="0000003100002999045161"
            alias="massutti.mp"
            banco="Mercado Pago"
            nombre="Agustina Massutti"
            claseModal="bg-[#829672]"
            borderModal="border-[#829672]"
            textColor="text-[#829672]"
          />

          <Asistencia
            clase="py-10 bg-white bg-fixed border-b-4 border-[#4b5147]"
            claseTitle="text-[#4b5147]"
            claseButton="border-2 border-[#4b5147] font-semibold hover:bg-[#4b5147]  text-gray-700 hover:text-white rounded-full"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSeC_oxDEAr2ysTW3s4CKlL2wQeOMSAwGKSIAFLv8IF76B-cWQ/viewform?usp=dialog"
          />

        <div className="font-eleganteTitle text-4xl bg-white">
          <TextoFinal textoFinal="Te espero para disfrutar esta noche única" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
