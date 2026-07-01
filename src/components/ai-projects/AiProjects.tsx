import React, { useState, useEffect, FC } from 'react';
import { Project, projectsData } from './ProjectConfig';
import './AiProjects.scss';
import ispa1 from "../../images/projects/automation/ISPA-Flow-1.png"
import ispa2 from "../../images/projects/automation/ISPA-Flow-2.png"
import ispa3 from "../../images/projects/automation/ISPA-Flow-3.png"
import ispa4 from "../../images/projects/automation/ISPA-Flow-4.png"
import ra1 from "../../images/projects/automation/RA-flow-1.png"
import ra2 from "../../images/projects/automation//RA-flow-2.png"
import ra3 from "../../images/projects/automation/ISPA-Flow-3.png"
import ra4 from "../../images/projects/automation/ISPA-Flow-4.png"
import { MdOutlineWebhook } from 'react-icons/md';
import { LuBrain } from 'react-icons/lu';
import { TbTextScanAi } from 'react-icons/tb';
import { VscTypeHierarchy } from 'react-icons/vsc';
import { GrUpdate } from 'react-icons/gr';
import { SectionWrapper } from '../layout/SectionWrapper';

interface Props {
  styles: {};
}
export const AiProjects: FC<Props> = ({ styles }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);
  const [activeCarouselSlide, setActiveCarouselSlide] = useState<{ [key: string]: number }>({
    'isp-assistant': 0,
    'recruitment-assistant': 0,
  });

  // SVG Icons Helper
  const renderIcon = (type: string) => {
    switch (type) {
      case 'webhook':
        return <MdOutlineWebhook />;
      case 'database':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>;
      case 'ai':
        return <LuBrain />;
      case 'slack':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
      case 'calendar':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
      case 'email':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
      case 'timer':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
      case 'check':
        return <TbTextScanAi />;
      case 'tickets':
        return <VscTypeHierarchy />;
        case 'update': 
        return <GrUpdate />;
      default:
        return null;
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const handleNextSlide = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCarouselSlide((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % 4,
    }));
  };

  const handlePrevSlide = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCarouselSlide((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + 3) % 4,
    }));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveWorkflowIndex(0);
  };

  // Modern UI Mockups to use inside the visual placeholder carousels
  const renderDashboardMockup = (projectId: string, slideIndex: number) => {
    if (projectId === 'isp-assistant') {
      if (slideIndex === 0) {
        return (<img className="img-fluid" src={ispa1}></img>);
      } else if (slideIndex === 1) {
        return (<img className="img-fluid" src={ispa2}></img>);
      } else if(slideIndex === 2) {
        return (<img className="img-fluid" src={ispa3}></img>);
      } else {
        return (<img className="img-fluid" src={ispa4}></img>);
      }
    } else {
      if (slideIndex === 0) {
        return (<img className="img-fluid" src={ra1}></img>);
      } else if (slideIndex === 1) {
        return (<img className="img-fluid" src={ra2}></img>);
      } else if(slideIndex === 2) {
        return (<img className="img-fluid" src={ra3}></img>);
      } else {
        return (<img className="img-fluid" src={ra4}></img>);
      }
    }
  };

  return (
    <SectionWrapper name="portfolio p-auto-section" styles={styles} id="automations">
      <div className="p-auto-wrapper">
        {/* Section Header matching your existing design */}
        <div className="p-auto-header-area">
          <span className="p-auto-section-tag">Portfolio</span>
          <h2 className="p-auto-section-title">Automations</h2>
          <p className="p-auto-section-subtitle">
            Engineered custom business process architectures integrating AI capabilities with core applications. Click any card to explore deep workflow layouts.
          </p>
        </div>

        {/* Alternating Project Grid */}
        <div className="p-auto-projects-grid">
          {projectsData.map((project, index) => {
            const currentSlide = activeCarouselSlide[project.id];
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className={`p-auto-project-row ${isReverse ? 'is-reverse' : ''}`}
                onClick={() => openModal(project)}
              >
                {/* Image / Mockup Carousel Column */}
                <div className="p-auto-visual-col">
                  <div className="p-auto-carousel-container">
                    <button
                      className="p-auto-nav-btn p-auto-prev-btn"
                      onClick={(e) => handlePrevSlide(project.id, e)}
                      aria-label="Previous Slide"
                    >
                      &#10216;
                    </button>
                    
                    <div className="p-auto-carousel-track">
                      {renderDashboardMockup(project.id, currentSlide)}
                    </div>

                    <button
                      className="p-auto-nav-btn p-auto-next-btn"
                      onClick={(e) => handleNextSlide(project.id, e)}
                      aria-label="Next Slide"
                    >
                      &#10217;
                    </button>

                    <div className="p-auto-carousel-indicators">
                      {[0, 1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className={`p-auto-indicator ${currentSlide === i ? 'is-active' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Information Showcase Column */}
                <div className="p-auto-info-col">
                  <span className="p-auto-project-category">{project.category}</span>
                  <h3 className="p-auto-project-title">{project.title}</h3>
                  <p className="p-auto-summary">{project.summary}</p>
                  
                  <div className="p-auto-tech-container">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="p-auto-tech-pill">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="p-auto-tech-pill-muted">+{project.techStack.length - 3} More</span>
                    )}
                  </div>

                  <span className="p-auto-details-btn">
                    View Technical Architecture
                    <svg className="p-auto-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal - Mimics Image 3 structure precisely */}
      {selectedProject && (
        <div className="p-auto-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="p-auto-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Top Bar */}
            <div className="p-auto-modal-header">
              <span className="p-auto-modal-index">{selectedProject.indexStr}</span>
              <span className="p-auto-modal-title">{selectedProject.title}</span>
              <button className="p-auto-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                &#x2715;
              </button>
            </div>

            {/* Modal Split Columns */}
            <div className="p-auto-modal-body">
              {/* Left Column: Workflow Visualizations and Interactive Diagrams */}
              <div className="p-auto-modal-visual-col">
                <div className="p-auto-wf-selector">
                  {selectedProject.workflows.map((wf, idx) => (
                    <button
                      key={idx}
                      className={`p-auto-wf-tab ${activeWorkflowIndex === idx ? 'is-active' : ''}`}
                      onClick={() => setActiveWorkflowIndex(idx)}
                    >
                      {wf.title}
                    </button>
                  ))}
                </div>

                <div className="p-auto-wf-visual-area">
                  <div className="p-auto-wf-diagram-container">
                    {selectedProject.workflows[activeWorkflowIndex].steps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <div className="p-auto-diagram-node">
                          <div className="p-auto-node-icon">
                            {renderIcon(step.icon)}
                          </div>
                          <div className="p-auto-node-meta">
                            <span className="p-auto-node-label">{step.label}</span>
                            <span className="p-auto-node-desc">{step.subtext}</span>
                          </div>
                        </div>
                        {sIdx < selectedProject.workflows[activeWorkflowIndex].steps.length - 1 && (
                          <div className="p-auto-flow-arrow">
                            <div className="p-auto-line-pulse"></div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Details scroll area (Matches Suki Project layout style) */}
              <div className="p-auto-modal-details-col">
                <div className="p-auto-details-group">
                  <h4>Project Information</h4>
                  <p className="p-auto-meta-label">Category: <span className="p-auto-meta-value">{selectedProject.category}</span></p>
                  {/* <p className="p-auto-meta-label">Status: <span className="p-auto-meta-value">Production Pipeline</span></p> */}
                </div>

                <div className="p-auto-details-group">
                  <h4>Business Problem Solved</h4>
                  <p className="p-auto-body-paragraph">{selectedProject.problem}</p>
                </div>

                <div className="p-auto-details-group">
                  <h4>Tech Stack</h4>
                  <ul className="p-auto-modal-tech-grid">
                    {selectedProject.techStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-auto-details-group">
                  <h4>Key System Features</h4>
                  <ul className="p-auto-bullet-list">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-auto-details-group">
                  <h4>Business Outcomes & Results</h4>
                  <ul className="p-auto-outcome-list">
                    {selectedProject.outcomes.map((out, i) => (
                      <li key={i}>
                        <svg className="p-auto-checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default AiProjects;