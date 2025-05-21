
import React from 'react';
import { Brain, Code, Calendar, Lightbulb, Search } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  goal: string;
  problem: string;
  solution: string;
  icon: React.ReactNode;
  bgImage: string;
  testimonial?: string;
  testimonialAuthor?: string;
  testimonial2?: string;
  testimonialAuthor2?: string;
  links?: Array<{url: string; label: string; type: "podcast" | "document" | "app"}>;
}

const ProjectCard = ({
  title,
  description,
  goal,
  problem,
  solution,
  icon,
  bgImage,
  testimonial,
  testimonialAuthor,
  testimonial2,
  testimonialAuthor2,
  links
}: ProjectProps) => {
  return (
    <div className="project-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
      <div 
        className="p-4 text-white flex items-center relative"
        style={{
          background: `linear-gradient(to right, rgba(139, 92, 246, 0.9), rgba(249, 115, 22, 0.9)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
          {icon}
        </div>
        <h3 className="font-playfair font-bold text-xl">{title}</h3>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="mb-4 text-sm text-gray-600">{description}</div>
        
        <div className="space-y-3 mb-6">
          <div>
            <span className="ai-badge">AI Goal</span>
            <p className="mt-1 ml-0.5 text-sm">{goal}</p>
          </div>
          <div>
            <span className="ai-badge bg-gradient-to-r from-amber-500 to-nouveau-orange">User Problem</span>
            <p className="mt-1 ml-0.5 text-sm">{problem}</p>
          </div>
          <div>
            <span className="ai-badge bg-gradient-to-r from-nouveau-blue to-nouveau-vividPurple">Solution</span>
            <p className="mt-1 ml-0.5 text-sm">{solution}</p>
          </div>
        </div>
        
        <div className="border border-dashed border-gray-300 rounded-md p-4 text-center text-gray-500 my-4">
          <p className="text-sm">Project Screenshot</p>
          <p className="text-xs opacity-50">(Placeholder)</p>
        </div>
        
        {links && links.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  text-sm px-3 py-2 rounded-md text-white flex items-center justify-center
                  ${link.type === 'podcast' ? 'bg-gradient-to-r from-nouveau-purple to-nouveau-vividPurple' : 
                  link.type === 'document' ? 'bg-gradient-to-r from-nouveau-orange to-amber-500' :
                  'bg-gradient-to-r from-nouveau-blue to-cyan-500'}
                  hover:opacity-90 transition-opacity
                `}
              >
                {link.type === 'podcast' && <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a3 3 0 00-3 3v2a3 3 0 006 0V5a3 3 0 00-3-3zm0 8a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm8-1a1 1 0 10-2 0v1a7 7 0 01-14 0v-1a1 1 0 10-2 0v1a9 9 0 1018 0v-1z"></path></svg>}
                {link.type === 'document' && <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>}
                {link.type === 'app' && <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
                {link.label}
              </a>
            ))}
          </div>
        )}
        
        {testimonial && (
          <div className="mt-4 italic text-sm bg-gray-50 p-4 rounded border-l-2 border-nouveau-purple">
            "{testimonial}"
            {testimonialAuthor && (
              <div className="mt-2 text-right text-xs text-gray-600">- {testimonialAuthor}</div>
            )}
          </div>
        )}
        
        {testimonial2 && (
          <div className="mt-4 italic text-sm bg-gray-50 p-4 rounded border-l-2 border-nouveau-orange">
            "{testimonial2}"
            {testimonialAuthor2 && (
              <div className="mt-2 text-right text-xs text-gray-600">- {testimonialAuthor2}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-4 relative">
          AI Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Exploring AI through hands-on projects - building with AI and leveraging its capabilities
          to solve real problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProjectCard
            title="Research with Focus: PMs who Build"
            description="Exploring the differences between conversational LLMs and AI IDEs through hands-on testing & prototyping"
            goal="Create educational content for product managers about AI technologies"
            problem="Product managers need practical AI knowledge"
            solution="Created self-paced AI learning courses and shared them with PMs in my network (10-15)"
            icon={<Brain size={24} className="text-white" />}
            bgImage="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop"
            testimonial="Thanks Dan! This is all great and exactly the sort of thing I need for AI."
            testimonialAuthor="Former PM co-worker"
            testimonial2="Whoa, thanks for all of this!"
            testimonialAuthor2="Former Eng co-worker"
            links={[
              { url: "#", label: "AI Study Guide Podcast", type: "podcast" },
              { url: "#", label: "AI Study Guide Doc", type: "document" },
              { url: "#", label: "AI Tools Landscape Podcast", type: "podcast" },
              { url: "#", label: "AI Tools Landscape Doc", type: "document" }
            ]}
          />
          
          <ProjectCard
            title="Canada Reverse Income Calculator"
            description="A calculator to determine necessary gross income based on expenses"
            goal="Create a simple, fully closed system app with AI-based IDEs"
            problem="What gross income must I make for my expenses/budget?"
            solution="Based on the amount a user wants to spend each month, determine the necessary gross income"
            icon={<Code size={24} className="text-white" />}
            bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
            links={[
              { url: "#", label: "Try Calculator", type: "app" },
              { url: "#", label: "Project Details", type: "document" }
            ]}
          />
          
          <ProjectCard
            title="Motivation Bot"
            description="An AI-powered motivation assistant"
            goal="Leverage an LLM within an app"
            problem="Unclear on next steps in any situation, and unmotivated"
            solution="Provide motivation, action items and historical reference based on a user's current sentiment"
            icon={<Lightbulb size={24} className="text-white" />}
            bgImage="https://images.unsplash.com/photo-1583964699889-6b51214c7749?q=80&w=1974&auto=format&fit=crop"
            links={[
              { url: "#", label: "Try Demo", type: "app" }
            ]}
          />
          
          <ProjectCard
            title="Calendar Analyzer (In Progress)"
            description="Intelligent calendar analysis for better preparation"
            goal="Leverage external data to use with a local LLM"
            problem="What is important for me to focus on this week? How should I prepare?"
            solution="Based on key calendar event indicators, determine priority events and how to prep"
            icon={<Calendar size={24} className="text-white" />}
            bgImage="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
