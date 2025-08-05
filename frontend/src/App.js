import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import React, { useState } from 'react';
import { ToolbarContainer } from './toolbarComponents/ToolbarContainer';
import { Toaster } from 'sonner';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [toolbarMinimized, setToolbarMinimized] = useState(false);

  return (
    <div>
      <ToolbarContainer
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        isMinimized={toolbarMinimized}
        setIsMinimized={setToolbarMinimized}
      />
      <PipelineUI />
      <Toaster richColors closeButton position="top-center" />
    </div>
  );
}

export default App;
