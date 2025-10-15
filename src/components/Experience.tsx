// Experience.tsx - Professional Design
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building, Target, Users, TrendingUp, Award, Rocket } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Deputy General Manager",
      company: "Wintel Limited",
      location: "Dhaka, Bangladesh",
      period: "March 2024 - Present",
      duration: "Current",
      responsibilities: [
        "Develop and execute comprehensive strategies for IT and Technical Operations aligned with organizational goals",
        "Lead, inspire, and manage diverse teams of IT professionals across multiple projects",
        "Oversee day-to-day technical operations, ensuring reliability and security of IT systems",
        "Efficiently allocate resources including budgets and personnel to optimize IT operations",
        "Develop and implement robust cybersecurity measures and risk management protocols",
        "Evaluate, select, and manage external vendors and technology partnerships"
      ],
      gradient: "from-blue-600 to-blue-700",
      icon: <Target className="h-5 w-5" />,
      achievements: ["Strategic Leadership", "Team Management", "Operational Excellence"]
    },
    {
      title: "Software Analyst",
      company: "SSL Wireless (Software Shop Ltd)",
      location: "Dhaka, Bangladesh",
      period: "February 2014 - February 2024",
      duration: "10 Years",
      responsibilities: [
        "Led ERP Development teams for RMG & Interlining industry with focus on automation",
        "Managed technical projects for Fintech solutions and payment gateway integrations",
        "Implemented RPA solutions on ERP & Accounting systems for process optimization",
        "Developed Decision Automation systems for Interlining & RMG Industry",
        "Supervised team of 12 technologists on BDT 10 million software development project",
        "Built and mentored high-performing teams of software engineers and developers"
      ],
      gradient: "from-slate-600 to-blue-600",
      icon: <Users className="h-5 w-5" />,
      achievements: ["ERP Development", "RPA Implementation", "Team Leadership"]
    },
    {
      title: "Sr. Software Engineer",
      company: "Bangla Trac Miaki VAS",
      location: "Dhaka, Bangladesh",
      period: "July 2012 - January 2014",
      duration: "1.5 Years",
      responsibilities: [
        "Collaborated with cross-functional teams to analyze and design system solutions",
        "Gathered and defined customer requirements to develop clear technical specifications",
        "Worked with project managers and quality assurance teams to resolve technical issues",
        "Developed scalable software solutions for telecommunications industry"
      ],
      gradient: "from-blue-700 to-slate-600",
      icon: <TrendingUp className="h-5 w-5" />,
      achievements: ["System Architecture", "Technical Analysis", "Cross-functional Collaboration"]
    },
    {
      title: "Software Engineer",
      company: "Choukosh",
      location: "Dhaka, Bangladesh",
      period: "January 2011 - June 2012",
      duration: "1.5 Years",
      responsibilities: [
        "Coordinated with engineering leads to gather and develop system requirements",
        "Designed and developed forward-thinking systems to meet user needs and improve productivity",
        "Collaborated with development teams to analyze potential system solutions"
      ],
      gradient: "from-slate-600 to-blue-500",
      icon: <Rocket className="h-5 w-5" />,
      achievements: ["Software Development", "System Design", "Requirement Analysis"]
    }
  ];

  const totalExperience = "15+ Years";
  const projectsCompleted = "50+";
  const teamsLed = "12+";

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
              <Building className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              {totalExperience} of progressive leadership and technical excellence across diverse industries
            </p>
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalExperience}</div>
              <div className="text-slate-600 font-medium">Professional Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projectsCompleted}</div>
              <div className="text-slate-600 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{teamsLed}</div>
              <div className="text-slate-600 font-medium">Team Members Led</div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <Card className="shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`bg-gradient-to-r ${exp.gradient} p-3 rounded-xl shadow-md flex-shrink-0`}>
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-slate-700 mb-3">
                            {exp.company}
                          </CardDescription>
                          
                          {/* Achievement Badges */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <Badge 
                                key={achievementIndex}
                                className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-1"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>

                          {/* Location and Period */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-blue-600" />
                              <span className="font-medium">{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4 text-blue-600" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white border-0 font-semibold px-3 py-1`}>
                              {exp.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800 text-lg flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                            <div className={`bg-gradient-to-r ${exp.gradient} text-transparent bg-clip-text mt-1.5 text-sm font-bold flex-shrink-0`}>
                              ▸
                            </div>
                            <span className="text-slate-700">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Career Progression Note */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3">
                <TrendingUp className="h-6 w-6" />
                Continuous Career Growth
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
                From hands-on software development to strategic leadership roles, my career journey reflects 
                continuous growth in technical expertise, team leadership, and business acumen. Each role has 
                built upon the previous, creating a comprehensive skill set that spans both technical execution 
                and strategic management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





// // Experience.tsx - Enhanced
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { CalendarDays, MapPin, Building, TrendingUp, Users, Target } from "lucide-react";

// export const Experience = () => {
//   const experiences = [
//     {
//       title: "Deputy General Manager",
//       company: "Wintel Limited",
//       location: "Dhaka, Bangladesh",
//       period: "March 2024 - Present",
//       duration: "Current",
//       responsibilities: [
//         "Strategic Planning: Develop and execute comprehensive strategies for IT and Technical Operations aligned with organizational goals",
//         "Leadership and Team Management: Lead, inspire, and manage diverse teams of IT professionals",
//         "Operational Oversight: Oversee day-to-day technical operations, ensuring reliability and security of IT systems",
//         "Resource Allocation: Efficiently allocate resources, including budgets and personnel, to optimize IT operations",
//         "Cybersecurity and Risk Management: Develop and implement cybersecurity measures",
//         "Vendor Management: Evaluate, select, and manage external vendors and technology partners"
//       ],
//       gradient: "from-blue-600 to-blue-700",
//       icon: <Target className="h-5 w-5" />
//     },
//     {
//       title: "Software Analyst",
//       company: "SSL Wireless (Software Shop Ltd)",
//       location: "Dhaka, Bangladesh",
//       period: "February 2014 - February 2024",
//       duration: "10 years",
//       responsibilities: [
//         "Team Lead on ERP Development for RMG & Interlining industry",
//         "Technical Project Manager for Fintech solutions",
//         "Implementation of RPA on ERP & Accounting Solutions",
//         "Decision Automation for Interlining & RMG Industry",
//         "Supervised team of 12 technologists on BDT 10 million software development project",
//         "Collaborated with cross-functional development team members to analyze potential system solutions",
//         "Built outstanding and dynamic team of software engineers and developers"
//       ],
//       gradient: "from-slate-600 to-blue-600",
//       icon: <Users className="h-5 w-5" />
//     },
//     {
//       title: "Sr. Software Engineer",
//       company: "Bangla Trac Miaki VAS",
//       location: "Dhaka, Bangladesh",
//       period: "July 2012 - January 2014",
//       duration: "1.5 years",
//       responsibilities: [
//         "Collaborated with cross-functional development team members to analyze potential system solutions",
//         "Gathered and defined customer requirements to develop clear specifications",
//         "Worked with project managers, developers, quality assurance and customers to resolve technical issues"
//       ],
//       gradient: "from-blue-700 to-slate-600",
//       icon: <TrendingUp className="h-5 w-5" />
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6">
//               <Building className="h-8 w-8 text-white" />
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
//               Professional Experience
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6"></div>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               15+ years of progressive growth and technical leadership across diverse industries
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-700/30 hidden md:block"></div>
            
//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <div key={index} className="relative">
//                   {/* Timeline dot */}
//                   <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-white shadow-lg hidden md:block`}></div>
                  
//                   <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
//                     <div className="md:w-1/2 mb-8 md:mb-0">
//                       {index % 2 === 0 ? (
//                         <div className="md:pr-12">
//                           <Card className="shadow-lg border-0 overflow-hidden hover:scale-105 transition-all duration-300">
//                             <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
//                             <CardHeader className="bg-white pb-4">
//                               <div className="flex items-start justify-between mb-4">
//                                 <div className="flex items-center gap-3">
//                                   <div className={`bg-gradient-to-r ${exp.gradient} p-2 rounded-lg`}>
//                                     {exp.icon}
//                                   </div>
//                                   <div>
//                                     <CardTitle className="text-xl text-slate-800">{exp.title}</CardTitle>
//                                     <CardDescription className="text-lg font-semibold text-slate-700 mt-1">
//                                       {exp.company}
//                                     </CardDescription>
//                                   </div>
//                                 </div>
//                                 <Badge className={`bg-gradient-to-r ${exp.gradient} text-white border-0`}>
//                                   {exp.duration}
//                                 </Badge>
//                               </div>
//                               <div className="flex items-center gap-4 text-sm text-slate-600">
//                                 <div className="flex items-center gap-2">
//                                   <CalendarDays className="h-4 w-4" />
//                                   {exp.period}
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                   <MapPin className="h-4 w-4" />
//                                   {exp.location}
//                                 </div>
//                               </div>
//                             </CardHeader>
//                             <CardContent className="bg-white pt-4">
//                               <ul className="space-y-3">
//                                 {exp.responsibilities.map((responsibility, respIndex) => (
//                                   <li key={respIndex} className="flex items-start gap-3 text-slate-600">
//                                     <div className={`bg-gradient-to-r ${exp.gradient} text-transparent bg-clip-text mt-1 text-xs font-bold flex-shrink-0`}>■</div>
//                                     <span className="text-sm leading-relaxed">{responsibility}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </CardContent>
//                           </Card>
//                         </div>
//                       ) : (
//                         <div className="md:pl-12">
//                           <Card className="shadow-lg border-0 overflow-hidden hover:scale-105 transition-all duration-300">
//                             <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
//                             <CardHeader className="bg-white pb-4">
//                               <div className="flex items-start justify-between mb-4">
//                                 <div className="flex items-center gap-3">
//                                   <div className={`bg-gradient-to-r ${exp.gradient} p-2 rounded-lg`}>
//                                     {exp.icon}
//                                   </div>
//                                   <div>
//                                     <CardTitle className="text-xl text-slate-800">{exp.title}</CardTitle>
//                                     <CardDescription className="text-lg font-semibold text-slate-700 mt-1">
//                                       {exp.company}
//                                     </CardDescription>
//                                   </div>
//                                 </div>
//                                 <Badge className={`bg-gradient-to-r ${exp.gradient} text-white border-0`}>
//                                   {exp.duration}
//                                 </Badge>
//                               </div>
//                               <div className="flex items-center gap-4 text-sm text-slate-600">
//                                 <div className="flex items-center gap-2">
//                                   <CalendarDays className="h-4 w-4" />
//                                   {exp.period}
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                   <MapPin className="h-4 w-4" />
//                                   {exp.location}
//                                 </div>
//                               </div>
//                             </CardHeader>
//                             <CardContent className="bg-white pt-4">
//                               <ul className="space-y-3">
//                                 {exp.responsibilities.map((responsibility, respIndex) => (
//                                   <li key={respIndex} className="flex items-start gap-3 text-slate-600">
//                                     <div className={`bg-gradient-to-r ${exp.gradient} text-transparent bg-clip-text mt-1 text-xs font-bold flex-shrink-0`}>■</div>
//                                     <span className="text-sm leading-relaxed">{responsibility}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </CardContent>
//                           </Card>
//                         </div>
//                       )}
//                     </div>
//                     <div className="md:w-1/2"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

































// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { CalendarDays, MapPin, Building } from "lucide-react";

// // export const Experience = () => {
// //   const experiences = [
// //     {
// //       title: "Deputy General Manager",
// //       company: "Wintel Limited",
// //       location: "Dhaka",
// //       period: "March 2024 - Current",
// //       responsibilities: [
// //         "Strategic Planning: Develop and execute comprehensive strategies for IT and Technical Operations aligned with organizational goals",
// //         "Leadership and Team Management: Lead, inspire, and manage diverse teams of IT professionals",
// //         "Operational Oversight: Oversee day-to-day technical operations, ensuring reliability and security of IT systems",
// //         "Resource Allocation: Efficiently allocate resources, including budgets and personnel, to optimize IT operations",
// //         "Cybersecurity and Risk Management: Develop and implement cybersecurity measures",
// //         "Vendor Management: Evaluate, select, and manage external vendors and technology partners"
// //       ],
// //       gradient: "from-blue-800 to-blue-900"
// //     },
// //     {
// //       title: "Software Analyst",
// //       company: "SSL Wireless (Software Shop Ltd)",
// //       location: "Dhaka",
// //       period: "February 2014 - February 2024",
// //       responsibilities: [
// //         "Team Lead on ERP Development for RMG & Interlining industry",
// //         "Technical Project Manager for Fintech solutions",
// //         "Implementation of RPA on ERP & Accounting Solutions",
// //         "Decision Automation for Interlining & RMG Industry",
// //         "Supervised team of 12 technologists on BDT 10 million software development project",
// //         "Collaborated with cross-functional development team members to analyze potential system solutions",
// //         "Built outstanding and dynamic team of software engineers and developers"
// //       ],
// //       gradient: "from-slate-700 to-blue-800"
// //     },
// //     {
// //       title: "Sr. Software Engineer",
// //       company: "Bangla Trac Miaki VAS",
// //       location: "Dhaka",
// //       period: "July 2012 - January 2014",
// //       responsibilities: [
// //         "Collaborated with cross-functional development team members to analyze potential system solutions",
// //         "Gathered and defined customer requirements to develop clear specifications",
// //         "Worked with project managers, developers, quality assurance and customers to resolve technical issues"
// //       ],
// //       gradient: "from-blue-900 to-slate-800"
// //     },
// //     {
// //       title: "Software Engineer",
// //       company: "Choukosh",
// //       location: "Dhaka",
// //       period: "January 2011 - June 2012",
// //       responsibilities: [
// //         "Coordinated with hardware and system engineering leads to gather and develop system requirements",
// //         "Designed and developed forward-thinking systems that meet user needs and improve productivity",
// //         "Collaborated with cross-functional development team members to analyze potential system solutions"
// //       ],
// //       gradient: "from-slate-800 to-blue-700"
// //     },
// //     {
// //       title: "Lecturer",
// //       company: "Daffodil Institute of IT",
// //       location: "Dhaka",
// //       period: "February 2011 - March 2011",
// //       responsibilities: [
// //         "Wrote and modernized PHP course materials, including syllabi, writing assignments and exams",
// //         "Collaborated with Lecturers to create dynamic, ongoing curriculum development program",
// //         "Tracked student assignments, attendance and test scores in online database"
// //       ],
// //       gradient: "from-blue-700 to-slate-700"
// //     },
// //     {
// //       title: "Web Developer & Designer",
// //       company: "OSource Bangladesh Ltd",
// //       location: "Dhaka",
// //       period: "January 2010 - October 2010",
// //       responsibilities: [
// //         "Created eye catching and functional digital design concepts across various platforms",
// //         "Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari",
// //         "Designed, implemented and monitored web pages and sites for continuous improvement",
// //         "Determined coding requirements for site creation, including e-commerce capability"
// //       ],
// //       gradient: "from-slate-600 to-blue-700"
// //     }
// //   ];

// //   return (
// //     <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-white">
// //       <div className="container mx-auto px-4">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
// //             <p className="text-xl text-muted-foreground">
// //               15+ years of professional growth and technical leadership
// //             </p>
// //           </div>

// //           <div className="space-y-8">
// //             {experiences.map((exp, index) => (
// //               <Card key={index} className="hover-scale colorful-shadow border-0 overflow-hidden">
// //                 <div className={`h-3 bg-gradient-to-r ${exp.gradient}`}></div>
// //                 <CardHeader className="bg-white">
// //                   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// //                     <div>
// //                       <CardTitle className={`text-xl bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>{exp.title}</CardTitle>
// //                       <CardDescription className="text-lg font-medium text-foreground mt-1">
// //                         {exp.company}
// //                       </CardDescription>
// //                     </div>
// //                     <div className="flex flex-col gap-2">
// //                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
// //                         <CalendarDays className="h-4 w-4" />
// //                         {exp.period}
// //                       </div>
// //                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
// //                         <MapPin className="h-4 w-4" />
// //                         {exp.location}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent className="bg-white">
// //                   <ul className="space-y-2">
// //                     {exp.responsibilities.map((responsibility, respIndex) => (
// //                       <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
// //                         <span className={`bg-gradient-to-r ${exp.gradient} text-transparent bg-clip-text mt-1.5 text-xs font-bold`}>●</span>
// //                         <span>{responsibility}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
