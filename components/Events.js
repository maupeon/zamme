import React from "react";

const events_array = [
  {
    type: "Zamme x Etceteras Book Fair",
    // authors: " + ",
    authors: [
      {
        name: "Festival feminista de design e edição",
        link: "https://www.etceteras.net/",
      },
    ],
    date: "05–07.10.23 (PT)",
    title: "",
  },
  {
    type: "Zamme workshop",
    // authors: " + ",
    authors: [
      {
        name: "Fernanda Ruíz",
        link: "https://www.fernandaruiz.work/",
      },
    ],
    date: "09,11–12.09.23 (MX)",
    title: "Building your digital garden: creative coding",
  },
  {
    type: "Zamme x ee14",
    // authors: " + ",
    authors: [
      {
        name: "En el 14",
        link: "https://www.instagram.com/en_el_14/",
      },
      {
        name: "Ted Davis",
        link: "https://teddavis.org/xyscope/",
      },
    ],
    date: "05.08.23 (MX)",
    title: "Summer Social",
  },
  {
    type: "Zamme talk ",
    // authors: " + ",
    authors: [
      {
        name: "Fernada Ruíz",
        link: "https://www.fernandaruiz.work/",
      },
    ],
    date: "20.07.23 (MX)",
    title:
      "Digital design: variables & approaches to a digital design practice",
  },
  {
    type: "Zamme workshop",
    // authors: " + ",
    authors: [
      {
        name: "Can Can Press",
        link: "https://cancanpress.com/",
      },
      {
        name: "SUPERCONTINENTE",
        link: "https://supercontinente.com/",
      },
    ],
    date: "24–25.06.23 (MX)",
    title: "Taller de tipografía",
  },
  {
    type: "Zamme talk",
    // authors: " + ",
    authors: [
      {
        name: "Fabiola Mejía",
        link: "https://supercontinente.com/",
      },
    ],
    date: "22. 06.23 (MX)",
    title: "Typeface design and collaborative exploration",
  },
  {
    type: "Zamme talk",
    // authors: " + ",
    authors: [
      {
        name: "Alfonso de Anda",
        link: "https://www.aldeanda.com/",
      },
      {
        name: "David Rocha",
        link: "https://davidrochart.bigcartel.com/product/evite-obedecer",
      },
      {
        name: "Mariana de Alba",
        link: "https://www.instagram.com/marianadalba/",
      },
    ],
    date: "25.05.23 (MX)",
    title: "Creative process and multidisciplinary practice",
  },
  {
    type: "Zamme talk",
    // authors: " + ",
    authors: [
      {
        name: "Sophie Greenspan",
        link: "https://www.sophiegreenspan.com/",
      },
      {
        name: "Aldo Solano",
        link: "https://www.academia.edu/68691731/Playgrounds_del_M%C3%A9xico_moderno",
      },
    ],
    date: "18.04.23 (MX)",
    title: "Visual research on urban spaces",
  },
  {
    type: "Zamme workshop",
    // authors: " + ",
    authors: [
      {
        name: "Can Can Press",
        link: "https://cancanpress.com/",
      },
      {
        name: "Dan Solbach",
        link: "https://dansolbach.ch/",
      },
    ],
    date: "01.04.23 (MX)",
    title: "Taller de diseño de cartel",
  },
  {
    type: "Zamme talk",
    // authors: " + ",
    authors: [
      {
        name: "Estudio Herrera",
        link: "https://estudioherrera.mx/#jul-20-23-mx182406",
      },
    ],
    date: "31.03.23 (MX)",
    title: "Design process and studio dynamics",
  },
  {
    type: "Zamme Berlin",
    // authors: " + ",
    authors: [
      { name: "clhub.art", link: "https://www.clhub.art" },
      { name: "Wex Records", link: "https://wexrecords.bandcamp.com" },
    ],
    date: "07.09.22 (DE)",
    title: "",
  },
  {
    type: "Zamme talk + live painting",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [{ name: "Memo Vithana", link: "https://www.memovithana.com/" }],
    date: "07.08.22 (DE)",
    title: "",
  },
  {
    type: "En casa con",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [{ name: "Carlo Canún", link: "https://carlocanun.com" }],
    date: "06.08.22 (MX)",
    title: "",
    cohost: "Emilio Ferrer",
    link: "https://www.emilioerandi.com/",
  },
  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      { name: "Liz Zepeda Esquivel", link: "https://lizdesigns.co" },
      { name: "Santiago Martínez", link: "https://www.suave.ooo/shop" },
    ],
    date: "15.06.22 (MX)",
    title: "Creative direction for magazines",
  },
  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      {
        name: "Andrea García",
        link: "https://miauediciones.wixsite.com/miauxnohacernada",
      },
      { name: "Jackie Crespo", link: "http://cancanpress.com" },
    ],
    title: "Graphic design & self-publishing",
    date: "21.05.22 (MX)",
  },

  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      { name: "Andy Galloway", link: "https://andygallows.com" },
      { name: "Ferran Ollé Serra", link: "https://faena-studio.org" },
    ],
    date: "29.04.22 (MX)",
    title: "Graphic design & branding in context",
    cohost: "María Vargas",
    link: "https://www.instagram.com/maria.vdn/?hl=de",
  },
  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      { name: "María Marín de Buen", link: "https://mariamarindebuen.com" },
      { name: "Dan Solbach", link: "https://dansolbach.ch" },
    ],
    date: "25.03.22 (MX)",
    title: "Graphic design for artists & cultural institutions",
  },
];

export default function Events() {
  function createAuthorLinks(authors) {
    let links = [];

    authors.forEach((author, index) => {
      links.push(
        <a href={author.link} target="_blank" rel="noreferrer">
          {author.name} {index < authors.length - 1 && "&"}{" "}
        </a>
      );
    });

    return links;
  }

  return (
    <div className=" font-zamme_light">
      <h1 className=" mb-8 text-lg">Events</h1>
      {events_array.map((item, index) => (
        <div className=" mb-8" key={index}>
          <p>{item.type}</p>
          {item.authors && <p>{createAuthorLinks(item.authors)}</p>}
          <p>{item.title}</p>
          {item.cohost && (
            <a target="_blank" rel="noreferrer" href={item.link}>
              Co-host {item.cohost}
            </a>
          )}
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
