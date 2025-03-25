import { useMemo } from 'react';

interface Job {
  id: string;
  company: string;
  position: string;
  location: string;
  url?: string;
  status: 'Saved' | 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  appliedDate?: string;
  notes?: string;
  nextSteps?: string;
}

interface JobStatisticsProps {
  jobs: Job[];
}

const JobStatistics = ({ jobs }: JobStatisticsProps) => {
  const stats = useMemo(() => {
    const saved = jobs.filter(job => job.status === 'Saved').length;
    const applied = jobs.filter(job => job.status === 'Applied').length;
    const interview = jobs.filter(job => job.status === 'Interview').length;
    const offer = jobs.filter(job => job.status === 'Offer').length;
    const rejected = jobs.filter(job => job.status === 'Rejected').length;
    const total = jobs.length;
    
    // Calculate response rate
    const responseRate = total > 0 
      ? Math.round(((interview + offer + rejected) / (applied + interview + offer + rejected)) * 100) 
      : 0;
    
    // Calculate success rate
    const successRate = (applied + interview + offer + rejected) > 0
      ? Math.round((offer / (applied + interview + offer + rejected)) * 100)
      : 0;
    
    return {
      saved,
      applied,
      interview,
      offer,
      rejected,
      total,
      responseRate,
      successRate
    };
  }, [jobs]);

  const statCards = [
    { title: 'Total Jobs', value: stats.total, color: 'bg-gray-100' },
    { title: 'Saved', value: stats.saved, color: 'bg-gray-100' },
    { title: 'Applied', value: stats.applied, color: 'bg-blue-100' },
    { title: 'Interviews', value: stats.interview, color: 'bg-yellow-100' },
    { title: 'Offers', value: stats.offer, color: 'bg-green-100' },
    { title: 'Rejected', value: stats.rejected, color: 'bg-red-100' },
    { title: 'Response Rate', value: `${stats.responseRate}%`, color: 'bg-purple-100' },
    { title: 'Success Rate', value: `${stats.successRate}%`, color: 'bg-indigo-100' }
  ];

  return (
    <>
      {statCards.map((stat, index) => (
        <div key={index} className={`${stat.color} p-4 rounded-lg shadow-sm`}>
          <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
          <p className="mt-1 text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </>
  );
};

export default JobStatistics;