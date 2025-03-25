import { useState } from 'react';

interface ResumeFormProps {
  section: string;
  data: any;
  onUpdate: (data: any) => void;
}

const ResumeForm = ({ section, data, onUpdate }: ResumeFormProps) => {
  // Clone data to avoid direct mutation
  const [sectionData, setSectionData] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;
    
    if (Array.isArray(sectionData) && index !== undefined) {
      const newData = [...sectionData];
      newData[index] = { ...newData[index], [name]: value };
      setSectionData(newData);
      onUpdate(newData);
    } else if (!Array.isArray(sectionData)) {
      setSectionData({ ...sectionData, [name]: value });
      onUpdate({ ...sectionData, [name]: value });
    }
  };

  const addItem = () => {
    if (Array.isArray(sectionData)) {
      const emptyItem = Object.fromEntries(
        Object.keys(sectionData[0]).map(key => [key, ''])
      );
      const newData = [...sectionData, emptyItem];
      setSectionData(newData);
      onUpdate(newData);
    }
  };

  const removeItem = (index: number) => {
    if (Array.isArray(sectionData) && sectionData.length > 1) {
      const newData = sectionData.filter((_, i) => i !== index);
      setSectionData(newData);
      onUpdate(newData);
    }
  };

  const renderBasicsForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={sectionData.name}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={sectionData.email}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={sectionData.phone}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={sectionData.location}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Website</label>
        <input
          type="url"
          name="website"
          value={sectionData.website}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Professional Summary</label>
        <textarea
          name="summary"
          value={sectionData.summary}
          onChange={handleChange}
          rows={4}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );

  const renderWorkForm = () => (
    <div>
      {sectionData.map((job: any, index: number) => (
        <div key={index} className="pb-6 mb-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Work Experience #{index + 1}</h3>
            {sectionData.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={job.company}
                onChange={(e) => handleChange(e, index)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                name="position"
                value={job.position}
                onChange={(e) => handleChange(e, index)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={job.startDate}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={job.endDate}
                  onChange={(e) => handleChange(e, index)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={job.description}
                onChange={(e) => handleChange(e, index)}
                rows={4}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="mt-2 text-blue-600 hover:text-blue-800"
      >
        + Add Another Position
      </button>
    </div>
  );

  // Similar components would be created for education, skills, and projects
  // For brevity, I'm showing a simplified version
  
  const renderFormBySection = () => {
    switch (section) {
      case 'basics':
        return renderBasicsForm();
      case 'work':
        return renderWorkForm();
      // Add other sections similarly
      default:
        return <p>Select a section to edit</p>;
    }
  };

  return <div>{renderFormBySection()}</div>;
};

export default ResumeForm;