import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Lightbulb } from 'lucide-react';
import { CareerData } from './CareerRecommender';

interface CareerFormProps {
  onSubmit: (data: CareerData) => void;
  isLoading: boolean;
}

export const CareerForm = ({ onSubmit, isLoading }: CareerFormProps) => {
  const [formData, setFormData] = useState<CareerData>({
    academic_background: '',
    interests: '',
    skills: ''
  });

  const [errors, setErrors] = useState<Partial<CareerData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<CareerData> = {};

    if (!formData.academic_background.trim()) {
      newErrors.academic_background = 'Academic background is required';
    }

    if (!formData.interests.trim()) {
      newErrors.interests = 'Please share your interests';
    }

    if (!formData.skills.trim()) {
      newErrors.skills = 'Please list your current skills';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof CareerData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Academic Background */}
      <div className="space-y-2">
        <Label htmlFor="academic_background" className="text-lg font-medium flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          Academic Background
        </Label>
        <Input
          id="academic_background"
          placeholder="e.g., Computer Science, Business Administration, Mechanical Engineering"
          value={formData.academic_background}
          onChange={(e) => handleInputChange('academic_background', e.target.value)}
          className={`h-12 text-base ${errors.academic_background ? 'border-destructive' : ''}`}
          disabled={isLoading}
        />
        {errors.academic_background && (
          <p className="text-sm text-destructive">{errors.academic_background}</p>
        )}
      </div>

      {/* Interests */}
      <div className="space-y-2">
        <Label htmlFor="interests" className="text-lg font-medium flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          Interests & Passions
        </Label>
        <Textarea
          id="interests"
          placeholder="e.g., Artificial Intelligence, Web Development, Data Analysis, Digital Marketing"
          value={formData.interests}
          onChange={(e) => handleInputChange('interests', e.target.value)}
          className={`min-h-24 text-base resize-none ${errors.interests ? 'border-destructive' : ''}`}
          disabled={isLoading}
        />
        {errors.interests && (
          <p className="text-sm text-destructive">{errors.interests}</p>
        )}
        <p className="text-sm text-muted-foreground">
          Separate multiple interests with commas
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <Label htmlFor="skills" className="text-lg font-medium flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Current Skills
        </Label>
        <Textarea
          id="skills"
          placeholder="e.g., Python, Java, SQL, Project Management, Communication, Leadership"
          value={formData.skills}
          onChange={(e) => handleInputChange('skills', e.target.value)}
          className={`min-h-24 text-base resize-none ${errors.skills ? 'border-destructive' : ''}`}
          disabled={isLoading}
        />
        {errors.skills && (
          <p className="text-sm text-destructive">{errors.skills}</p>
        )}
        <p className="text-sm text-muted-foreground">
          List both technical and soft skills, separated by commas
        </p>
      </div>

      {/* Submit Button */}
      <Card className="bg-gradient-hero border-0">
        <CardContent className="p-6">
          <Button 
            type="submit" 
            size="lg" 
            disabled={isLoading}
            className="w-full h-14 text-lg font-semibold bg-white/20 text-white border border-white/30 hover:bg-white/30 disabled:opacity-50 backdrop-blur-sm transition-all duration-300"
          >
            {isLoading ? 'Generating Recommendations...' : 'Get My Career Recommendations'}
          </Button>
          <p className="text-center mt-3 text-white/80 text-sm">
            Powered by AI • Personalized for you
          </p>
        </CardContent>
      </Card>
    </form>
  );
};