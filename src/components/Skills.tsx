import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "PHP", level: "Excellent" },
        { name: "HTML5 & CSS3", level: "Excellent" },
        { name: "ReactJS", level: "Good" },
        { name: "Python", level: "Basic" },
        { name: "MySQL", level: "Very Good" },
        { name: "MongoDB", level: "Good" }
      ]
    },
    {
      title: "Technical Expertise",
      skills: [
        { name: "ERP Development", level: "Excellent" },
        { name: "Decision Automation", level: "Excellent" },
        { name: "RPA", level: "Excellent" },
        { name: "Rest API", level: "Excellent" },
        { name: "Web Development", level: "Excellent" },
        { name: "Bootstrap", level: "Very Good" }
      ]
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "Adobe Photoshop", level: "Excellent" },
        { name: "Adobe Illustrator", level: "Excellent" },
        { name: "Web Design", level: "Excellent" },
        { name: "Graphic Design", level: "Very Good" }
      ]
    },
    {
      title: "Industry Specialization",
      skills: [
        { name: "Banking & MFI", level: "Expert" },
        { name: "RMG Industry", level: "Expert" },
        { name: "Interlining", level: "Expert" },
        { name: "Payment Gateway", level: "Expert" },
        { name: "Telecommunications", level: "Excellent" },
        { name: "Fintech", level: "Expert" }
      ]
    }
  ];

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Excellent":
      case "Expert":
        return "bg-blue-600 text-white border-blue-600";
      case "Very Good":
        return "bg-blue-500 text-white border-blue-500";
      case "Good":
        return "bg-slate-500 text-white border-slate-500";
      case "Basic":
        return "bg-slate-400 text-white border-slate-400";
      default:
        return "bg-slate-200 text-slate-700 border-slate-300";
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Professional Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive technical expertise developed through 15+ years of professional experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="border-b border-slate-100 pb-4">
                  <CardTitle className="text-lg font-semibold text-slate-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <Badge 
                          className={`${getSkillColor(skill.level)} text-xs px-3 py-1 font-normal`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Card className="max-w-3xl mx-auto border border-slate-200 bg-white">
              <CardHeader className="border-b border-slate-100 pb-4">
                <CardTitle className="text-lg font-semibold text-slate-800 text-center">Languages</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">English</span>
                    <Badge className="bg-blue-600 text-white border-0 text-xs px-3 py-1">
                      Native
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">Bangla</span>
                    <Badge className="bg-blue-600 text-white border-0 text-xs px-3 py-1">
                      Native
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">Hindi</span>
                    <Badge className="bg-slate-500 text-white border-0 text-xs px-3 py-1">
                      Novice
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};