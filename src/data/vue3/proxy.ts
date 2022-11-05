/**
 * @desc proxy 代理实现双向绑定
 * @param target {Record<string, any>} 需要代理的对象
 * @param dom {Record<string, HTMLElement | null>}更新dom操作
 */
export const proxy = (
  target: Record<string, any>,
  dom: Record<string, HTMLElement | null>
): Record<string, any> => {
  // 创建proxy实例并返回
  return new Proxy(target, {
    // 当被读取时触发：返回访问的代理的对象某个值 target={a:'1',b:'2'},
    get: (target: Record<string, any>, key: string, receiver: any) => {
      return target[key];
    },
    // 当被重新赋值时触发:将代理对象重新赋值到传入的新值完成数据更新
    set: (
      target: Record<string, any>,
      key: string,
      newValue: any,
      receiver: any
    ) => {
      dom[key]!.innerHTML = newValue;
      target[key] = newValue;
      return true;
    },
  });
};
