import { redirect } from 'react-router-dom';
import CandidatesAndVotes from './candidates-and-votes/candidates-and-votes';

export const routes = [
  { index: true, loader: () => redirect('candidates-and-votes') },
  { path: 'candidates-and-votes', element: <CandidatesAndVotes />, text: 'Candidates and votes' }
];
