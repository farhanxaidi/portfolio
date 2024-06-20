"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About me
const about = {
  title: "About me",
  description: "",
  info: [
    {
      feildName: "Name",
      feildValue: "Syed Farhan Ali Zaidi"
    },
    {
      feildName: "Phone",
      feildValue: "(+92) 309 8979449"
    },
    {
      feildName: "Experience",
      feildValue: "1 Year"
    },
    {
      feildName: "Nationality",
      feildValue: "Pakistani"
    },
    {
      feildName: "Email",
      feildValue: "syedfarhanxaidi@gmail.com"
    },
    {
      feildName: "Freelance",
      feildValue: "Available"
    },

  ]
};

// Experience
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "",
  items: [
    {
      company: "Seebiz Pvt Ltd",
      position: "Trainee Software Engineer",
      duration: "Jan, 2024 - Present",
    },
    {
      company: "Corvit System",
      position: "Trainee Software Engineer",
      duration: "Jun, 2023 - Dec, 2023",
    },
  ]
};

const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My education',
  description: "",
  items: [
    {
      insitution: "University of Center Punjab",
      degree: "BS Computer Science",
      duration: "2018-2022",
    },
    {
      insitution: "Goverment College of Technology",
      degree: "DAE Mechanical Engineering Technology",
      duration: "2014-2017",
    },
  ]
};

const certification = {
  icon: '/assets/resume/badge.svg',
  title: 'My certification',
  description: "",
  items: [
    {
      insitution: "Seebiz Pvt Ltd",
      certification: "Trainee Software Engineer",
      duration: "Jan, 2024 - Present",
    },
    {
      insitution: "Corvit System",
      certification: "Trainee Software Engineer",
      duration: "Jun, 2023 - Dec, 2023",
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "HTML",
    },
    {
      icon: <FaCss3/>,
      name: "CSS",
    },
    {
      icon: <FaJs/>,
      name: "JavaScript",
    },
    {
      icon: <FaReact/>,
      name: "React",
    },
    {
      icon: <SiNextdotjs/>,
      name: "NextJs",
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwindcss",
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJs",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
  ]
}
function Resume() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className= "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full" >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-m-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>

            </TabsContent>
            <TabsContent value="education" className="w-full" >
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-m-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.insitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full" >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) =>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="certification" className="w-full" >
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certification.title}</h3>
                <p className="max-m-[600px] text-white/60 mx-auto xl:mx-0">{certification.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certification.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.certification}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.insitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full h-full text-center xl:text-left" >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.feildName}</span>
                          <span className="text-xl">{item.feildValue}</span>
                        </li>
                      );
                    })}
                </ul>    
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
