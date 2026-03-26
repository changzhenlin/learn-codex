import { mockUsers } from "@/lib/mock-users";
import type { UserDetail } from "@/lib/mock-users";

export async function getUserById(id: string): Promise<UserDetail | null> {
  return mockUsers.find((user) => user.id === id) ?? null;
}

export function getUserStatusMeta(status: UserDetail["status"]): {
  label: string;
  className: "status-active" | "status-away" | "status-offline";
} {
  if (status === "ACTIVE") {
    return { label: "在线处理中", className: "status-active" };
  }

  if (status === "AWAY") {
    return { label: "暂时离开", className: "status-away" };
  }

  return { label: "当前离线", className: "status-offline" };
}
