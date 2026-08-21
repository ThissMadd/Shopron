import { ICONS } from '@/lib/icons';

export default function Icon({ name, className }){
  const svg = ICONS[name];
  if(!svg) return null;
  return <span className={className} style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: svg }} />;
}
