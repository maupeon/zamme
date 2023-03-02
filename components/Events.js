import React from "react";

const events_array = [
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
      { name: "Liz Zepeda Esquivel", link: "https://lizdesigns.co" },
      { name: "Santiago Martínez", link: "https://www.suave.ooo/shop" },
    ],
    date: "15.06.22 (MX)",
    title: "Creative direction for magazines",
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
    type: "Zamme talk + live painting",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [{ name: "Memo Vithana", link: "https://www.memovithana.com/" }],
    date: "07.08.22 (DE)",
    title: "",
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
      <h1 className=" mb-8 text-lg">Past events</h1>
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
