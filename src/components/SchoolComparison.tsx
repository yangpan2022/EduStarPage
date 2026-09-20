"use client";

import { useMemo, useState } from "react";

type School = {
  name: string;
  site: string;
  pathway: string;
  location: string;
  founded: string;
  primary: string;
  secondary: string;
  total: string;
};

const schools: School[] = [
  { name: "UWCSEA (Dover & East)", site: "uwcsea.edu.sg", pathway: "IB Continuum", location: "Dover / Tampines", founded: "1971", primary: "$39,069–40,743", secondary: "$46,866–49,926", total: "$54,225–65,082" },
  { name: "Singapore American School (SAS)", site: "sas.edu.sg", pathway: "American / AP", location: "Woodlands", founded: "1956", primary: "$32,510–37,640", secondary: "$41,560–43,780", total: "$52,700–65,210" },
  { name: "Tanglin Trust School (TTS)", site: "tts.edu.sg", pathway: "British + IB", location: "Portsdown Rd", founded: "1925", primary: "$36,300–47,490", secondary: "$53,535–58,080", total: "$46,300–68,080" },
  { name: "Dulwich College (Singapore)", site: "singapore.dulwich.org", pathway: "British + IB", location: "Bukit Batok West", founded: "2014", primary: "$21,080–46,760", secondary: "$53,850–59,220", total: "$31,080–69,220" },
  { name: "Stamford American (SAIS)", site: "sais.edu.sg", pathway: "Multi-Diploma", location: "Woodleigh", founded: "2009", primary: "$20,420–49,040", secondary: "$53,210–56,110", total: "$28,570–69,520" },
  { name: "Canadian International (CIS)", site: "cis.edu.sg", pathway: "IB Continuum", location: "Lakeside, Jurong West", founded: "1990", primary: "$20,780–45,520", secondary: "$51,240–53,500", total: "$31,580–64,300" },
  { name: "Australian International (AIS)", site: "ais.com.sg", pathway: "Australian + IB", location: "Lorong Chuan", founded: "1993", primary: "$20,136–43,692", secondary: "$50,400–53,148", total: "$28,251–64,718" },
  { name: "Dover Court International", site: "nordangliaeducation.com/dcis-singapore", pathway: "British + IB", location: "Dover Rd", founded: "1972", primary: "$30,198–38,106", secondary: "$43,245–47,982", total: "$37,467–55,251" },
  { name: "Nexus International", site: "nexus.edu.sg", pathway: "British + IB", location: "Aljunied Walk", founded: "2011", primary: "$26,600–44,800", secondary: "$45,600–50,800", total: "$34,813–59,013" },
  { name: "ISS International", site: "iss.edu.sg", pathway: "IB Continuum", location: "Preston Rd", founded: "1981", primary: "$25,000 flat", secondary: "$43,472–54,430", total: "$31,925–61,533" },
  { name: "Overseas Family School", site: "ofs.edu.sg", pathway: "British + IB", location: "Pasir Ris Heights", founded: "1991", primary: "$17,200–35,100", secondary: "$37,500–44,800", total: "$19,200–46,800" },
  { name: "SJI International", site: "sji-international.com.sg", pathway: "British + IB", location: "Thomson Rd", founded: "2007", primary: "$37,311–37,494", secondary: "$39,062–49,284", total: "$47,130–65,210" },
  { name: "Hwa Chong International", site: "hcis.edu.sg", pathway: "IB Continuum", location: "Bukit Timah Rd", founded: "2005", primary: "No Primary tier", secondary: "$34,880–39,240", total: "$42,129–46,707" },
];

const filters = [
  "All Schools",
  "IB Continuum",
  "British + IB",
  "American / AP",
  "Australian + IB",
  "Multi-Diploma",
];

export default function SchoolComparison() {
  const [active, setActive] = useState("All Schools");

  const rows = useMemo(
    () => (active === "All Schools" ? schools : schools.filter((s) => s.pathway === active)),
    [active],
  );

  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-navy">Tap a pathway to filter the table:</p>
      <div className="mb-6 flex flex-wrap gap-2.5">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-pill border px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? "border-accent bg-accent text-navy"
                : "border-black/10 bg-white text-navy-2 hover:border-accent hover:text-accent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-[16px] border border-black/10 shadow-[0_14px_35px_rgba(26,29,79,0.08)]">
        <table className="w-full min-w-[900px] border-collapse bg-white text-left text-sm">
          <thead>
            <tr className="bg-navy text-white">
              {["School", "Pathway", "Location", "Founded", "Primary Tuition", "Secondary Tuition", "Est. 1st-Yr Total"].map(
                (heading) => (
                  <th key={heading} className="px-4 py-4 font-semibold">
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((school, index) => (
              <tr
                key={school.name}
                className={index % 2 === 0 ? "bg-white" : "bg-mist"}
              >
                <td className="px-4 py-4 align-top">
                  <span className="font-semibold text-navy">{school.name}</span>
                  <span className="mt-0.5 block text-xs text-tertiary">{school.site}</span>
                </td>
                <td className="px-4 py-4 align-top text-navy-2">{school.pathway}</td>
                <td className="px-4 py-4 align-top text-navy-2">{school.location}</td>
                <td className="px-4 py-4 align-top text-navy-2">{school.founded}</td>
                <td className="px-4 py-4 align-top text-navy-2">{school.primary}</td>
                <td className="px-4 py-4 align-top text-navy-2">{school.secondary}</td>
                <td className="px-4 py-4 align-top font-semibold text-accent">{school.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
