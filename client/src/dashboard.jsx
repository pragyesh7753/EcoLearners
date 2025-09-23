import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userProgress, setUserProgress] = useState({
    completedLessons: 12,
    totalLessons: 25,
    currentStreak: 7,
    totalPoints: 2450
  });

  const statsCards = [
    {
      title: 'Lessons Completed',
      value: userProgress.completedLessons,
      total: userProgress.totalLessons,
      icon: '📚',
      color: 'bg-blue-500'
    },
    {
      title: 'Current Streak',
      value: userProgress.currentStreak,
      unit: 'days',
      icon: '🔥',
      color: 'bg-orange-500'
    },
    {
      title: 'Total Points',
      value: userProgress.totalPoints.toLocaleString(),
      icon: '⭐',
      color: 'bg-yellow-500'
    },
    {
      title: 'Eco Impact',
      value: '2.5',
      unit: 'tons CO₂ saved',
      icon: '🌱',
      color: 'bg-green-500'
    }
  ];

  const learningTopics = [
    { name: 'Climate Change', progress: 85, lessons: 8, color: 'bg-blue-100' },
    { name: 'Renewable Energy', progress: 60, lessons: 6, color: 'bg-green-100' },
    { name: 'Waste Management', progress: 40, lessons: 5, color: 'bg-purple-100' },
    { name: 'Biodiversity', progress: 90, lessons: 7, color: 'bg-yellow-100' },
    { name: 'Sustainable Living', progress: 30, lessons: 4, color: 'bg-pink-100' },
    { name: 'Water Conservation', progress: 70, lessons: 6, color: 'bg-cyan-100' }
  ];

  const recentActivities = [
    { action: 'Completed lesson', item: 'Solar Energy Basics', time: '2 hours ago', points: 50 },
    { action: 'Earned badge', item: 'Climate Warrior', time: '1 day ago', points: 100 },
    { action: 'Started course', item: 'Ocean Conservation', time: '2 days ago', points: 0 },
    { action: 'Completed quiz', item: 'Recycling Fundamentals', time: '3 days ago', points: 25 }
  ];

  const progressPercentage = (userProgress.completedLessons / userProgress.totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">EcoLearners Dashboard</h1>
              <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🌱 Environmental Learning Platform
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Welcome back!</p>
                <p className="font-semibold text-gray-900">Ayushman</p>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {['overview', 'courses', 'progress', 'community'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                    {stat.total && `/${stat.total}`}
                    {stat.unit && <span className="text-sm font-normal text-gray-600 ml-1">{stat.unit}</span>}
                  </p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Progress */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm text-gray-500">{Math.round(progressPercentage)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {userProgress.completedLessons} of {userProgress.totalLessons} lessons completed
              </p>
            </div>

            {/* Topics Grid */}
            <div className="mt-8">
              <h4 className="text-md font-semibold text-gray-900 mb-4">Topic Progress</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {learningTopics.map((topic, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-gray-900">{topic.name}</h5>
                      <span className="text-sm text-gray-500">{topic.lessons} lessons</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{topic.progress}% complete</span>
                      <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                        Continue →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.action}:</span> {activity.item}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-xs text-gray-500">{activity.time}</p>
                        {activity.points > 0 && (
                          <span className="text-xs text-green-600 font-medium">+{activity.points} pts</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                  Start New Lesson
                </button>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  Take Quiz
                </button>
                <button className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
                  View Certificates
                </button>
              </div>
            </div>

            {/* Environmental Tip */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-900 mb-2">🌍 Daily Eco Tip</h3>
              <p className="text-sm text-green-800">
                "Switch to LED bulbs - they use 75% less energy and last 25 times longer than incandescent bulbs!"
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Impact Chart Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Environmental Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2.5 tons</div>
              <div className="text-sm text-gray-600">CO₂ Saved This Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1,247 kWh</div>
              <div className="text-sm text-gray-600">Energy Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">156 trees</div>
              <div className="text-sm text-gray-600">Equivalent Planted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
