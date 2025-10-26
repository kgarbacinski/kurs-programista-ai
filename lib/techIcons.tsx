import {
  SiPython,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiRabbitmq,
  SiAmazonwebservices,
  SiKubernetes,
  SiTerraform,
  SiGithub,
  SiFigma,
  SiSentry,
  SiCelery,
  SiLinear,
} from 'react-icons/si';
import {
  FaDatabase,
  FaCode,
  FaLock,
  FaVial,
  FaChartLine,
  FaCog,
  FaRobot,
  FaPlug,
  FaPuzzlePiece,
  FaPalette,
  FaBolt,
  FaSearch,
  FaHammer,
  FaShieldAlt,
} from 'react-icons/fa';

export const techIconsMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  // Languages & Frameworks
  'python': SiPython,
  'fastapi': SiFastapi,

  // DevOps & Cloud
  'docker': SiDocker,
  'aws': SiAmazonwebservices,
  'kubernetes': SiKubernetes,
  'k8s': SiKubernetes,
  'terraform': SiTerraform,

  // Databases & Messaging
  'postgres': SiPostgresql,
  'postgresql': SiPostgresql,
  'rabbitmq': SiRabbitmq,
  'database': FaDatabase,
  'sqlalchemy': FaDatabase,

  // Tools
  'github': SiGithub,
  'figma': SiFigma,
  'sentry': SiSentry,
  'celery': SiCelery,
  'linear': SiLinear,

  // Generic tech concepts
  'code': FaCode,
  'security': FaLock,
  'testing': FaVial,
  'pytest': FaVial,
  'monitoring': FaChartLine,
  'config': FaCog,
  'ai': FaRobot,
  'claude': FaRobot,
  'cursor': FaBolt,
  'mcp': FaPlug,
  'plugin': FaPlug,
  'component': FaPuzzlePiece,
  'shadcn': FaPuzzlePiece,
  'design': FaPalette,
  'flake8': FaHammer,
  'ddd': FaHammer,
  'jwt': FaShieldAlt,
  'actions': FaCog,
  'search': FaSearch,
};

export function getTechIcon(name: string) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return techIconsMap[key] || FaCog; // Default fallback
}
