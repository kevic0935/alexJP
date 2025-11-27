import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA, getWeatherIcon } from './constants';
import { TabView } from './types';
import { MapPin, Utensils, AlertCircle, Plane, Bed, Wallet, ChevronLeft, Calendar, Info, Navigation, ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// --- Helper Components ---

interface TagProps {
  children?: React.ReactNode;
  color?: 'green' | 'orange' | 'blue';
}

const Tag: React.FC<TagProps> = ({ children, color = 'green' }) => {
  const colorClasses = {
    green: 'bg-ghibli-green/10 text-ghibli-green border-ghibli-green/20',
    orange: 'bg-orange-100 text-orange-700 border-orange-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${colorClasses[color]} mr-2 inline-flex items-center`}>
      {children}
    </span>
  );
};

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm p-4 ${className}`}>
    {children}
  </div>
);

// --- Sub-Views ---

const ToolsView: React.FC = () => {
  const budgetData = [
    { name: '機票', value: 45000 },
    { name: '住宿', value: 35000 },
    { name: '交通', value: 10000 },
    { name: '飲食', value: 20000 },
    { name: '購物', value: 15000 },
  ];
  const COLORS = ['#8da38b', '#e89e70', '#5c4839', '#7da6bd', '#f4a261'];

  return (
    <div className="space-y-6 pb-24">
      <h2 className="text-2xl font-bold text-ghibli-brown px-4 pt-4">旅遊工具箱</h2>
      
      {/* Essential Info Cards */}
      <div className="px-4 grid grid-cols-2 gap-4">
        <Card className="flex flex-col items-center justify-center py-6 gap-2">
            <Plane className="w-8 h-8 text-ghibli-green" />
            <span className="font-bold text-ghibli-brown">航班資訊</span>
            <span className="text-xs text-gray-500">去: 17:15 | 回: 09:50</span>
        </Card>
        <Card className="flex flex-col items-center justify-center py-6 gap-2">
            <Bed className="w-8 h-8 text-ghibli-orange" />
            <span className="font-bold text-ghibli-brown">住宿飯店</span>
            <span className="text-xs text-gray-500">Daiwa Roynet / Comfort</span>
        </Card>
      </div>

      {/* Emergency Section */}
      <div className="px-4">
        <Card className="border-l-4 border-red-400">
            <h3 className="flex items-center gap-2 font-bold text-red-500 mb-3">
                <AlertCircle size={20} /> 緊急聯絡
            </h3>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b pb-2">
                    <span>救護車 / 火警</span>
                    <span className="font-bold font-mono text-lg">119</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span>警察局</span>
                    <span className="font-bold font-mono text-lg">110</span>
                </div>
                <div className="pt-2 text-gray-600">
                    <p>實用日語：</p>
                    <p>醫院 (Byōin) | 藥局 (Yakkyoku)</p>
                </div>
            </div>
        </Card>
      </div>

      {/* Budget Section */}
      <div className="px-4">
         <Card>
            <h3 className="flex items-center gap-2 font-bold text-ghibli-brown mb-4">
                <Wallet size={20} /> 預算概覽 (TWD)
            </h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={budgetData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {budgetData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${value}`} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mt-4">
                 {budgetData.map((item, idx) => (
                     <div key={idx} className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[idx]}}></div>
                         <span>{item.name}: ${item.value.toLocaleString()}</span>
                     </div>
                 ))}
            </div>
         </Card>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.HOME);
  const [selectedDayId, setSelectedDayId] = useState<number | null>(null);

  const selectedDay = ITINERARY_DATA.find(d => d.id === selectedDayId);

  // Scroll to top when switching days
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedDayId, activeTab]);

  const handleNavClick = (url: string | undefined) => {
    if (!url) return;
    const query = encodeURIComponent(url);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen pb-20 max-w-md mx-auto bg-ghibli-cream shadow-2xl relative overflow-hidden">
      
      {/* --- View: Day Detail --- */}
      {activeTab === TabView.HOME && selectedDay && (
        <div className="animate-fade-in pb-24">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-ghibli-cream/95 backdrop-blur-sm border-b border-stone-200 px-4 py-4 flex items-center gap-4">
            <button 
              onClick={() => setSelectedDayId(null)}
              className="p-2 -ml-2 rounded-full hover:bg-stone-200 transition-colors"
            >
              <ChevronLeft className="text-ghibli-brown" />
            </button>
            <div>
              <div className="text-xs font-bold text-ghibli-green uppercase tracking-wider">{selectedDay.dateLabel}</div>
              <h1 className="text-lg font-bold text-ghibli-brown leading-tight">{selectedDay.title}</h1>
            </div>
          </div>

          {/* Weather Banner */}
          <div className="m-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-between shadow-sm">
             <div className="flex flex-col">
                 <span className="text-xs text-gray-500 mb-1">今日天氣預報</span>
                 <span className="text-2xl font-bold text-ghibli-brown">{selectedDay.weather.temp}</span>
                 <span className="text-sm text-gray-600">{selectedDay.weather.condition}</span>
             </div>
             <div>
                 {getWeatherIcon(selectedDay.weather.icon)}
             </div>
          </div>

          {/* Timeline Schedule */}
          <div className="px-4 mb-8">
            <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">今日行程</h2>
            <div className="space-y-0 relative border-l-2 border-dashed border-ghibli-greenLight/30 ml-3">
              {selectedDay.schedule.map((item, idx) => (
                <div key={idx} className="pl-6 pb-8 relative group">
                  {/* Dot */}
                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm
                    ${item.type === 'transport' ? 'bg-blue-300' : 
                      item.type === 'food' ? 'bg-orange-300' : 
                      item.type === 'shopping' ? 'bg-purple-300' : 'bg-ghibli-green'}
                  `}></div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-ghibli-greenLight bg-white px-1 rounded mb-1 inline-block">{item.time}</span>
                    {item.navLink && (
                        <button onClick={() => handleNavClick(item.navLink)} className="text-xs text-blue-500 flex items-center gap-0.5">
                            <Navigation size={12} /> 導航
                        </button>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-ghibli-brown text-lg">{item.title}</h3>
                  {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                  
                  {item.important && (
                    <div className="mt-2 bg-red-50 text-red-600 text-xs px-2 py-1.5 rounded-lg border border-red-100 flex items-start gap-1.5">
                        <AlertCircle size={14} className="mt-0.5 shrink-0" />
                        <span>{item.important}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Food Section */}
          <div className="px-4 mb-8">
            <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                <Utensils size={16} /> 美食推薦
            </h2>
            <div className="grid gap-4">
                {selectedDay.food.map((food, idx) => (
                    <Card key={idx} className={food.isPrimary ? "border-2 border-orange-100" : ""}>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-bold text-ghibli-brown text-lg">{food.name}</h4>
                                <div className="text-xs text-gray-500">{food.type} • {food.price}</div>
                            </div>
                            {food.navLink && (
                                <button onClick={() => handleNavClick(food.navLink)} className="bg-blue-50 p-2 rounded-full text-blue-500">
                                    <Navigation size={16} />
                                </button>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {food.features.map((feat, fidx) => (
                                <Tag key={fidx} color={food.isPrimary ? 'orange' : 'green'}>{feat}</Tag>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="px-4 mb-8">
             <div className="bg-ghibli-green/5 rounded-2xl p-5 border border-ghibli-green/10">
                <h3 className="font-bold text-ghibli-green mb-3 flex items-center gap-2">
                    <Info size={18} /> 親子小貼士
                </h3>
                <ul className="space-y-2">
                    {selectedDay.tips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-ghibli-brown/80 flex gap-2">
                            <span className="text-ghibli-green">•</span>
                            {tip}
                        </li>
                    ))}
                </ul>
             </div>
          </div>

        </div>
      )}

      {/* --- View: Home Grid --- */}
      {activeTab === TabView.HOME && !selectedDay && (
        <div className="animate-fade-in pb-24">
          <header className="px-6 pt-10 pb-6">
            <h1 className="text-3xl font-bold text-ghibli-brown">名古屋</h1>
            <p className="text-ghibli-green text-lg">8 天 7 夜 親子自駕遊</p>
          </header>

          <div className="px-4 grid grid-cols-2 gap-3">
            {ITINERARY_DATA.map((day) => (
              <button 
                key={day.id}
                onClick={() => setSelectedDayId(day.id)}
                className="bg-white p-4 rounded-2xl shadow-sm border border-transparent hover:border-ghibli-orange/30 hover:shadow-md transition-all text-left flex flex-col h-full"
              >
                <div className="flex justify-between items-center mb-2">
                    <span className="bg-ghibli-brown text-ghibli-cream text-xs font-bold px-2 py-1 rounded-md">{day.dateLabel}</span>
                    <div className="opacity-50 scale-75 origin-right">{getWeatherIcon(day.weather.icon)}</div>
                </div>
                <h3 className="font-bold text-ghibli-brown text-sm mb-1 leading-snug">{day.title}</h3>
                <div className="mt-auto pt-2 flex flex-wrap gap-1">
                    {day.highlights.slice(0, 2).map((h, i) => (
                        <span key={i} className="text-[10px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">{h}</span>
                    ))}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 px-6">
             <div className="bg-gradient-to-br from-ghibli-green to-emerald-800 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-1">旅行小幫手</h3>
                    <p className="text-white/80 text-sm mb-4">查看航班、預算與緊急資訊</p>
                    <button 
                        onClick={() => setActiveTab(TabView.TOOLS)}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
                    >
                        打開工具箱 <ArrowRight size={16} />
                    </button>
                </div>
                <Plane className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32 rotate-12" />
             </div>
          </div>
        </div>
      )}

      {/* --- View: Tools --- */}
      {activeTab === TabView.TOOLS && (
         <div className="animate-fade-in">
             <ToolsView />
         </div>
      )}

      {/* --- Bottom Navigation --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/90 backdrop-blur-md shadow-2xl rounded-full p-2 flex justify-between items-center border border-gray-100 z-50">
        <button 
            onClick={() => { setActiveTab(TabView.HOME); setSelectedDayId(null); }}
            className={`flex-1 flex flex-col items-center py-2 rounded-full transition-all ${activeTab === TabView.HOME ? 'text-ghibli-green bg-green-50' : 'text-gray-400'}`}
        >
            <Calendar size={20} />
            <span className="text-[10px] font-bold mt-0.5">行程</span>
        </button>
        <div className="w-px h-8 bg-gray-200"></div>
        <button 
            onClick={() => setActiveTab(TabView.TOOLS)}
            className={`flex-1 flex flex-col items-center py-2 rounded-full transition-all ${activeTab === TabView.TOOLS ? 'text-ghibli-orange bg-orange-50' : 'text-gray-400'}`}
        >
            <MapPin size={20} />
            <span className="text-[10px] font-bold mt-0.5">工具箱</span>
        </button>
      </div>

    </div>
  );
};

export default App;