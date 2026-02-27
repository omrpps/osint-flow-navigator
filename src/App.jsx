import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import FlowViewer from './pages/FlowViewer';
import ToolsPage from './pages/ToolsPage';



import SettingsPage from './pages/SettingsPage';
import SecurityInABoxPage from './pages/SecurityInABoxPage';
import VerificationGuidePage from './pages/VerificationGuidePage';
import OpsecGuidePage from './pages/OpsecGuidePage';
import EvidencePage from './pages/EvidencePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="investigation/:flowId" element={<FlowViewer />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="security" element={<SecurityInABoxPage />} />
          <Route path="verification-guide" element={<VerificationGuidePage />} />
          <Route path="opsec-guide" element={<OpsecGuidePage />} />
          <Route path="evidence" element={<EvidencePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
