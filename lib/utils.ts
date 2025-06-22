export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}

export type Project = {
  name: string;
  url: string;
  type: string;
  description: string;
  highlight?: string;
}

export type ProjectData = {
  music: Project[];
  fashion: Project[];
} 