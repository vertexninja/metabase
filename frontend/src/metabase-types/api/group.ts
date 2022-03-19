export type GroupId = number;

export type UserType = "member" | "manager";

export type Member = {
  user_id: number;
  membership_id: number;
  email: string;
  first_name: string;
  last_name: string;
  type?: UserType;
};

export type Group = {
  id: GroupId;
  members: Member[];
  name: string;
  member_count: number;
};
