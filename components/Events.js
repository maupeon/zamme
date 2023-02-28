import React from "react";

const events_array = [
  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      { name: "María Marín de Buen", link: "" },
      { name: "Dan Solbach", link: "" },
    ],
    date: "25.03.22 (MX)",
    title: "Graphic design for artists & cultural institutions",
  },
  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      { name: "Andy Galloway", link: "" },
      { name: "Ferran Ollé Serra", link: "" },
    ],
    date: "29.04.22 (MX)",
    title: "Graphic design & branding in context",
    cohost: "María Vargas",
  },
  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      { name: "Andrea García", link: "" },
      { name: "Jackie Crespo", link: "" },
    ],
    title: "Graphic design & self-publishing",
    date: "21.05.22 (MX)",
  },
  {
    type: "Zamme talk",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [
      { name: "Liz Zepeda Esquivel", link: "" },
      { name: "Santiago Martínez", link: "" },
    ],
    date: "15. 06.22 (MX)",
    title: "Creative direction for magazines",
  },
  {
    type: "En casa con",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [{ name: "Carlo Canún", link: "" }],
    date: "06.08.22 (MX)",
    title: "",
    cohost: "Emilio Ferrer",
  },
  {
    type: "Zamme talk + WEX",
    // authors:'María Marín de Buen & Dan Solbach',
    authors: [{ name: "Memo Vithana", link: "" }],
    date: "07.08.22 (DE)",
    title: "",
  },
  {
    type: "Zamme Berlin chit chat with clhub + WEX",
    // authors:'María Marín de Buen & Dan Solbach',
    // authors: [
    //   { name: "", link: "" },
    //   { name: "", link: "" },
    // ],
    date: "07.09.22 (DE)",
    title: "",
  },
];

export default function Events() {
  function createAuthorLinks(authors) {
    let links = [];

    authors.forEach((author, index) => {
      links.push(
        <a href={author.link}>
          {author.name} {index < authors.length - 1 && "&"}{" "}
        </a>
      );
    });

    return links;
  }

  return (
    <div>
      <h1 className=" mb-8">Past events</h1>
      {events_array.map((item, index) => (
        <div className=" mb-8" key={index}>
          <p>{item.type}</p>
          {item.authors && <p>{createAuthorLinks(item.authors)}</p>}
          <p>{item.title}</p>
          {item.cohost && <p>Co-host {item.cohost}</p>}
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
