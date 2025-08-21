import { Card, CardContent } from '@/components/ui/card';
import { Brain, Sparkles } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <Card className="shadow-elegant border-0">
      <CardContent className="p-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Animated Brain Icon */}
          <div className="relative">
            <div className="animate-pulse-glow p-4 rounded-full bg-gradient-primary">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
          </div>
          
          {/* Loading Text */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-primary">
              Analyzing Your Profile
            </h3>
            <p className="text-muted-foreground text-lg max-w-md">
              Our AI is processing your information to generate personalized career recommendations...
            </p>
          </div>

          {/* Progress Indicators */}
          <div className="space-y-2 w-full max-w-md">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Processing academic background</span>
              <span>✓</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Analyzing interests & skills</span>
              <span>✓</span>
            </div>
            <div className="flex justify-between text-sm text-primary animate-pulse">
              <span>Generating recommendations</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
          
          {/* Loading Bar */}
          <div className="w-full max-w-md bg-secondary rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-primary rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            This usually takes 30-60 seconds
          </p>
        </div>
      </CardContent>
    </Card>
  );
};