// Contact.tsx - Enhanced
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Linkedin, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "khaledcis007@gmail.com",
      href: "mailto:khaledcis007@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "+880 1685 713940",
      href: "tel:+8801685713940",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: "North Adabor, Mohammadpur, Dhaka - 1207",
      href: null,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      content: "linkedin.com/in/khaledakand",
      href: "https://www.linkedin.com/in/khaledakand/",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Let's discuss your next project, collaboration opportunity, or how we can drive innovation together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-semibold mb-6 text-slate-800 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
                  Let's Connect
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  With over 15 years of experience in IT and software development, I'm always 
                  interested in discussing new opportunities, innovative projects, or potential 
                  collaborations. Whether you need technical leadership, software development, 
                  or consulting services, I'd love to hear from you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
                      <div className={`bg-gradient-to-r ${info.gradient} p-3 rounded-xl shadow-sm`}>
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800">{info.title}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-slate-600 hover:text-blue-600 transition-colors"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5" />
                  <h4 className="font-semibold">Current Position</h4>
                </div>
                <p className="opacity-90 leading-relaxed">
                  Deputy General Manager at Wintel Limited, leading strategic IT initiatives 
                  and managing technical operations with a focus on innovation and excellence.
                </p>
              </div>
            </div>

            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <CardHeader className="bg-white pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl resize-none"
                      placeholder="Tell me about your project or how I can help..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 h-12 rounded-xl shadow-lg hover:shadow-xl"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};






















// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";
// import { useState } from "react";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="h-5 w-5" />,
//       title: "Email",
//       content: "khaledcis007@gmail.com",
//       href: "mailto:khaledcis007@gmail.com",
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: <Phone className="h-5 w-5" />,
//       title: "Phone",
//       content: "01685713940",
//       href: "tel:01685713940",
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <MapPin className="h-5 w-5" />,
//       title: "Address",
//       content: "House # 1/J, North Adabor, Mohammadpur, Dhaka - 1207",
//       href: null,
//       gradient: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: <Linkedin className="h-5 w-5" />,
//       title: "LinkedIn",
//       content: "linkedin.com/in/khaledakand",
//       href: "https://www.linkedin.com/in/khaledakand/",
//       gradient: "from-orange-500 to-red-500"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
//             <p className="text-xl text-muted-foreground">
//               Let's discuss your next project or opportunity
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Let's Connect</h3>
//               <p className="text-muted-foreground mb-8">
//                 With over 15 years of experience in IT and software development, I'm always 
//                 interested in discussing new opportunities, innovative projects, or potential 
//                 collaborations. Whether you need technical leadership, software development, 
//                 or consulting services, I'd love to hear from you.
//               </p>

//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start space-x-4">
//                     <div className={`bg-gradient-to-r ${info.gradient} p-3 rounded-full`}>
//                       <div className="text-white">
//                         {info.icon}
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-medium">{info.title}</p>
//                       {info.href ? (
//                         <a 
//                           href={info.href} 
//                           className="text-muted-foreground hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all"
//                           target={info.href.startsWith('http') ? '_blank' : undefined}
//                           rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                         >
//                           {info.content}
//                         </a>
//                       ) : (
//                         <p className="text-muted-foreground">{info.content}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg colorful-shadow">
//                 <h4 className="font-semibold mb-2 text-purple-700">Current Position</h4>
//                 <p className="text-muted-foreground">
//                   Deputy General Manager at Wintel Limited, leading strategic IT initiatives 
//                   and managing technical operations.
//                 </p>
//               </div>
//             </div>

//             <Card className="colorful-shadow border-0 overflow-hidden">
//               <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
//               <CardHeader className="bg-white">
//                 <CardTitle className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Send a Message</CardTitle>
//                 <CardDescription>
//                   Fill out the form below and I'll get back to you soon.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="bg-white">
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="focus:ring-purple-500 focus:border-purple-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="focus:ring-purple-500 focus:border-purple-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="focus:ring-purple-500 focus:border-purple-500"
//                       required
//                     />
//                   </div>
//                   <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all">
//                     <Send className="mr-2 h-4 w-4" />
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
