import { dexter, jessica, hunter, melvina } from ".";

export const announcementTests = [
  { title: "Our new guild onboarding form is live", audience: "$moon millionaire", author: "@dexter", date: "Aug 22", img: dexter },
  { title: "Our new guild onboarding form is live", audience: "rocketeers", author: "@hunter", date: "Aug 22", img: jessica },
  { title: "Our new guild onboarding form is live", audience: "everyone", author: "@jessica", date: "Aug 22", img: hunter },
  { title: "Our new guild onboarding form is live", audience: "everyone", author: "@jessica", date: "Aug 22", img: melvina },
];


export const proposalTests = [
  {title: "MDP-38: Interplanetary war with the Cyber Vikings. Help needed!", executionDays: 2 , author: "@pmoncada", active:true},
  {title: "MDP-35: Searching for gardener and rocket scientist for the Space Golf tournament", executionDays: 14 , author: "@pmoncada", active:false},
  {title: "MDP-33: Looking for MoonDAO members to join the Radroach Extermination Squad", executionDays: 55 , author: "@pmoncada", active:true},
  {title: "MDP-29: moonDAO a leader at the International Astronautical Federation And Space Arena", executionDays: 192 , author: "@pmoncada", active:false},
]

export const bountyTests = [
  {title: "Project: MoonDAO Constitution - Bounty #001", date: "05-03-2023" , img: melvina, mooney:3000, dollars: 500},
  {title: "The head of the Lizard King - Bounty #002", date: "01-03-2024" , img: hunter, mooney:10000, dollars: 2000},
  {title: "Extracting precious metals from Comet - Bounty #003", date: "02-13-2025" , img: dexter, mooney:90000, dollars: 8500},
  {title: "Genetically engineering a Rainbow Lobster to use as a mascot", date: "08-11-2026" , img: jessica , mooney:999999, dollars: 9999},
]


export const projectTests = [
  {title: "Ticket to space NFT work", postDate: "05-03-2023" , active:true, deadline:"03-07-2023"},
  {title: "Extracting precious metals from Comet", postDate: "05-06-2023" , active:false, deadline:"08-08-2025"},
  {title: "Project: MoonDAO Constitution", postDate: "09-04-2023" , active: true, deadline:"01-02-2024"},
  {title: "Genetically engineering a Rainbow Lobster to use as a mascot", postDate: "05-03-2023" , active:false, deadline:"03-07-2029"},
]

export const authorMappings = {
  "0x679d87D8640e66778c3419D164998E720D7495f6": "@pmoncada",
}