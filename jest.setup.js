// Initialize Expo registry before modules load
if (typeof global.__ExpoImportMetaRegistry === 'undefined') {
  Object.defineProperty(global, '__ExpoImportMetaRegistry', {
    value: new Map(),
    writable: false,
    configurable: false,
  });
}

// Polyfill structuredClone if not available
if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}

