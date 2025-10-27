import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import EndpointRow from './EndpointRow';

function ApiDocumentation() {
  const [expandedSections, setExpandedSections] = useState({
    status: true,
    users: true,
    stripe: true,
    projects: true,
    messages: true,
    sse: true,
    image: true,
    dnsimple: true
  });

  const [selectedServer, setSelectedServer] = useState('http');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const apiSections = [
    {
      id: 'status',
      title: 'Status',
      endpoints: [
        { method: 'GET', path: '/status', description: '' }
      ]
    },
    {
      id: 'users',
      title: 'Users',
      endpoints: [
        { method: 'GET', path: '/users/me', description: '' },
        { method: 'GET', path: '/users/limits', description: '' },
        { method: 'GET', path: '/users/referral-code', description: '' },
        { method: 'POST', path: '/users/claim-referral-bonus', description: '' }
      ]
    },
    {
      id: 'stripe',
      title: 'stripe',
      endpoints: [
        { method: 'POST', path: '/stripe/checkout-session', description: 'Create Stripe Checkout Session for subscription' },
        { method: 'POST', path: '/stripe/credits-checkout', description: 'Create Stripe Checkout Session for one time credits purchase' },
        { method: 'GET', path: '/stripe/additional-credits', description: 'get all plans list' },
        { method: 'GET', path: '/stripe/subscriptions', description: 'get all plans list' },
        { method: 'GET', path: '/stripe/billing-history', description: 'Get billing history from Stripe' },
        { method: 'POST', path: '/stripe/webhook', description: 'Stripe webhook handler' }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      endpoints: [
        { method: 'GET', path: '/projects', description: '' },
        { method: 'POST', path: '/projects', description: '' },
        { method: 'GET', path: '/projects/{projectId}', description: '' },
        { method: 'PUT', path: '/projects/{projectId}', description: '' },
        { method: 'DELETE', path: '/projects/{projectId}', description: '' },
        { method: 'POST', path: '/projects/{projectId}/versions', description: '' },
        { method: 'POST', path: '/projects/{projectId}/switch-version', description: '' },
        { method: 'POST', path: '/projects/{projectId}/step-generation', description: '' },
        { method: 'PUT', path: '/projects/{projectId}/versions/{versionId}', description: '' },
        { method: 'POST', path: '/projects/{projectId}/versions/{versionId}/execute', description: '' },
        { method: 'POST', path: '/projects/{projectId}/versions/{versionId}/fix-generation', description: '' },
        { method: 'GET', path: '/projects/{projectId}/deploy', description: '' },
        { method: 'POST', path: '/projects/{projectId}/versions/{versionId}/extension/execute', description: '' },
        { method: 'POST', path: '/projects/{projectId}/duplicate', description: '' },
        { method: 'GET', path: '/projects/{projectId}/domainConfig', description: '' },
        { method: 'POST', path: '/projects/{projectId}/domains', description: '' },
        { method: 'DELETE', path: '/projects/{projectId}/domains', description: '' },
        { method: 'POST', path: '/projects/{projectId}/run-sandbox', description: '' },
        { method: 'DELETE', path: '/projects/{projectId}/delete-sandbox', description: '' },
        { method: 'POST', path: '/projects/clone-website-claude', description: 'Clone with Claude Sonnet 3.5 Vision API' },
        { method: 'GET', path: '/projects/recruit/list', description: 'Get all projects from Vercel' },
        { method: 'DELETE', path: '/projects/recruit/delete-all', description: 'Delete ALL projects from Vercel (DANGEROUS)' }
      ]
    },
    {
      id: 'messages',
      title: 'Messages',
      endpoints: [
        { method: 'POST', path: '/projects/{projectId}/versions/{versionId}/messages/edit', description: '' },
        { method: 'POST', path: '/projects/{projectId}/versions/{versionId}/env/edit', description: '' },
        { method: 'POST', path: '/projects/{projectId}/versions/{versionId}/settings', description: '' },
        { method: 'POST', path: '/projects/{projectId}/versions/{versionId}/messages', description: '' },
        { method: 'GET', path: '/projects/{projectId}/versions/{versionId}/messages', description: '' },
        { method: 'GET', path: '/projects/{projectId}/versions/{versionId}/improvements', description: '' },
        { method: 'GET', path: '/projects/{projectId}/versions/{versionId}/approve', description: '' },
        { method: 'GET', path: '/projects/{projectId}/messages', description: '' }
      ]
    },
    {
      id: 'sse',
      title: 'SSE',
      endpoints: [
        { method: 'GET', path: '/sse/messages', description: 'Subscribe to SSE user message notifications' }
      ]
    },
    {
      id: 'image',
      title: 'Image',
      endpoints: [
        { method: 'POST', path: '/images/generate', description: '' },
        { method: 'GET', path: '/images', description: '' },
        { method: 'DELETE', path: '/images', description: '' },
        { method: 'POST', path: '/images/save', description: '' },
        { method: 'POST', path: '/images/upload', description: '' }
      ]
    },
    {
      id: 'dnsimple',
      title: 'Dnsimple',
      endpoints: [
        { method: 'GET', path: '/dnsimple/domains', description: '' },
        { method: 'GET', path: '/dnsimple/domains/{domainId}', description: '' },
        { method: 'GET', path: '/dnsimple/domains/check/{domainName}', description: '' },
        { method: 'POST', path: '/dnsimple/domains/premium-price/{domainName}', description: '' },
        { method: 'GET', path: '/dnsimple/domains/prices/{domainName}', description: '' },
        { method: 'POST', path: '/dnsimple/domains/preregister/{domainName}', description: '' },
        { method: 'POST', path: '/dnsimple/domains/register/{domainName}', description: '' },
        { method: 'POST', path: '/dnsimple/domains/auto-renew/{domainName}', description: '' },
        { method: 'GET', path: '/dnsimple/search/connect', description: '' },
        { method: 'DELETE', path: '/dnsimple/domains/{domainName}', description: '' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <h1 className="text-2xl font-bold text-gray-900">webild-backend</h1>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">OAS3</span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">OAS3.1</span>
        </div>
        <p className="text-gray-600 text-sm">The API description</p>
      </div>

      {/* Server Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Servers</label>
        <select 
          value={selectedServer}
          onChange={(e) => setSelectedServer(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="http">http</option>
        </select>
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600">
          Authorize
        </button>
      </div>

      {/* API Sections */}
      <div className="space-y-0 border border-gray-200 rounded">
        {apiSections.map((section) => (
          <div key={section.id} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full section-header flex items-center justify-between hover:bg-gray-200 transition-colors"
            >
              <span className="font-semibold text-gray-800">{section.title}</span>
              {expandedSections[section.id] ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="divide-y divide-gray-200">
                {section.endpoints.map((endpoint, index) => (
                  <EndpointRow
                    key={`${section.id}-${index}`}
                    method={endpoint.method}
                    path={endpoint.path}
                    description={endpoint.description}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiDocumentation;