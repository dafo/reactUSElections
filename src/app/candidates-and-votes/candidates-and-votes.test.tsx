import { expect, test, vi } from 'vitest';
import { GlobalContext } from '../hooks/context-hooks';
import { render } from '@testing-library/react';
import CandidatesAndVotes from './candidates-and-votes';
import 'element-internals-polyfill';

const mockGlobalState: any = {};
const mockSetGlobalState = () => {};
// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders CandidatesAndVotes component', () => {
  const wrapper = render(
    <GlobalContext.Provider value={{ globalState: mockGlobalState, setGlobalState: mockSetGlobalState }}>
      <CandidatesAndVotes />
    </GlobalContext.Provider>);
  expect(wrapper).toBeTruthy();
});