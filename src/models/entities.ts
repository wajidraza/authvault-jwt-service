export interface UserRecord {
  id: string;
  email: string;
  name?: string;
  role: 'ADMIN' | 'MEMBER' | 'GUEST';
  createdAt: Date;
}

export interface DomainEntity {
  id: string;
  title: string;
  metadata: Record<string, unknown>;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  createdAt: Date;
  updatedAt: Date;
}
