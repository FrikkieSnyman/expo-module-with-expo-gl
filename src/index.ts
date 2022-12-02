import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoModuleWithExpoGl.web.ts
// and on native platforms to ExpoModuleWithExpoGl.ts
import ExpoModuleWithExpoGlModule from './ExpoModuleWithExpoGlModule';
import ExpoModuleWithExpoGlView from './ExpoModuleWithExpoGlView';
import { ChangeEventPayload, ExpoModuleWithExpoGlViewProps } from './ExpoModuleWithExpoGl.types';

// Get the native constant value.
export const PI = ExpoModuleWithExpoGlModule.PI;

export function hello(): string {
  return ExpoModuleWithExpoGlModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoModuleWithExpoGlModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoModuleWithExpoGlModule ?? NativeModulesProxy.ExpoModuleWithExpoGl);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoModuleWithExpoGlView, ExpoModuleWithExpoGlViewProps, ChangeEventPayload };
