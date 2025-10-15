// TradeEdge.tsx - Tech Services & Solutions
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Smartphone, Shield, Zap, Rocket, Users } from "lucide-react";

export const TradeEdge = () => {
  const techServices = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions built from scratch to meet your specific business requirements",
      gradient: "from-blue-600 to-blue-700",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and continuous deployment pipelines",
      gradient: "from-slate-600 to-blue-600",
      features: ["AWS/Azure Setup", "CI/CD Pipeline", "Containerization", "Cloud Migration"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "ERP & Business Automation",
      description: "Streamline operations with custom ERP and process automation systems",
      gradient: "from-blue-700 to-slate-600",
      features: ["Custom ERP", "RPA Solutions", "Workflow Automation", "Inventory Management"]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile & Web Applications",
      description: "Responsive and high-performance applications for all platforms",
      gradient: "from-slate-600 to-blue-500",
      features: ["React Native", "Flutter", "PWA", "Cross-platform"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "15+ Years Expertise",
      description: "Proven track record in delivering successful tech solutions"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Delivery",
      description: "Agile development process ensuring timely project completion"
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Scalable Solutions",
      description: "Future-proof architectures that grow with your business"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Dedicated Support",
      description: "Continuous maintenance and technical support"
    }
  ];

  const technologyStack = [
    "PHP", "Laravel", "ReactJS", "Node.js", "MySQL", "MongoDB", 
    "AWS", "Docker", "CI/CD", "REST API", "jQuery", "Bootstrap"
  ];

  return (
    <section id="TradeEdge" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
              <Rocket className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Tech Services & Solutions
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Transform Your Business with Custom Technology Solutions - From Concept to Deployment
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {techServices.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 shadow-xl border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="bg-white pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-800 mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="bg-white pt-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex}
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-xl">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us & Technology Stack */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Why Choose Us */}
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <CardHeader className="bg-white pb-4">
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                  Why Choose Our Services?
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-white pt-4">
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
                      <div className="bg-blue-100 p-2 rounded-lg mt-1">
                        <div className="text-blue-600">
                          {reason.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{reason.title}</h4>
                        <p className="text-slate-600 text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-slate-600 to-blue-600"></div>
              <CardHeader className="bg-white pb-4">
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-slate-600 to-blue-600 rounded-full"></div>
                  Our Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-white pt-4">
                <p className="text-slate-600 mb-6">
                  Leveraging cutting-edge technologies to deliver robust, scalable, and high-performance solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {technologyStack.map((tech, index) => (
                    <Badge 
                      key={index}
                      className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-2 hover:bg-blue-100 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-slate-600 font-medium">Team Members</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Support Available</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3">
                <Zap className="h-6 w-6" />
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project requirements and create a custom technology solution 
                that drives your business forward. Get a free consultation and project estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-white/90 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="#contact">
                    Start Your Project
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-xl font-semibold"
                  asChild
                >
                  <a href="#projects">
                    View Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



















// // TradeEdge.tsx - Enhanced Professional Design
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ShoppingBag, Tag, TrendingUp, Users, Rocket, Shield, Zap, Globe } from "lucide-react";

// export const TradeEdge = () => {
//   const features = [
//     {
//       icon: <ShoppingBag className="h-6 w-6" />,
//       title: "E-Commerce Platform",
//       description: "Comprehensive online shopping experience with advanced features",
//       gradient: "from-blue-600 to-blue-700"
//     },
//     {
//       icon: <Tag className="h-6 w-6" />,
//       title: "Best Deals",
//       description: "Curated deals and exclusive discounts for premium customers",
//       gradient: "from-slate-600 to-blue-600"
//     },
//     {
//       icon: <TrendingUp className="h-6 w-6" />,
//       title: "Smart Shopping",
//       description: "AI-powered product recommendations and personalized experience",
//       gradient: "from-blue-700 to-slate-600"
//     },
//     {
//       icon: <Users className="h-6 w-6" />,
//       title: "Community Driven",
//       description: "User reviews, ratings, and social shopping features",
//       gradient: "from-slate-600 to-blue-500"
//     }
//   ];

//   const technicalHighlights = [
//     {
//       icon: <Rocket className="h-5 w-5" />,
//       title: "High Performance",
//       description: "Optimized for speed and scalability"
//     },
//     {
//       icon: <Shield className="h-5 w-5" />,
//       title: "Secure Payments",
//       description: "Multiple secure payment gateway integrations"
//     },
//     {
//       icon: <Zap className="h-5 w-5" />,
//       title: "Real-time Analytics",
//       description: "Advanced analytics and reporting dashboard"
//     },
//     {
//       icon: <Globe className="h-5 w-5" />,
//       title: "Multi-platform",
//       description: "Responsive design for all devices"
//     }
//   ];

//   return (
//     <section id="TradeEdge" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
//               <ShoppingBag className="h-10 w-10 text-white" />
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
//               TradeEdge
//             </h2>
//             <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6 rounded-full"></div>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
//               Your Ultimate E-Commerce Solution - Revolutionizing Online Shopping Experience
//             </p>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid lg:grid-cols-2 gap-8 mb-12">
//             {/* About TradeEdge */}
//             <Card className="shadow-xl border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300">
//               <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
//               <CardHeader className="bg-white pb-4">
//                 <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
//                   <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
//                   About TradeEdge
//                 </CardTitle>
//                 <CardDescription className="text-lg font-semibold text-slate-700">
//                   Next Generation E-Commerce Platform
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="bg-white pt-4">
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   TradeEdge is a cutting-edge e-commerce platform designed to bring the best shopping 
//                   experience directly to consumers. Built with modern technologies and user-centric design, 
//                   it offers a seamless, secure, and scalable solution for online businesses.
//                 </p>
                
//                 <div className="space-y-4 mb-6">
//                   <h4 className="font-semibold text-slate-800 text-lg">Technical Stack</h4>
//                   <div className="flex flex-wrap gap-3">
//                     <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-2">
//                       ReactJS
//                     </Badge>
//                     <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-2">
//                       Node.js
//                     </Badge>
//                     <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-2">
//                       MongoDB
//                     </Badge>
//                     <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-2">
//                       Payment Gateway
//                     </Badge>
//                     <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-2">
//                       AWS
//                     </Badge>
//                     <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium px-3 py-2">
//                       CI/CD
//                     </Badge>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Key Highlights */}
//             <Card className="shadow-xl border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300">
//               <div className="h-2 bg-gradient-to-r from-slate-600 to-blue-600"></div>
//               <CardHeader className="bg-white pb-4">
//                 <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
//                   <div className="w-2 h-8 bg-gradient-to-b from-slate-600 to-blue-600 rounded-full"></div>
//                   Platform Features
//                 </CardTitle>
//                 <CardDescription className="text-lg font-semibold text-slate-700">
//                   What Makes TradeEdge Special
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="bg-white pt-4">
//                 <div className="space-y-4">
//                   {technicalHighlights.map((highlight, index) => (
//                     <div key={index} className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
//                       <div className="bg-blue-100 p-2 rounded-lg mt-1">
//                         <div className="text-blue-600">
//                           {highlight.icon}
//                         </div>
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-slate-800">{highlight.title}</h4>
//                         <p className="text-slate-600 text-sm">{highlight.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg border border-blue-100">
//                   <h4 className="font-semibold text-blue-700 mb-2">Business Impact</h4>
//                   <p className="text-slate-600 text-sm">
//                     Designed to increase conversion rates, improve customer retention, and drive 
//                     sustainable business growth through innovative e-commerce solutions.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Feature Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {features.map((feature, index) => (
//               <Card key={index} className="group hover:scale-105 transition-all duration-300 shadow-lg border-0 overflow-hidden">
//                 <div className={`h-1 bg-gradient-to-r ${feature.gradient}`}></div>
//                 <CardContent className="p-6 text-center bg-white">
//                   <div className={`text-white mb-4 flex justify-center bg-gradient-to-r ${feature.gradient} w-14 h-14 rounded-2xl items-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
//                     {feature.icon}
//                   </div>
//                   <h4 className="font-semibold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors">
//                     {feature.title}
//                   </h4>
//                   <p className="text-sm text-slate-600 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="text-center">
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3">
//                 <Rocket className="h-6 w-6" />
//                 Ready to Experience TradeEdge?
//               </h3>
//               <p className="text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
//                 Join the revolution in e-commerce with TradeEdge - where innovation meets exceptional 
//                 user experience. Discover a platform built for performance, security, and growth.
//               </p>
//               <Button 
//                 size="lg" 
//                 className="bg-white text-slate-900 hover:bg-white/90 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
//               >
//                 <ShoppingBag className="mr-2 h-5 w-5" />
//                 Explore TradeEdge
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };