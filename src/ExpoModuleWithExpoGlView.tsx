import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoModuleWithExpoGlViewProps } from './ExpoModuleWithExpoGl.types';

const NativeView: React.ComponentType<ExpoModuleWithExpoGlViewProps> =
  requireNativeViewManager('ExpoModuleWithExpoGl');

export default function ExpoModuleWithExpoGlView(props: ExpoModuleWithExpoGlViewProps) {
  return <NativeView {...props} />;
}
