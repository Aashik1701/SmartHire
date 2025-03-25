interface ResumePreviewProps {
  data: any;
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  const { basics, work, education, skills, projects } = data;

  return (
    <div className="p-6 text-sm bg-white border rounded-md">
      {/* Header */}
      {basics.name && (
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold">{basics.name}</h1>
          <div className="flex justify-center mt-1 space-x-4 text-gray-600">
            {basics.email && <span>{basics.email}</span>}
            {basics.phone && <span>{basics.phone}</span>}
            {basics.location && <span>{basics.location}</span>}
          </div>
          {basics.website && (
            <div className="mt-1">
              <a href={basics.website} className="text-blue-600 hover:underline">
                {basics.website}
              </a>
            </div>
          )}
        </div>
      )}

      {/* Summary */}
      {basics.summary && (
        <div className="mb-4">
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">Summary</h2>
          <p>{basics.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {work.length > 0 && work[0].company && (
        <div className="mb-4">
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">Work Experience</h2>
          {work.map((job: any, index: number) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{job.position}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                {(job.startDate || job.endDate) && (
                  <div className="text-gray-600">
                    {job.startDate && new Date(job.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    {job.startDate && job.endDate && ' - '}
                    {job.endDate ? new Date(job.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
                  </div>
                )}
              </div>
              {job.description && <p className="mt-1 text-sm">{job.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education[0].institution && (
        <div className="mb-4">
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">Education</h2>
          {education.map((edu: any, index: number) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{edu.studyType} in {edu.area}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                {(edu.startDate || edu.endDate) && (
                  <div className="text-gray-600">
                    {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    {edu.startDate && edu.endDate && ' - '}
                    {edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && skills[0].name && (
        <div className="mb-4">
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">Skills</h2>
          <div className="flex flex-wrap">
            {skills.map((skill: any, index: number) => (
              <span 
                key={index} 
                className="px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
              >
                {skill.name} {skill.level && `(${skill.level})`}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && projects[0].name && (
        <div>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">Projects</h2>
          {projects.map((project: any, index: number) => (
            <div key={index} className="mb-3">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{project.name}</h3>
                {project.url && (
                  <a href={project.url} className="text-xs text-blue-600 hover:underline">
                    View Project
                  </a>
                )}
              </div>
              {project.description && <p className="mt-1 text-sm">{project.description}</p>}
              {project.technologies && (
                <p className="mt-1 text-sm text-gray-600">
                  <span className="font-medium">Technologies:</span> {project.technologies}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;