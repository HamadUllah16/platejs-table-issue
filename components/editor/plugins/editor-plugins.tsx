'use client';
import { FixedToolbarPlugin } from '@/components/editor/plugins/fixed-toolbar-plugin';
import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';
import {
  BasicMarksPlugin,
} from '@udecode/plate-basic-marks/react';
import { TableCellHeaderPlugin, TableCellPlugin, TablePlugin, TableRowPlugin } from '@udecode/plate-table/react';


export const viewPlugins = [
  BasicElementsPlugin,
  BasicMarksPlugin,
  TablePlugin,
  TableRowPlugin,
  TableCellPlugin,
  TableCellHeaderPlugin
] as const;

export const editorPlugins = [
  ...viewPlugins,

  // UI
  FixedToolbarPlugin,
  // FloatingToolbarPlugin,
];
