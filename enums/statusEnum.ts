export enum ImportWarehouseStatus {
  CANCEL = 'Đã huỷ',
  PENDING = 'Tạo đơn',
  CHECKING = 'Duyệt',
  EXPORT = 'Xuất kho',
  COMPLETE = 'Nhận kho',
}

export enum OrderStatus {
  CANCEL = 'Đã huỷ',
  DILIVERING = 'Đang giao dịch',
  DELIVERED = 'Hoàn thành',
  ORDER = 'Đặt hàng',
}

export enum CheckWarehouseStatus {
  PENDING = 'Đang kiểm kho',
  SUCCESS = 'Đã kiểm kho',
  CANCEL = 'Đã huỷ',
}

export const importWarehouseStatus = [
  ImportWarehouseStatus.CANCEL,
  ImportWarehouseStatus.PENDING,
  ImportWarehouseStatus.CHECKING,
  ImportWarehouseStatus.EXPORT,
  ImportWarehouseStatus.COMPLETE,
];

export const checkWarehouseStatus = [
  CheckWarehouseStatus.CANCEL,
  CheckWarehouseStatus.PENDING,
  CheckWarehouseStatus.SUCCESS,
];

export const orderStatus = {
  cancelled: OrderStatus.CANCEL,
  finalized: OrderStatus.DILIVERING,
  completed: OrderStatus.DELIVERED,
  draft: OrderStatus.ORDER,
};
export const orderStatusShip = {
  ACCEPTED: 'Chấp nhận',
  ASSIGNING: 'Đang gán',
  'IN PROCESS': 'Đang giao',
  COMPLETED: 'Hoàn thành',
  CANCELLED: 'Đã huỷ',
  FAILED: 'Giao hàng thất bại',
};

// export const orderStatus = [OrderStatus.CANCEL, OrderStatus.DILIVERING, OrderStatus.DELIVERED];

export const unknownStatus = 'Không xác định';
