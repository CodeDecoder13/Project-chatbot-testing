import { FC } from 'react';
import Head from 'next/head';

// You might want to move these types to a separate types file
type StatCardProps = {
  title: string;
  value: string;
  trend?: string;
  trendValue?: string;
};

const StatCard: FC<StatCardProps> = ({ title, value, trend, trendValue }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
    {trend && (
      <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
        {trend === 'up' ? '↑' : '↓'} {trendValue}
      </p>
    )}
  </div>
);

const Dashboard: FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard - My App</title>
        <meta name="description" content="Dashboard overview of key metrics" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Revenue"
                value="$45,231"
                trend="up"
                trendValue="12% from last month"
              />
              <StatCard
                title="Active Users"
                value="2,345"
                trend="up"
                trendValue="8.1% increase"
              />
              <StatCard
                title="Pending Orders"
                value="12"
                trend="down"
                trendValue="3% decrease"
              />
              <StatCard
                title="Conversion Rate"
                value="3.24%"
                trend="up"
                trendValue="2.1% increase"
              />
            </div>

            {/* Recent Activity Section */}
            <div className="mt-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">New order received</p>
                        <p className="text-sm text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard; 