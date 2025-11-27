import React from 'react';
import { DayItinerary } from './types';
import { Sun, Cloud, Snowflake, CloudRain } from 'lucide-react';

export const ITINERARY_DATA: DayItinerary[] = [
  {
    id: 1,
    dateLabel: "D1",
    title: "抵達名古屋・入住日",
    weather: { temp: "10°C / 4°C", condition: "多雲時晴", icon: 'cloud' },
    highlights: ["中部國際機場", "名鐵 µSKY", "味仙拉麵"],
    schedule: [
      { time: "17:15", title: "台灣起飛", description: "前往中部國際機場", type: "transport" },
      { time: "20:50", title: "抵達機場", important: "夜間航班人潮少，確保娃娃車/行李", type: "transport" },
      { time: "22:00", title: "搭乘 µSKY", description: "直達名古屋站 (28分)", important: "建議買兒童指定席", type: "transport" },
      { time: "22:45", title: "飯店 Check-in", description: "Daiwa Roynet 新幹線口", type: "visit", navLink: "Daiwa Roynet Hotel Nagoya Taiko dori Side" },
    ],
    food: [
      { name: "味仙 (名古屋駅前店)", type: "台式拉麵", price: "¥1,000~¥1,800", features: ["可點不辣", "青菜", "炒飯"], isPrimary: true, navLink: "味仙 名古屋駅前店" },
      { name: "世界的山將 (名駅店)", type: "夢幻雞翅", price: "¥1,200~¥2,000", features: ["招牌雞翅", "串燒"], isPrimary: false, navLink: "世界的山將 名古屋站" },
    ],
    tips: ["µSKY 速度快，若小孩太累建議直接便利商店買宵夜回飯店。", "飯店可索取兒童備品。"]
  },
  {
    id: 2,
    dateLabel: "D2",
    title: "樂高樂園 LEGOLAND",
    weather: { temp: "12°C / 5°C", condition: "晴朗", icon: 'sun' },
    highlights: ["LEGO NINJAGO", "Submarine Adventure", "Miniland"],
    schedule: [
      { time: "09:30", title: "入園", description: "搭乘あおなみ線至金城ふ頭站", type: "visit" },
      { time: "09:30-11:30", title: "熱門設施衝刺", description: "Ninjago, Submarine, Lost Kingdom", type: "visit" },
      { time: "11:30", title: "休息 & 拍照", description: "MiniLand (室內涼爽)", type: "rest" },
      { time: "13:00", title: "第二輪遊玩", description: "Driving School (4歲愛), Duplo Play", type: "visit" },
      { time: "18:00", title: "晚餐 & 休息", description: "返回名古屋站周邊", type: "food" },
    ],
    food: [
      { name: "Brick House Burger", type: "樂園午餐", price: "¥1,200~", features: ["樂高造型漢堡"], isPrimary: true },
      { name: "天むす 千壽", type: "炸蝦飯糰", price: "¥800~", features: ["外帶回飯店", "高島屋B1"], isPrimary: false, navLink: "JR Takashimaya Nagoya" },
    ],
    tips: ["樂園不適合全程推車，建議停放入口。", "MiniLand 是最佳室內休息站。", "下雨可去 Duplo Play 或 Police Station。"]
  },
  {
    id: 3,
    dateLabel: "D3",
    title: "白川鄉・飛騨高山 (巴士團)",
    weather: { temp: "5°C / -3°C", condition: "雪地 / 晴", icon: 'snow' },
    highlights: ["高山老街", "飛驒牛壽司", "合掌村"],
    schedule: [
      { time: "08:45", title: "集合", description: "名鐵巴士中心・太閤通口 (銀時計)", important: "準時集合!", type: "transport" },
      { time: "11:30", title: "高山老街", description: "上三之町散步、吃午餐", type: "visit" },
      { time: "14:30", title: "白川鄉合掌村", description: "民家園、和田家、明善寺", important: "注意雪地路滑", type: "visit" },
      { time: "19:00", title: "返回名古屋", description: "晚餐建議吃鰻魚飯", type: "transport" },
    ],
    food: [
      { name: "飛騨牛飯 匠家", type: "燒肉/丼飯", price: "¥1,800~", features: ["出餐快", "親子友善"], isPrimary: true, navLink: "Takumiya Takayama" },
      { name: "金乃こって牛", type: "飛驒牛壽司", price: "¥1,000", features: ["必吃小吃", "排隊名店"], isPrimary: false },
      { name: "しら河", type: "鰻魚三吃", price: "¥2,800~", features: ["清爽口味", "晚餐推薦"], isPrimary: true, navLink: "Hitsumabushi Shirakawa" },
    ],
    tips: ["必備：防滑雪靴、暖暖包、防水手套。", "不建議帶推車去城山展望台，路滑危險。"]
  },
  {
    id: 4,
    dateLabel: "D4",
    title: "吉卜力公園 (大倉庫)",
    weather: { temp: "10°C / 3°C", condition: "多雲", icon: 'cloud' },
    highlights: ["吉卜力大倉庫", "龍貓隧道", "風之谷Cafe"],
    schedule: [
      { time: "09:30", title: "抵達公園", description: "地鐵東山線 → 藤が丘 → リニモ", type: "transport" },
      { time: "10:00", title: "大倉庫參觀", description: "名場面展、天空之城機器人", important: "需預約QR Code", type: "visit" },
      { time: "13:00", title: "午餐", description: "園內或 AEON 長久手", type: "food" },
      { time: "15:00", title: "AEON 購物", description: "玩具反斗城、休息", type: "shopping" },
    ],
    food: [
      { name: "風之谷 Café", type: "輕食/簡餐", price: "¥1,200~", features: ["園內", "特製三明治"], isPrimary: true },
      { name: "AEON 美食街", type: "各式料理", price: "¥900~", features: ["選擇多", "便宜"], isPrimary: false, navLink: "Aeon Mall Nagakute" },
    ],
    tips: ["大倉庫禁止推車入館 (需寄放)。", "建議預留 3-4 小時參觀。", "展區冷氣較強，帶薄外套。"]
  },
  {
    id: 5,
    dateLabel: "D5",
    title: "Outlet & 名花之里",
    weather: { temp: "11°C / 2°C", condition: "有風 / 晴", icon: 'sun' },
    highlights: ["三井 Outlet", "光之隧道", "水上燈光秀"],
    schedule: [
      { time: "09:10", title: "巴士出發", description: "名鐵巴士中心 (使用套票)", type: "transport" },
      { time: "10:10", title: "Outlet 購物", description: "North Area (精品) -> South Area (雜貨)", type: "shopping" },
      { time: "16:00", title: "前往名花之里", description: "搭乘接駁巴士", type: "transport" },
      { time: "17:30", title: "點燈賞花", description: "光之隧道、大草坪主秀", type: "visit" },
    ],
    food: [
      { name: "VANSAN", type: "義式料理", price: "¥1,500~", features: ["親子友善", "免費兒童餐具"], isPrimary: true },
      { name: "矢場とん", type: "味噌豬排", price: "¥1,500~", features: ["名古屋名物"], isPrimary: false },
    ],
    tips: ["套票包含：來回巴士 + 入園券 + ¥1000 金券。", "名花之里夜間很冷，務必穿厚外套。", "溫室是最佳保暖休息點。"]
  },
  {
    id: 6,
    dateLabel: "D6",
    title: "牧歌之里雪樂園 & 溫泉",
    weather: { temp: "4°C / -5°C", condition: "降雪", icon: 'snow' },
    highlights: ["雪盆", "動物餵食", "牧華溫泉"],
    schedule: [
      { time: "09:10", title: "出發", description: "KKday 巴士團", type: "transport" },
      { time: "10:30", title: "冰雪樂園", description: "玩雪盆、堆雪人、餵羊", type: "visit" },
      { time: "15:00", title: "溫泉體驗", description: "牧華溫泉 (室內+露天)", important: "先沖澡再泡", type: "rest" },
      { time: "17:00", title: "返回名古屋", description: "約 19:00 抵達", type: "transport" },
    ],
    food: [
      { name: "ふる里亭", type: "牛奶鍋/咖哩", price: "¥1,500~", features: ["口味偏甜", "小孩愛吃"], isPrimary: true },
      { name: "世界の山ちゃん", type: "居酒屋", price: "¥2,000~", features: ["回名古屋吃", "方便"], isPrimary: false },
    ],
    tips: ["多帶一套備用襪子給小孩。", "溫泉刺青需遮蓋。", "雪地反射強，可戴墨鏡。"]
  },
  {
    id: 7,
    dateLabel: "D7",
    title: "科學館・大須・機場",
    weather: { temp: "13°C / 6°C", condition: "晴朗", icon: 'sun' },
    highlights: ["兒童科學館", "大須商店街", "唐吉軻德"],
    schedule: [
      { time: "10:00", title: "名古屋市科學館", description: "直奔 2F 兒童館 & 3F 放電實驗", type: "visit" },
      { time: "14:00", title: "大須商店街", description: "吃小吃、買藥妝", type: "shopping" },
      { time: "16:00", title: "唐吉軻德榮店", description: "最後補貨 (3F 兒童區)", type: "shopping" },
      { time: "20:00", title: "前往機場", description: "搭 µSKY 至機場飯店", type: "transport" },
    ],
    food: [
      { name: "サガミ (榮店)", type: "和食家庭餐", price: "¥1,200~", features: ["蕎麥麵", "兒童餐"], isPrimary: true },
      { name: "金魚虎燒", type: "鯛魚燒", price: "¥300", features: ["大須名物", "可愛"], isPrimary: false },
    ],
    tips: ["科學館推車友善，但大須商店街人多路窄不建議。", "晚上入住機場飯店 (Comfort Hotel)。"]
  },
  {
    id: 8,
    dateLabel: "D8",
    title: "回程日",
    weather: { temp: "11°C / 5°C", condition: "多雲", icon: 'cloud' },
    highlights: ["蝦仙貝之里", "兒童遊戲區", "返台"],
    schedule: [
      { time: "07:00", title: "飯店早餐", description: "Comfort Hotel 自助餐", type: "food" },
      { time: "08:00", title: "前往航廈", description: "步行 3 分鐘 (連通)", type: "transport" },
      { time: "09:00", title: "報到托運", description: "預留時間逛免稅店", type: "transport" },
      { time: "09:50", title: "起飛", description: "返回溫暖的家", type: "transport" },
    ],
    food: [
      { name: "蝦仙貝之里", type: "伴手禮", price: "¥600~", features: ["機場必買", "試吃多"], isPrimary: true },
    ],
    tips: ["通關前可去 2F 兒童遊戲區放電。", "手羽先真空包可帶回台灣。"]
  }
];

export const getWeatherIcon = (iconName: string) => {
  switch (iconName) {
    case 'sun': return <Sun className="w-8 h-8 text-orange-400" />;
    case 'cloud': return <Cloud className="w-8 h-8 text-gray-400" />;
    case 'snow': return <Snowflake className="w-8 h-8 text-blue-300" />;
    case 'rain': return <CloudRain className="w-8 h-8 text-blue-500" />;
    default: return <Sun className="w-8 h-8 text-orange-400" />;
  }
};
