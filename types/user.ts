export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  preferredLanguage: "en" | "ar";
  healthGoal: "weight_loss" | "muscle_gain" | "maintain" | "healthy_eating";
  allergies?: string[];
  deliveryAddress?: {
    street: string;
    city: string;
    postalCode: string;
    instructions?: string;
  };
  subscriptionStatus?: "active" | "paused" | "canceled" | "none";
  activePlanId?: string;
  createdAt: string;
}
