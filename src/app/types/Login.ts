export type LoginResponse = {
  access_token: string;
};

export type LoginObject = {
  username: string;
  permissions: string[];
  expires_at: Date;
};
