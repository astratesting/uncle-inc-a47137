export interface Project {
  id: string;
  user_id: string;
  name: string;
  description: string;
  target_audience: string;
  status: "idea" | "prototyping" | "testing" | "launched";
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  plan: "free" | "founder" | "studio";
  created_at: string;
}