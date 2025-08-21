import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CareerForm } from './CareerForm';
import { ResultsDisplay } from './ResultsDisplay';
import { LoadingSpinner } from './LoadingSpinner';
import { useToast } from '@/hooks/use-toast';

export interface CareerData {
  academic_background: string;
  interests: string;
  skills: string;
}

export interface CareerRecommendations {
  career_paths: string[];
  skillsets: string[];
  courses_certifications: string[];
  job_roles: string[];
}

const CareerRecommender = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CareerRecommendations | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = async (data: CareerData) => {
    setIsLoading(true);
    setRecommendations(null);

    try {
      // Simulate AI API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock recommendations based on user input
      const mockRecommendations: CareerRecommendations = generateMockRecommendations(data);
      
      setRecommendations(mockRecommendations);
      
      toast({
        title: "Recommendations Generated!",
        description: "Your personalized career guidance is ready.",
      });
      
    } catch (error) {
      console.error('Error generating recommendations:', error);
      
      toast({
        title: "Something went wrong",
        description: "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              AI Career Recommender
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your ideal career path with personalized AI-powered recommendations 
              based on your academic background, interests, and skills.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Input Form */}
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Tell us about yourself
                </CardTitle>
                <CardDescription className="text-lg">
                  Share your academic background, interests, and current skills to get personalized career guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CareerForm onSubmit={handleFormSubmit} isLoading={isLoading} />
              </CardContent>
            </Card>

            {/* Loading State */}
            {isLoading && (
              <div className="animate-fade-in">
                <LoadingSpinner />
              </div>
            )}

            {/* Results Display */}
            {recommendations && !isLoading && (
              <div className="animate-fade-in">
                <ResultsDisplay recommendations={recommendations} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Generate mock recommendations based on user input
const generateMockRecommendations = (data: CareerData): CareerRecommendations => {
  const { academic_background, interests, skills } = data;
  
  const careerPaths = [];
  const skillsets = [];
  const courses = [];
  const jobRoles = [];

  // Basic logic to generate relevant recommendations
  if (academic_background.toLowerCase().includes('computer') || academic_background.toLowerCase().includes('software')) {
    careerPaths.push('Software Development', 'Data Science', 'Machine Learning Engineering', 'DevOps Engineering');
    skillsets.push('Advanced Programming', 'System Design', 'Cloud Computing', 'API Development');
    courses.push('Full Stack Development Bootcamp', 'AWS Cloud Practitioner', 'Docker & Kubernetes');
    jobRoles.push('Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Software Engineer');
  }
  
  if (interests.toLowerCase().includes('data') || interests.toLowerCase().includes('analytics')) {
    careerPaths.push('Data Analyst', 'Business Intelligence', 'Data Engineering', 'Research Scientist');
    skillsets.push('Statistical Analysis', 'Data Visualization', 'SQL Mastery', 'Machine Learning');
    courses.push('Google Data Analytics Certificate', 'Tableau Specialist', 'Python for Data Science');
    jobRoles.push('Data Analyst', 'Business Analyst', 'Data Scientist', 'BI Developer');
  }

  if (academic_background.toLowerCase().includes('business') || interests.toLowerCase().includes('management')) {
    careerPaths.push('Product Management', 'Business Strategy', 'Digital Marketing', 'Consulting');
    skillsets.push('Strategic Planning', 'Market Analysis', 'Leadership', 'Financial Modeling');
    courses.push('Product Management Professional', 'Digital Marketing Certification', 'MBA Essentials');
    jobRoles.push('Product Manager', 'Business Analyst', 'Marketing Manager', 'Strategy Consultant');
  }

  // Default fallback recommendations
  if (careerPaths.length === 0) {
    careerPaths.push('Technology Consulting', 'Project Management', 'Digital Transformation', 'Innovation Management');
    skillsets.push('Communication', 'Problem Solving', 'Technical Writing', 'Cross-functional Collaboration');
    courses.push('Project Management Professional (PMP)', 'Agile Methodology', 'Digital Literacy');
    jobRoles.push('Project Coordinator', 'Technical Consultant', 'Business Analyst', 'Operations Manager');
  }

  return {
    career_paths: careerPaths.slice(0, 4),
    skillsets: skillsets.slice(0, 6),
    courses_certifications: courses.slice(0, 4),
    job_roles: jobRoles.slice(0, 4)
  };
};

export default CareerRecommender;