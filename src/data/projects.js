import { getAssetPath } from '../utils/paths';

export const projects = [
  {
    id: 1,
    title: 'ULUROVER - Autonomous Rover',
    description: {
      en: 'Autonomous rover with SLAM-based navigation using ROS, LiDAR, and stereo vision.',
      tr: 'ROS, LiDAR ve stereo görüş kullanarak SLAM tabanlı navigasyonlu otonom rover.',
    },
    techStack: ['ROS', 'SLAM', 'LiDAR', 'Python', 'C++'],
    image: getAssetPath('media/rover/20250910_19h04m29s_grim.png'),
    youtubeVideoId: '5kewE-v_1M8',
  },
  {
    id: 2,
    title: 'UNIMAK Machine',
    description: {
      en: 'Machine design and control systems project.',
      tr: 'Makine tasarımı ve kontrol sistemleri projesi.',
    },
    techStack: ['Mechanical Design', 'Control Systems'],
    image: getAssetPath('media/unimak/20251110_20h16m12s_grim.png'),
  },
  {
    id: 3,
    title: 'Product Manufacturing Check',
    description: {
      en: 'Manufacturing quality control and inspection system.',
      tr: 'Üretim kalite kontrolü ve muayene sistemi.',
    },
    techStack: ['Manufacturing', 'Quality Control'],
    image: getAssetPath('media/product-manufacturing-check/20251110_20h29m42s_grim.png'),
  },
  {
    id: 4,
    title: 'N8N Automation Dashboard',
    description: {
      en: 'Automation dashboard built with N8N workflow automation.',
      tr: 'N8N iş akışı otomasyonu ile oluşturulmuş otomasyon kontrol paneli.',
    },
    techStack: ['N8N', 'Automation', 'Dashboard'],
    image: getAssetPath('media/project-n8n-automation-dashboard/20251123_03h13m01s_grim.png'),
  },
];

