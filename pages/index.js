import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LandingComponent from "@/components/LandingComponent";
import Events from "@/components/Events";
import Link from "next/link";
import MovingBar from "@/components/MovingBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <MovingBar />
      <div className="p-8 md:p-10 mt-5">
        <Link
          // className="relative w-20 h-20 "
          href={""}
          scroll={true}
        >
          <Image
            className={"black"}
            height={60}
            // objectFit="contain"
            width={100}
            src={"/images/zammelogo.png"}
          />
        </Link>
      </div>
      <div className=" min-h-screen  bg-white grid md:grid-cols-3 ">
        <div className=" p-8 md:p-10 pt-0 h-full">
          <LandingComponent
            text1={
              "Zamme is a visual communication platform, with the aim to build community through knowledge-sharing and collaborations. We host monthly talks with multi-disciplinary creatives working in graphic design, creative direction, photography, illustration, among others."
            }
            text2={
              "Currently we are building our structure (exciting!!) and website. Follow us on Instagram for updates and announcements on upcoming events. We are looking forward to seeing you soon!! 🫰🏼🪷🥸<3"
            }
            text3={
              "For collaborations and inscriptions contact us via e-mail or Instagram!"
            }
            isOne
            buttonText={`<p>For collaborations and inquiries contact us via   
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ciao@zamme.org"
              className=' hover:italic'
            > e-mail 
            </a>or <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/zammeprojects/"
          >Instagram!</a></p>`}
            color="bg-[rgb(0,0,255)]"
            isFirst
          />
        </div>

        <div className=" p-8 md:p-10 pt-0">
          <LandingComponent
            text1={
              "Zamme es una plataforma de comunicación visual con el objetivo de construir comunidad a través del intercambio de conocimiento y colaboraciones. Hacemos pláticas mensuales con creativxs multidisciplinarios, trabajando en áreas como diseño gráfico, fotografía, ilustración, dirección de arte, entre otros."
            }
            text2={
              "Actualmente estamos construyendo nuestra nueva estructura (¡¡que emoción!!) y el sitio web. ¡Síguenos en Instagram para mantenerte informadx de nuestros futuros eventos. ¡Esperamos verte pronto! 🫰🌵🥸<3"
            }
            text3={
              "Para colaboraciones e inscripciones contáctanos vía e-mail o Instagram."
            }
            buttonText={`<p>Para colaboraciones e inscripciones contáctanos vía  <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ciao@zamme.org"
              className=' hover:italic'
            > e-mail 
            </a> o <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/zammeprojects/"
          >Instagram.</a></p>`}
            color="bg-[rgb(80,255,7)]"
          />
        </div>
        <div className=" p-10 pt-0">
          <Events />
        </div>
      </div>
    </div>
  );
}
