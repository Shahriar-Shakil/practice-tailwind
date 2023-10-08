import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="container  mx-auto max-w-8xl flex flex-col md:flex-row justify-around">
      <img
        className="object-scale-down	"
        src={"/image/partners/logos_google.png"}
        alt="Partners"
      />
      <img
        className="object-scale-down"
        src={"/image/partners/trello-logo-blue.png"}
        alt="Partners"
      />
      <img
        className="object-scale-down"
        src={"/image/partners/Slack.png"}
        alt="Partners"
      />
      <img
        className="object-scale-down"
        src={"/image/partners/logos_google.png"}
        alt="Partners"
      />
      <img
        className="object-scale-down"
        src={"/image/partners/Notion.png"}
        alt="Partners"
      />
    </section>
  );
}
