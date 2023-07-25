/* This example requires Tailwind CSS v2.0+ */
import { MapPinIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";
import Title from "./Title";
const positions = [
  {
    id: 1,
    title: "Technical Consultant Analyst",
    type: "Contract",
    location: "Jakarta",
    company: "PT. Mitra Integrasi Informatika",
    endDate: "Present",
    startDate: "July, 2022",
    description: [
      "Improving system efficiency by consulting with end-users and providing innovative solutions",
      "Performing diagnostic tests and troubleshooting.",
      "Maintain SAAS Budget Application.",
      "Create Custom SSRS Report.",
      "Designing and testing a range of software and technical solutions.",
      "Provide and Lead UAT",
    ],
  },
  {
    id: 2,
    title: "Microsoft Dynamics FO Technical Consultant",
    type: "Full-Time",
    location: "Jakarta",
    company: "PT. Ragam Inovasi Generasi Handal Teknologi",
    endDate: "June, 2022",
    startDate: "September, 2020",
    description: [
      "Developing custom Module (Medical, Fleet Management).",
      "Developing Custom Module Human Resource.",
      "Training End-Users.",
      "Create ASP.NET Restful API Using Entity Framework.",
      "Create Web Application and Mobile application and integrate with Dynamics AX.",
      "Training End-User & Provide assistance with technical issues.",
      "Analyzing and improving the performance.",
      "Designing and testing a range of software and technical solutions.",
      "Performing diagnostic tests and troubleshooting.",
    ],
  },
  {
    id: 3,
    title: "Application Consultant",
    type: "Contract",
    location: "Jakarta",
    company: "PT. Kreatif Solusi Informatika",
    endDate: "June, 2020",
    startDate: "January, 2020",
    description: [
      "Design UI website and Implement design with Bootstrap 4.",
      "Develop a web application for procurement.",
      "Performing diagnostic tests and troubleshooting.",
    ],
  },
];

export default function Example() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <Title title="My Experience" />
      <ul role="list" className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-regal-blue truncate">
                  {position.title}
                </p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {position.type}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    <BuildingOffice2Icon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {position.company}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    <MapPinIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {position.location}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  {/* <CalendarIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    /> */}
                  <p>
                    {position.startDate} - {position.endDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {/* <p>{position.description}</p> */}
                <ul className="list-disc ml-5 mt-5 text-sm text-gray-500">
                  {position.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
