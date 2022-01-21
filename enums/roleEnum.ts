export enum RoleEnum {
  MANAGER = 'manager',
  SHIPPER = 'shipper',
  OWNER = 'owner',
  ADMIN = 'admin',
}

export enum EmployeeRoleEnum {
  SHIPPER = 'shipper',
  OWNER = 'owner',
}

export enum EmployeeRoleNameEnum {
  SHIPPER = 'Shipper',
  OWNER = 'Quản lý kho',
  ADMIN = 'Admin',
  MANAGER = 'Manager',
}

export const nameRoles = {
  [RoleEnum.SHIPPER]: EmployeeRoleNameEnum.SHIPPER,
  [RoleEnum.MANAGER]: EmployeeRoleNameEnum.MANAGER,
  [RoleEnum.OWNER]: EmployeeRoleNameEnum.OWNER,
  [RoleEnum.ADMIN]: EmployeeRoleNameEnum.ADMIN,
};
