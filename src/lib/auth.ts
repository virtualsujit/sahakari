import { PrismaClient } from "@prisma/client";
import { supabase } from "./supabase/client";

const prisma = new PrismaClient();

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) throw error;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getUserSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getUserRoles(userId: string) {
  const roles = await prisma.userRole.findMany({
    where: { userId },
    include: { role: true },
  });
  return roles.map(userRole => userRole.role.name);
}
