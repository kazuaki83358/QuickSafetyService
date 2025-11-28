import { Services } from './Services';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return <Services onNavigate={onNavigate} isFullPage={true} />;
}
