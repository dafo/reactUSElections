import { Candidate } from '../models/USElectionsData/candidate';
import { CandidateVoteResult } from '../models/USElectionsData/candidate-vote-result';
import { FetchApi } from './fetch-api';
import { StateVoteResult } from '../models/USElectionsData/state-vote-result';
import { VoteCountResult } from '../models/USElectionsData/vote-count-result';
import { VoteResult } from '../models/USElectionsData/vote-result';
import { YearModel } from '../models/USElectionsData/year-model';

const API_ENDPOINT = 'https://elections.appbuilder.dev';

export async function getYearModelList(): Promise<YearModel[]> {
  return await FetchApi.fetchApiResponse<YearModel[]>(`${API_ENDPOINT}/api/Election/years`, []);
}

export async function getVoteResultList(year: number): Promise<VoteResult[]> {
  if (!year) {
    return Promise.resolve([]);
  }
  return await FetchApi.fetchApiResponse<VoteResult[]>(`${API_ENDPOINT}/api/Election/electoral-votes/${year}`, []);
}

export async function getVoteResultList1(year: number): Promise<VoteResult[]> {
  if (!year) {
    return Promise.resolve([]);
  }
  return await FetchApi.fetchApiResponse<VoteResult[]>(`${API_ENDPOINT}/api/Election/popular-votes/${year}`, []);
}

export async function getCandidateVoteResultList(year: number): Promise<CandidateVoteResult[]> {
  if (!year) {
    return Promise.resolve([]);
  }
  return await FetchApi.fetchApiResponse<CandidateVoteResult[]>(`${API_ENDPOINT}/api/Election/votes/${year}/by-candidate`, []);
}

export async function getStateVoteResultList(year: number): Promise<StateVoteResult[]> {
  if (!year) {
    return Promise.resolve([]);
  }
  return await FetchApi.fetchApiResponse<StateVoteResult[]>(`${API_ENDPOINT}/api/Election/popular-votes/${year}/by-state`, []);
}

export async function getVoteCountResult(year: number, party: string): Promise<VoteCountResult | undefined> {
  if (!year || !party) {
    return Promise.resolve(undefined);
  }
  return await FetchApi.fetchApiResponse<VoteCountResult | undefined>(`${API_ENDPOINT}/api/Election/popular-votes/${year}/${party}`, undefined);
}

export async function getCandidate(year: number): Promise<Candidate | undefined> {
  if (!year) {
    return Promise.resolve(undefined);
  }
  return await FetchApi.fetchApiResponse<Candidate | undefined>(`${API_ENDPOINT}/api/Election/democratic-candidate/${year}`, undefined);
}

export async function getVoteCountResult1(year: number, party: string): Promise<VoteCountResult | undefined> {
  if (!year || !party) {
    return Promise.resolve(undefined);
  }
  return await FetchApi.fetchApiResponse<VoteCountResult | undefined>(`${API_ENDPOINT}/api/Election/electoral-votes/${year}/${party}`, undefined);
}

export async function getCandidate1(year: number): Promise<Candidate | undefined> {
  if (!year) {
    return Promise.resolve(undefined);
  }
  return await FetchApi.fetchApiResponse<Candidate | undefined>(`${API_ENDPOINT}/api/Election/republican-candidate/${year}`, undefined);
}
