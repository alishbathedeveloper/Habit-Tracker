import React, { useState } from 'react';
import { Calendar, Plus, Settings, LineChart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DashboardView = ({ habits }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Habits</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Habit
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {habits.map(habit => (
          <Card key={habit.id}>
            <CardContent className="p-4">
              <h3 className="font-semibold">{habit.title}</h3>
              <p className="text-sm text-gray-600">{habit.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm">
                  Streak: {habit.streak} days
                </span>
                <span className="text-sm text-green-600">
                  {habit.completionRate}%
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const AnalyticsView = ({ habits }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Analytics</h2>
      <Card>
        <CardContent className="p-4">
          <p>Analytics visualization will go here</p>
        </CardContent>
      </Card>
    </div>
  );
};

const SocialView = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Social</h2>
      <Card>
        <CardContent className="p-4">
          <p>Social features will go here</p>
        </CardContent>
      </Card>
    </div>
  );
};

const SettingsView = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Settings</h2>
      <Card>
        <CardContent className="p-4">
          <p>Settings options will go here</p>
        </CardContent>
      </Card>
    </div>
  );
};

const HabitTracker = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: 'Morning Meditation',
      description: 'Daily mindfulness practice',
      frequency: 'daily',
      category: 'Wellness',
      startDate: '2024-12-19',
      streak: 5,
      completionRate: 85,
      isCompleted: false
    }
  ]);

  const getTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardView habits={habits} />;
      case 'analytics':
        return <AnalyticsView habits={habits} />;
      case 'social':
        return <SocialView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView habits={habits} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Habit Tracker</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <nav className="w-64 space-y-2">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('dashboard')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button 
              variant={activeTab === 'analytics' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('analytics')}
            >
              <LineChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button 
              variant={activeTab === 'social' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('social')}
            >
              <Users className="mr-2 h-4 w-4" />
              Social
            </Button>
            <Button 
              variant={activeTab === 'settings' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>

          <div className="flex-1">
            {getTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HabitTracker;