const externalLinks = [
    { name: "Bounties", href: "https://app.dework.xyz/moondao" },
    { name: "Snapshot", href: "https://snapshot.org/#/tomoondao.eth" },
    { name: "Documentation", href: "https://docs.moondao.com/" },
    { name: "Staking", href: "https://app.moondao.com/" },
    { name: "Gnosis", href: "https://app.safe.global/home?safe=eth:0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9" },
  ];

const ExternalLinks = () => {
  return (
    <div>
    <h3 className="-ml-2 font-medium text-blue-700 dark:text-yellow-200" id="projects-headline">
      External links
    </h3>
    <ul className="mt-2 px-3 list-disc marker:text-blue-500 dark:marker:text-yellow-100 group" role="group" aria-labelledby="projects-headline">
      {externalLinks.map((item, i) => (
        <li key={i} className=" py-[6px] hover:scale-105">
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            className="group flex items-center text-[13px] font-medium rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ExternalLinks