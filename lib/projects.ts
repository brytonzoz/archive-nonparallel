import { ProjectData, Project } from './utils';

// For now, we'll use hardcoded data that matches our YAML structure
// In a production app, this would load from the YAML file
const projectData: ProjectData = {
  music: [
    {
      name: "Just A Reminder To Live Life",
      url: "https://justaremindertolivelife.com",
      type: "procedural-mixtape",
      description: "An evolving procedural mixtape that changes and grows",
      highlight: "Always Something New"
    },
    {
      name: "The Archive (Music)",
      url: "https://nonparallel.wixstudio.com/archive",
      type: "multi-purpose-stream",
      description: "Multi-purpose streaming platform for diverse audio content",
      highlight: "Full Experience"
    }
  ],
  fashion: [
    {
      name: "Loopless Collection (Episodes)",
      url: "https://nonparallel.wixstudio.com/archive/thearchive-fashion-1",
      type: "video-series",
      description: "Video series showcasing design process and collections",
      highlight: "designer series"
    },
    {
      name: "Scrapwrk Store",
      url: "https://scrapwrk.com",
      type: "ecommerce",
      description: "Curated fashion pieces and experimental designs",
      highlight: "Limited Collection"
    }
  ]
};

export function getProjects(): ProjectData {
  return projectData;
}

export function getMusicProjects(): Project[] {
  return projectData.music;
}

export function getFashionProjects(): Project[] {
  return projectData.fashion;
} 