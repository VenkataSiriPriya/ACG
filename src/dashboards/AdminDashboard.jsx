import React from 'react';
import './AdminDashboard.css';
import { Users, MapPin, CheckCircle, Clock, TrendingUp, Eye, Calendar, ChevronRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  // Sample data for summary cards
  const summaryStats = {
    totalUsers: 15847,
    totalPlaces: 3264,
    verifiedPlaces: 2891,
    pendingSubmissions: 42
  };

  // Sample data for accessibility trend chart
  const accessibilityTrend = [
    { month: 'Jan', verified: 180, pending: 25 },
    { month: 'Feb', verified: 220, pending: 18 },
    { month: 'Mar', verified: 280, pending: 32 },
    { month: 'Apr', verified: 310, pending: 28 },
    { month: 'May', verified: 350, pending: 15 },
    { month: 'Jun', verified: 420, pending: 22 }
  ];

  // Sample data for top searched areas
  const topSearchedAreas = [
    { area: 'Downtown', searches: 1240 },
    { area: 'University District', searches: 980 },
    { area: 'Shopping Mall', searches: 750 },
    { area: 'Medical Center', searches: 650 },
    { area: 'Airport', searches: 580 }
  ];

  // Sample data for accessibility distribution
  const accessibilityDistribution = [
    { name: 'Fully Accessible', value: 45, color: '#10B981' },
    { name: 'Partially Accessible', value: 35, color: '#F59E0B' },
    { name: 'Not Accessible', value: 12, color: '#EF4444' },
    { name: 'Unknown', value: 8, color: '#6B7280' }
  ];

  // Sample activity logs
  const recentActivities = [
    { id: 1, type: 'verification', message: 'Coffee Shop on Main St verified as accessible', user: 'Admin User', time: '2 hours ago' },
    { id: 2, type: 'submission', message: 'New place submitted: Central Library', user: 'John Doe', time: '3 hours ago' },
    { id: 3, type: 'update', message: 'Restaurant XYZ accessibility info updated', user: 'Jane Smith', time: '5 hours ago' },
    { id: 4, type: 'user', message: 'New user registration: Mike Johnson', user: 'System', time: '6 hours ago' },
    { id: 5, type: 'verification', message: 'Park Plaza marked as partially accessible', user: 'Admin User', time: '1 day ago' }
  ];

  const SummaryCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="summary-card" style={{ borderLeftColor: color }}>
      <div className="summary-card-content">
        <div className="summary-card-text">
          <p className="summary-card-title">{title}</p>
          <p className="summary-card-value">{value.toLocaleString()}</p>
          {change && (
            <p className="summary-card-change">
              <TrendingUp className="trend-icon" />
              <span className="change-text">+{change}% from last month</span>
            </p>
          )}
        </div>
        <div className="summary-card-icon-wrapper">
          <Icon className="summary-card-icon" style={{ color }} />
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => {
    const getActivityIcon = (type) => {
      switch (type) {
        case 'verification': return <CheckCircle className="activity-icon verification" />;
        case 'submission': return <MapPin className="activity-icon submission" />;
        case 'update': return <Calendar className="activity-icon update" />;
        case 'user': return <Users className="activity-icon user" />;
        default: return <Clock className="activity-icon default" />;
      }
    };

    return (
      <div className="activity-item">
        <div className="activity-icon-wrapper">
          {getActivityIcon(activity.type)}
        </div>
        <div className="activity-content">
          <p className="activity-message">{activity.message}</p>
          <p className="activity-meta">
            by {activity.user} • {activity.time}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <p className="dashboard-subtitle">Overview of accessibility platform analytics and activities</p>
        </div>

        {/* Summary Cards */}
        <div className="summary-grid">
          <SummaryCard
            title="Total Users"
            value={summaryStats.totalUsers}
            icon={Users}
            color="#3B82F6"
            change={12}
          />
          <SummaryCard
            title="Total Places"
            value={summaryStats.totalPlaces}
            icon={MapPin}
            color="#10B981"
            change={8}
          />
          <SummaryCard
            title="Verified Accessible Places"
            value={summaryStats.verifiedPlaces}
            icon={CheckCircle}
            color="#059669"
            change={15}
          />
          <SummaryCard
            title="Pending Submissions"
            value={summaryStats.pendingSubmissions}
            icon={Clock}
            color="#F59E0B"
          />
        </div>

        {/* Charts Section */}
        <div className="charts-grid">
          {/* Accessibility Trend Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <h2 className="chart-title">Accessibility Verification Trend</h2>
              <Eye className="chart-icon" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accessibilityTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="verified" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Verified Places"
                />
                <Line 
                  type="monotone" 
                  dataKey="pending" 
                  stroke="#F59E0B" 
                  strokeWidth={3}
                  name="Pending Verification"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Accessibility Distribution */}
          <div className="chart-card">
            <h2 className="chart-title">Accessibility Distribution</h2>
            <div className="pie-chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={accessibilityDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {accessibilityDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="legend-grid">
              {accessibilityDistribution.map((item, index) => (
                <div key={index} className="legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-text">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-grid">
          {/* Top Searched Areas */}
          <div className="chart-card">
            <h2 className="chart-title">Top Searched Areas</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={topSearchedAreas} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis 
                  type="category" 
                  dataKey="area" 
                  stroke="#6b7280"
                  width={100}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }} 
                />
                <Bar 
                  dataKey="searches" 
                  fill="#3B82F6"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activities */}
          <div className="activities-card">
            <div className="activities-header">
              <h2 className="chart-title">Recent Activities</h2>
              <button className="view-all-btn">
                View All
                <ChevronRight className="chevron-icon" />
              </button>
            </div>
            <div className="activities-list">
              {recentActivities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;