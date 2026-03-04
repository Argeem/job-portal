import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description:
      "Our AI-driven algorithm analyzes your profile and preferences to recommend the most relevant job opportunities, saving you time and effort in your job search.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create a professional resume in minutes with our easy-to-use builder, designed to highlight your skills and experience effectively.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "Communicate directly with employers through our secure messaging system, allowing you to ask questions and get updates on your applications.",
  },
  {
    icon: Award,
    title: "Skill Assessments",
    description:
      "Showcase your skills with our industry-recognized assessments, giving employers confidence in your abilities.",
  },
];

export const employerFeatures = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description:
      "Gain access to a vast pool of qualified candidates actively seeking job opportunities, making it easier to find the perfect fit for your company.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track the performance of your job postings and applications with our comprehensive analytics dashboard, helping you make data-driven hiring decisions.",
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description:
      "Our platform verifies candidate profiles to ensure you are connecting with genuine and qualified individuals, reducing the risk of fraudulent applications.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description:
      "Streamline your hiring process with our efficient tools, allowing you to post jobs, review applications, and communicate with candidates all in one place.",
  },
];

export const NAVIGATION_MENU = [
  { id: "employers-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post a Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer-service", label: "Customer Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "Human Resources" },
  { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
];

export const SALARY_RANGES = [
  "Less than $1000",
  "$1000 - $15,000",
  "More than $15,000",
];
