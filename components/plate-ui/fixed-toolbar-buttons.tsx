'use client';

import React from 'react';

import { useEditorReadOnly } from '@udecode/plate/react';
import { TableDropdownMenu } from './table-dropdown-menu';
import { ToolbarGroup } from './toolbar';

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="flex w-full">
      {!readOnly && (
        <>
          <ToolbarGroup>
            <TableDropdownMenu />
          </ToolbarGroup>
        </>
      )}

      <div className="grow" />
    </div>
  );
}
