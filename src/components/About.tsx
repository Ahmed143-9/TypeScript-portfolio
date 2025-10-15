// About.tsx - Enhanced
import { Card, CardContent } from "@/components/ui/card";
import { Code, Building, Dumbbell, ChefHat, Award, Users, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Leadership",
      description: "15+ years leading software development teams and projects",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "ERP & Automation",
      description: "Specialized in Decision Automation, RPA, and ERP solutions",
      color: "from-slate-600 to-blue-600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Vision",
      description: "Driving business growth through innovative technology solutions",
      color: "from-blue-700 to-slate-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Management",
      description: "Leading diverse teams of technical professionals",
      color: "from-slate-600 to-blue-500"
    }
  ];

  const personalHighlights = [
    {
      icon: <Dumbbell className="h-5 w-5" />,
      title: "Fitness Professional",
      description: "Certified fitness trainer and bodybuilding competitor"
    },
    {
      icon: <ChefHat className="h-5 w-5" />,
      title: "Culinary Artist",
      description: "Passionate cook experimenting with new recipes"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Continuous Learner",
      description: "Always expanding skills and knowledge"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Professional Profile
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 font-medium">
              Deputy General Manager at Wintel Limited
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-semibold mb-6 text-slate-800 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                  Professional Journey
                </h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    With a rich history of over 15 years in IT and software, I bring a wealth of expertise as a seasoned software analyst. 
                    My journey is marked by successful ventures, demonstrating a history of significant contributions to various projects.
                  </p>
                  <p>
                    I specialize in ERP, Decision Automation, and RPA, reflecting my in-depth understanding of streamlining processes 
                    and leveraging cutting-edge technologies for business growth. Currently serving as Deputy General Manager at Wintel Limited, 
                    I lead strategic IT initiatives and manage diverse teams of technical professionals.
                  </p>
                  <p>
                    My technical foundation spans PHP, MySQL, HTML, CSS, jQuery, Laravel, ReactJS, CI/CD Pipeline, MongoDB, 
                    and Adobe Creative Suite. I am passionate about continuing to contribute to innovative and impactful projects 
                    in the ever-evolving landscape of technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Users className="h-6 w-6" />
                  Beyond Technology
                </h4>
                <p className="mb-6 opacity-90 leading-relaxed">
                  When I'm not immersed in code and systems, I'm equally passionate about fitness and culinary arts. 
                  I hold certifications in Fitness Training and Nutrition, compete in bodybuilding and powerlifting competitions, 
                  and love experimenting with new recipes in the kitchen.
                </p>
                
                <div className="space-y-4">
                  {personalHighlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="bg-white/20 p-2 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm opacity-80">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 shadow-lg border-0 overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
                <CardContent className="p-6 text-center bg-white">
                  <div className={`text-white mb-4 flex justify-center bg-gradient-to-r ${item.color} w-14 h-14 rounded-2xl items-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};






















// import { Card, CardContent } from "@/components/ui/card";
// import { Code, Building, Dumbbell, ChefHat } from "lucide-react";

// export const About = () => {
//   const highlights = [
//     {
//       icon: <Code className="h-6 w-6" />,
//       title: "Technical Leadership",
//       description: "15+ years leading software development teams and projects",
//       color: "from-blue-800 to-blue-900"
//     },
//     {
//       icon: <Building className="h-6 w-6" />,
//       title: "ERP & Automation",
//       description: "Specialized in Decision Automation, RPA, and ERP solutions",
//       color: "from-slate-700 to-blue-800"
//     },
//     {
//       icon: <Dumbbell className="h-6 w-6" />,
//       title: "Fitness Enthusiast",
//       description: "Certified fitness trainer and bodybuilding competitor",
//       color: "from-blue-900 to-slate-800"
//     },
//     {
//       icon: <ChefHat className="h-6 w-6" />,
//       title: "Culinary Artist",
//       description: "Passionate cook who loves experimenting with new recipes",
//       color: "from-slate-800 to-blue-700"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
//             <p className="text-xl text-muted-foreground">
//               Deputy General Manager at Wintel Limited
//             </p>
//           </div>

//           <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
//             <div className="text-center max-w-3xl mx-auto">
//               <h3 className="text-2xl font-semibold mb-6 text-blue-800">Professional Journey</h3>
//               <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
//                 With a rich history of over 15 years in IT and software, I bring a wealth of expertise as a seasoned software analyst. 
//                 My journey is marked by successful ventures, demonstrating a history of significant contributions to various projects.
//               </p>
//               <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
//                 I specialize in ERP, Decision Automation, and RPA, reflecting my in-depth understanding of streamlining processes 
//                 and leveraging cutting-edge technologies for business growth. Currently serving as Deputy General Manager at Wintel Limited, 
//                 I lead strategic IT initiatives and manage diverse teams of technical professionals.
//               </p>
//               <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
//                 My technical foundation spans PHP, MySQL, HTML, CSS, jQuery, Laravel, ReactJS, CI/CD Pipeline, MongoDB, 
//                 and Adobe Creative Suite. I am passionate about continuing to contribute to innovative and impactful projects 
//                 in the ever-evolving landscape of technology.
//               </p>
              
//               <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg mb-6 colorful-shadow">
//                 <h4 className="text-xl font-semibold mb-3 text-blue-800">Beyond Technology</h4>
//                 <p className="text-muted-foreground">
//                   When I'm not immersed in code and systems, I'm equally passionate about fitness and culinary arts. 
//                   I hold certifications in Fitness Training and Nutrition, compete in bodybuilding and powerlifting competitions, 
//                   and love experimenting with new recipes in the kitchen. I believe in maintaining a balanced lifestyle that 
//                   fuels both professional excellence and personal fulfillment.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {highlights.map((item, index) => (
//               <Card key={index} className="hover-scale colorful-shadow border-0 overflow-hidden">
//                 <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
//                 <CardContent className="p-6 text-center bg-white">
//                   <div className={`text-white mb-4 flex justify-center bg-gradient-to-r ${item.color} w-12 h-12 rounded-full items-center mx-auto`}>
//                     {item.icon}
//                   </div>
//                   <h4 className="font-semibold mb-2">{item.title}</h4>
//                   <p className="text-sm text-muted-foreground">
//                     {item.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// -------------------------------------------------------------------------------------------