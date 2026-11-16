/**
 * Supabase Database Type Definitions (Stub Schema for future integration)
 * This structure reflects the planned Postgres schema for NutriGo without connecting to external services.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          preferred_language: string;
          health_goal: string | null;
          allergies: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          preferred_language?: string;
          health_goal?: string | null;
          allergies?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          preferred_language?: string;
          health_goal?: string | null;
          allergies?: string[] | null;
          updated_at?: string;
        };
      };
      meals: {
        Row: {
          id: string;
          slug: string;
          title_en: string;
          title_ar: string;
          description_en: string;
          description_ar: string;
          calories: number;
          protein: number;
          carbs: number;
          fat: number;
          price: number;
          image_url: string;
          goal: string;
          dietary_tags: string[];
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title_en: string;
          title_ar: string;
          description_en: string;
          description_ar: string;
          calories: number;
          protein: number;
          carbs: number;
          fat: number;
          price: number;
          image_url: string;
          goal: string;
          dietary_tags?: string[];
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title_en?: string;
          title_ar?: string;
          description_en?: string;
          description_ar?: string;
          calories?: number;
          protein?: number;
          carbs?: number;
          fat?: number;
          price?: number;
          image_url?: string;
          goal?: string;
          dietary_tags?: string[];
          is_active?: boolean;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan_slug: string;
          status: string;
          days_per_week: number;
          meals_per_day: number;
          start_date: string;
          end_date: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan_slug: string;
          status?: string;
          days_per_week: number;
          meals_per_day: number;
          start_date: string;
          end_date?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan_slug?: string;
          status?: string;
          days_per_week?: number;
          meals_per_day?: number;
          start_date?: string;
          end_date?: string | null;
        };
      };
    };
  };
}
