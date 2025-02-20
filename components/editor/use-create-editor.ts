'use client';

import type { Value } from '@udecode/plate';

import {
  type CreatePlateEditorOptions,
  usePlateEditor,
} from '@udecode/plate/react';
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from '@udecode/plate-table/react';
import {
  TableCellElement,
  TableCellHeaderElement,
} from '@/components/plate-ui/table-cell-element';
import { TableElement } from '@/components/plate-ui/table-element';
import { TableRowElement } from '@/components/plate-ui/table-row-element';
import { editorPlugins } from './plugins/editor-plugins';

export const viewComponents = {
  [TableCellHeaderPlugin.key]: TableCellHeaderElement,
  [TableCellPlugin.key]: TableCellElement,
  [TablePlugin.key]: TableElement,
  [TableRowPlugin.key]: TableRowElement,
};

export const editorComponents = {
  ...viewComponents,
};

export const useCreateEditor = (
  {
    components,
    override,
    readOnly,
    ...options
  }: {
    components?: Record<string, any>;
    plugins?: any[];
    readOnly?: boolean;
  } & Omit<CreatePlateEditorOptions, 'plugins'> = {},
  deps: any[] = []
) => {
  return usePlateEditor<Value, (typeof editorPlugins)[number]>(
    {
      override: {
        components: {
          ...(readOnly ? viewComponents : editorComponents),
          ...components,
        },
        ...override,
      },
      plugins: (editorPlugins) as any,
      ...options,
    },
    deps
  );
};