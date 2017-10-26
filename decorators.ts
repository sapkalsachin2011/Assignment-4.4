// Class Decorator
export function log(target: Function) {
  console.log('log() invoked. Class:', target);
}

// Method Decorator
export function enumerable(value: boolean) {
  console.log('enumerable() invoked.');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
    console.log(
      `  target: ${JSON.stringify(
        target
      )}, propertyKey: ${propertyKey}, descriptor: ${JSON.stringify(
        descriptor
      )}`
    );
  };
}
