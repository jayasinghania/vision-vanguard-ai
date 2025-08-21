import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Briefcase, 
  TrendingUp, 
  BookOpen, 
  Users,
  CheckCircle 
} from 'lucide-react';
import { CareerRecommendations } from './CareerRecommender';

interface ResultsDisplayProps {
  recommendations: CareerRecommendations;
}

export const ResultsDisplay = ({ recommendations }: ResultsDisplayProps) => {
  const sections = [
    {
      title: 'Recommended Career Paths',
      description: 'Explore these career directions based on your profile',
      icon: <TrendingUp className="h-6 w-6" />,
      items: recommendations.career_paths,
      color: 'bg-primary/10 text-primary border-primary/20'
    },
    {
      title: 'Essential Skills to Develop',
      description: 'Focus on building these key competencies',
      icon: <CheckCircle className="h-6 w-6" />,
      items: recommendations.skillsets,
      color: 'bg-accent/10 text-accent border-accent/20'
    },
    {
      title: 'Relevant Courses & Certifications',
      description: 'Boost your qualifications with these learning paths',
      icon: <BookOpen className="h-6 w-6" />,
      items: recommendations.courses_certifications,
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    {
      title: 'Target Job Roles',
      description: 'Consider applying for these positions',
      icon: <Briefcase className="h-6 w-6" />,
      items: recommendations.job_roles,
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Your Personalized Career Recommendations
        </h2>
        <p className="text-muted-foreground">
          Based on your unique profile, here's your tailored career guidance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <Card 
            key={section.title} 
            className="shadow-elegant border-0 hover:shadow-glow transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-gradient-primary text-white">
                  {section.icon}
                </div>
                {section.title}
              </CardTitle>
              <CardDescription className="text-base">
                {section.description}
              </CardDescription>
            </CardHeader>
            <Separator className="mx-6" />
            <CardContent className="pt-6">
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-subtle border transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Section */}
      <Card className="bg-gradient-hero text-white border-0 shadow-glow">
        <CardContent className="p-8 text-center">
          <Users className="h-12 w-12 mx-auto mb-4 text-white/90" />
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            These recommendations are tailored specifically for you. Consider connecting with career counselors, 
            mentors, or professionals in your areas of interest to get deeper insights.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Network with Professionals
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Attend Industry Events
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Join Online Communities
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};