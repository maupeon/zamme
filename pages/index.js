import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LandingComponent from "@/components/LandingComponent";
import Events from "@/components/Events";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <div className="p-10">
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
        <div className=" p-10 pt-0 h-full">
          <LandingComponent
            text1={
              "Zamme is a visual communication platform, with the aim to build community through knowledge-sharing and collaborations. We hosts monthly talks with multi- disciplinary experts, on topics surrounding the field of graphic design, photography, among others."
            }
            text2={
              "Currently we are builing our structure (exciting!!) and website. Folllow us on Instagram to stay tuned and we are looking forward to seeing you soon!!"
            }
            text3={
              "For collaborations and inscriptions contact us via e-mail or Instagram!"
            }
            buttonText={
              "For collaborations and inscriptions contact us via e-mail or Instagram!"
            }
            color="bg-[rgb(0,0,255)]"
            isFirst
          />
        </div>

        <div className=" p-10 pt-0">
          <LandingComponent
            text1={
              "Zamme es una plataforma de comunicación visual, con el objetivo de construir una comunidad a través del intercambio de conocimientos y colaboraciones. Hacemos platicas mensuales con expertos multidisciplinarios, sobre temas que rodean el campo del diseño gráfico, la fotografía, entre otros."
            }
            text2={
              "Actualmente estamos construyendo nuestra nueva estructura (¡¡que emoción!!) y el sitio web. ¡Síguenos en Instagram para mantenerte informadx y esperamos verte pronto!"
            }
            text3={
              "Para colaboraciones e inscripciones contactanos vía e-mail o Instagram."
            }
            buttonText={
              "Para colaboraciones e inscripciones contactanosvía e-mail o instagram."
            }
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
