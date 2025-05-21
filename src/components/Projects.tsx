
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
  testimonialAuthor
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
        
        {testimonial && (
          <div className="mt-4 italic text-sm bg-gray-50 p-4 rounded border-l-2 border-nouveau-purple">
            "{testimonial}"
            {testimonialAuthor && (
              <div className="mt-2 text-right text-xs text-gray-600">- {testimonialAuthor}</div>
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
          />
          
          <ProjectCard
            title="Canada Reverse Income Calculator"
            description="A calculator to determine necessary gross income based on expenses"
            goal="Create a simple, fully closed system app with AI-based IDEs"
            problem="What gross income must I make for my expenses/budget?"
            solution="Based on the amount a user wants to spend each month, determine the necessary gross income"
            icon={<Code size={24} className="text-white" />}
            bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
          />
          
          <ProjectCard
            title="Motivation Bot"
            description="An AI-powered motivation assistant"
            goal="Leverage an LLM within an app"
            problem="Unclear on next steps in any situation, and unmotivated"
            solution="Provide motivation, action items and historical reference based on a user's current sentiment"
            icon={<Lightbulb size={24} className="text-white" />}
            bgImage="https://images.unsplash.com/photo-1583964699889-6b51214c7749?q=80&w=1974&auto=format&fit=crop"
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
