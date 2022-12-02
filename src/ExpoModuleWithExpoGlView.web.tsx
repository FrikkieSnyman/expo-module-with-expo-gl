import * as React from 'react';

import { ExpoModuleWithExpoGlViewProps } from './ExpoModuleWithExpoGl.types';

export default function ExpoModuleWithExpoGlView(props: ExpoModuleWithExpoGlViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
