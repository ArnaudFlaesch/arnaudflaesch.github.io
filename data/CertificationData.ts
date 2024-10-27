import { scrumOrgLink } from '../data/SiteData';

interface ICertificationData {
  name: string;
  badgeLink: string;
  imagePath: string;
}

interface ICertificationGroup {
  title: string;
  certifications: ICertificationData[];
}

const githubActionsBadgeLink = 'https://www.credly.com/badges/bcc83162-8396-4e95-b73d-b89ad2658027';
const githubAdvancedSecurityBadgeLink = 'https://www.credly.com/badges/a20775eb-8713-4013-b0fe-d5e359a543e8';
const githubFoundationsBadgeLink = 'https://www.credly.com/badges/85ef131c-c299-4bd5-aa55-77141c16c822';
const githubCopilotBadgeLink = 'https://www.credly.com/badges/e8fd9833-c41b-40b9-8af6-7c7105b7f5c2';
const leadingSafeBadgeLink = 'https://www.credly.com/badges/73047751-ef1f-47b9-a0d1-6c4f24319c61';
const googleCloudDigitalLeaderBadgeLink = 'https://www.credly.com/badges/b849f990-e002-40ac-b8dd-ac3f5f9fa211';
const googleCloudProfessionalDeveloperBadgeLink = 'https://www.credly.com/badges/6fc2687b-3a79-4828-b164-f5da38917bd0';

export const certificationsData = [
  {
    title: 'Google Cloud Professional Cloud Developer et Digital Leader - juin 2024',
    certifications: [
      {
        name: 'Google Cloud Professional Cloud Developer',
        badgeLink: googleCloudProfessionalDeveloperBadgeLink,
        imagePath: '/certifications/professional-cloud-developer-certification.png'
      },
      {
        name: 'Google Cloud Digital Leader',
        badgeLink: googleCloudDigitalLeaderBadgeLink,
        imagePath: '/certifications/cloud-digital-leader-certification.png'
      }
    ]
  },
  {
    title: 'GitHub Actions et Advanced Security - mars 2024 GitHub Foundations - juillet 2024',
    certifications: [
      {
        name: 'GitHub Actions',
        badgeLink: githubActionsBadgeLink,
        imagePath: '/certifications/github-advanced-security.png'
      },
      {
        name: 'GitHub Advanced Security',
        badgeLink: githubAdvancedSecurityBadgeLink,
        imagePath: '/certifications/github-actions.png'
      },
      {
        name: 'GitHub Foundations',
        badgeLink: githubFoundationsBadgeLink,
        imagePath: '/certifications/github-foundations.png'
      },
      {
        name: 'GitHub Copilot',
        badgeLink: githubCopilotBadgeLink,
        imagePath: '/certifications/github-copilot.png'
      }
    ]
  },
  {
    title: 'Professional Scrum Master 1 et 2 - décembre 2023',
    certifications: [
      {
        name: 'Professional Scrum Master 1',
        badgeLink: scrumOrgLink,
        imagePath: '/certifications/professional-scrum-master-i-psm-i.png'
      },
      {
        name: 'Professional Scrum Master 2',
        badgeLink: scrumOrgLink,
        imagePath: '/certifications/professional-scrum-master-ii-psm-ii.png'
      }
    ]
  },
  {
    title: 'SAFe 6 Agilist - mai 2024',
    certifications: [
      {
        name: 'SAFe 6 Agilist',
        badgeLink: leadingSafeBadgeLink,
        imagePath: '/certifications/certified-safe-6-agilist.png'
      }
    ]
  }
] as ICertificationGroup[];
