// Skills.tsx - Enhanced
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Cloud, Cpu, Zap, Target, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-600 to-blue-700",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "ReactJS", level: 85 },
        { name: "jQuery", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-slate-600 to-blue-600",
      skills: [
        { name: "PHP", level: 94 },
        { name: "Laravel", level: 89 },
        { name: "MySQL", level: 91 },
        { name: "MongoDB", level: 82 },
        { name: "Node.js", level: 78 }
      ]
    },
    {
      title: "Design & Creative",
      icon: <Palette className="h-6 w-6" />,
      gradient: "from-blue-700 to-slate-600",
      skills: [
        { name: "Adobe Creative Suite", level: 87 },
        { name: "UI/UX Design", level: 83 },
        { name: "Responsive Design", level: 95 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="h-6 w-6" />,
      gradient: "from-slate-600 to-blue-500",
      skills: [
        { name: "CI/CD Pipeline", level: 84 },
        { name: "Docker", level: 76 },
        { name: "Git", level: 93 },
        { name: "AWS", level: 72 },
        { name: "Linux", level: 88 }
      ]
    }
  ];

  const expertiseAreas = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "ERP Solutions",
      description: "Custom Enterprise Resource Planning systems tailored for specific industries"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Decision Automation",
      description: "Intelligent systems for automated business decision-making processes"
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Robotic Process Automation",
      description: "Automating repetitive tasks and business processes for efficiency"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Leadership",
      description: "Managing and mentoring technical teams for optimal performance"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              15+ years of honed technical skills across diverse technologies and platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <Card key={index} className="shadow-lg border-0 overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                  <CardHeader className="bg-white pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`bg-gradient-to-r ${category.gradient} p-2 rounded-lg`}>
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl text-slate-800">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="bg-white pt-4">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-slate-700">{skill.name}</span>
                            <span className="text-sm font-semibold text-slate-600">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div 
                              className={`bg-gradient-to-r ${category.gradient} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Target className="h-6 w-6" />
                  Specialized Expertise
                </h3>
                <p className="mb-8 opacity-90 leading-relaxed">
                  Beyond technical proficiency, I bring specialized expertise in areas that drive 
                  business transformation and technological innovation. My focus is on creating 
                  solutions that not only work but also deliver measurable business value.
                </p>
                
                <div className="space-y-6">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="bg-white/20 p-2 rounded-lg mt-1">
                        {area.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{area.title}</h4>
                        <p className="opacity-80 leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-lg border-0 overflow-hidden">
                <CardHeader className="bg-white pb-4">
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                    Technical Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white pt-4">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      {[
                        "PHP", "MySQL", "HTML5", "CSS3", "jQuery", "Laravel", 
                        "ReactJS", "CI/CD", "MongoDB", "Adobe Suite", "RPA", 
                        "ERP Systems", "Automation", "Team Leadership"
                      ].map((skill, index) => (
                        <Badge 
                          key={index}
                          variant="secondary" 
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 font-medium px-3 py-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
















// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// export const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "PHP", level: "Excellent" },
//         { name: "HTML5 & CSS3", level: "Excellent" },
//         { name: "ReactJS", level: "Good" },
//         { name: "Python", level: "Basic" },
//         { name: "MySQL", level: "Very Good" },
//         { name: "MongoDB", level: "Good" }
//       ]
//     },
//     {
//       title: "Technical Expertise",
//       skills: [
//         { name: "ERP Development", level: "Excellent" },
//         { name: "Decision Automation", level: "Excellent" },
//         { name: "RPA", level: "Excellent" },
//         { name: "Rest API", level: "Excellent" },
//         { name: "Web Development", level: "Excellent" },
//         { name: "Bootstrap", level: "Very Good" }
//       ]
//     },
//     {
//       title: "Design & Creative",
//       skills: [
//         { name: "Adobe Photoshop", level: "Excellent" },
//         { name: "Adobe Illustrator", level: "Excellent" },
//         { name: "Web Design", level: "Excellent" },
//         { name: "Graphic Design", level: "Very Good" }
//       ]
//     },
//     {
//       title: "Industry Specialization",
//       skills: [
//         { name: "Banking & MFI", level: "Expert" },
//         { name: "RMG Industry", level: "Expert" },
//         { name: "Interlining", level: "Expert" },
//         { name: "Payment Gateway", level: "Expert" },
//         { name: "Telecommunications", level: "Excellent" },
//         { name: "Fintech", level: "Expert" }
//       ]
//     }
//   ];

//   const getSkillColor = (level: string) => {
//     switch (level) {
//       case "Excellent":
//       case "Expert":
//         return "bg-blue-600 text-white border-blue-600";
//       case "Very Good":
//         return "bg-blue-500 text-white border-blue-500";
//       case "Good":
//         return "bg-slate-500 text-white border-slate-500";
//       case "Basic":
//         return "bg-slate-400 text-white border-slate-400";
//       default:
//         return "bg-slate-200 text-slate-700 border-slate-300";
//     }
//   };

//   return (
//     <section id="skills" className="py-20 bg-slate-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Professional Skills</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Comprehensive technical expertise developed through 15+ years of professional experience
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {skillCategories.map((category, index) => (
//               <Card key={index} className="border border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="border-b border-slate-100 pb-4">
//                   <CardTitle className="text-lg font-semibold text-slate-800">{category.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-5">
//                   <div className="space-y-3">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div key={skillIndex} className="flex items-center justify-between">
//                         <span className="text-sm font-medium text-slate-700">{skill.name}</span>
//                         <Badge 
//                           className={`${getSkillColor(skill.level)} text-xs px-3 py-1 font-normal`}
//                         >
//                           {skill.level}
//                         </Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="mt-8">
//             <Card className="max-w-3xl mx-auto border border-slate-200 bg-white">
//               <CardHeader className="border-b border-slate-100 pb-4">
//                 <CardTitle className="text-lg font-semibold text-slate-800 text-center">Languages</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-5">
//                 <div className="flex flex-wrap gap-3 justify-center">
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm font-medium text-slate-700">English</span>
//                     <Badge className="bg-blue-600 text-white border-0 text-xs px-3 py-1">
//                       Native
//                     </Badge>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm font-medium text-slate-700">Bangla</span>
//                     <Badge className="bg-blue-600 text-white border-0 text-xs px-3 py-1">
//                       Native
//                     </Badge>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm font-medium text-slate-700">Hindi</span>
//                     <Badge className="bg-slate-500 text-white border-0 text-xs px-3 py-1">
//                       Novice
//                     </Badge>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };