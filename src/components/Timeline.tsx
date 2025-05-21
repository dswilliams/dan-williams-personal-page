
import React from 'react';
import { GraduationCap } from "lucide-react";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  isLeft: boolean;
  isEducation?: boolean;
}

const TimelineItem = ({ date, title, company, isLeft, isEducation }: TimelineItemProps) => {
  const itemClass = isLeft ? 'timeline-left' : 'timeline-right';
  
  return (
    <div className={`timeline-item ${itemClass} animate-slide-in`} style={{animationDelay: `${isLeft ? 0.2 : 0.4}s`}}>
      <div className={`bg-white shadow-md p-6 rounded-lg ${isEducation ? 'border-l-4 border-nouveau-orange' : 'border-l-4 border-nouveau-vividPurple'}`}>
        <h3 className={`${isEducation ? 'text-nouveau-orange' : 'text-nouveau-purple'} font-bold text-lg`}>{date}</h3>
        <h4 className="font-playfair text-xl font-semibold mt-1">{title}</h4>
        <p className="text-gray-600">{company}</p>
        {isEducation && <GraduationCap size={18} className="mt-2 text-nouveau-orange" />}
      </div>
    </div>
  );
};

const Timeline = () => {
  const experiences = [
    { 
      date: 'Mar 2022 - Feb 2025', 
      title: 'Group Product Manager and Site Lead', 
      company: 'Justworks',
      isEducation: false
    },
    { 
      date: 'Feb 2020 - Feb 2022', 
      title: 'Senior Product Manager', 
      company: 'Instacart',
      isEducation: false
    },
    { 
      date: 'Jan 2016 - Feb 2020', 
      title: 'Director of Product and Site Lead', 
      company: 'WorkMarket (ADP)',
      isEducation: false
    },
    { 
      date: 'Apr 2010 - Dec 2015', 
      title: 'QA → QA Lead → Team Manager → Product Manager', 
      company: 'Rakuten Kobo',
      isEducation: false
    },
    { 
      date: '2005 - 2009', 
      title: 'Bachelor of Science, Computer Engineering', 
      company: 'University of Waterloo',
      isEducation: true
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 relative">
          Professional Journey
        </h2>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              isLeft={index % 2 === 0}
              isEducation={exp.isEducation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
